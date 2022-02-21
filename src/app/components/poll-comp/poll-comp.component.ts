import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Poll } from 'src/app/models/Poll';
import { PollOption } from 'src/app/models/PollOption';
import { NixPollHelperService } from 'src/app/services/nix-poll-helper.service';

@Component({
  selector: 'app-poll-comp',
  templateUrl: './poll-comp.component.html',
  styleUrls: ['./poll-comp.component.scss']
})
export class PollCompComponent implements OnInit {

  @Input() pollId :number =1;
  private poll: Poll|null=null;
  public optionStrArr :string[] =[];
  public form: FormGroup;
  public voteIndex :number|null =null;

  constructor(
    private nix: NixPollHelperService,
    private fb:FormBuilder,
    private router: Router
  ) {
    this.form=this.fb.group({});


  }

  ngOnInit(): void {
     let pollObservable :Observable<Poll> = this.nix.getPoll(this.pollId);
     
     pollObservable.subscribe((element :Poll) => {
        this.poll=element;

        this.form=this.fb.group({
          options: this.fb.array([]),
        });

        let optionStrArr: string[] = element.options.map((optionTemp :PollOption) => optionTemp.name);
        console.log(optionStrArr);

        let optionFormArr :FormArray  = (<FormArray>this.form.controls["options"])

        optionStrArr.forEach((str :string) => {
          optionFormArr.push(new FormControl([str]));
          this.optionStrArr.push(str);
        });


        
     });
  }

  public getTitle() :string {
    return this.poll?.title!;
  }

  public getDescription() :string {
    return this.poll?.description!;
  }

  public isPoll() :boolean {
    return this.poll!=null;
  }

  public getOptions() :FormArray {
    return (<FormArray>this.form.controls["options"]);
  }

  public log() :void {
    console.log(this.form);
  } 

  public setVoteIndex(index :number) {
    this.voteIndex=index;
    this.log()
  }

  public vote() :void {
    let optionId :number = this.poll?.options[this.voteIndex!].id!;
    this.nix.voteForOption(optionId);
    this.router.navigateByUrl(`poll/${this.pollId}/r`);

  }

}
