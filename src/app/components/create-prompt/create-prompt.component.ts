import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Poll } from 'src/app/models/Poll';
import { PollOption } from 'src/app/models/PollOption';
import { NixPollHelperService } from 'src/app/services/nix-poll-helper.service';

@Component({
  selector: 'app-create-prompt',
  templateUrl: './create-prompt.component.html',
  styleUrls: ['./create-prompt.component.scss']
})
export class CreatePromptComponent implements OnInit {
  form :FormGroup;
  public titleClicked :boolean = false;
  public firstSubmit :boolean = false;


  constructor(
    private fb: FormBuilder, 
    private nix: NixPollHelperService,
    private router :Router
    ) {
    this.form = this.fb.group({
      title: [null,Validators.required],
      description: [null],
      options: this.fb.array([[]])
    });
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null,Validators.required],
      description: [null],
      options: this.fb.array([["example"],["example"]])
    });
  }

  public addOption(index :number) :void {
    let lastIndex :number = (<FormArray>this.form.controls["options"]).length-1;

    if(index==lastIndex && index<=8) {
      (<FormArray>this.form.controls["options"]).push(new FormControl([]));
    }
  }

  public titleClick() :void {
    this.titleClicked=true;
  }


  public isTitleValid() :boolean {
    if((this.titleClicked==true || this.firstSubmit==true) && this.form.controls["title"].invalid) {
      return false;
    }
    return true;
  }

  public getOptions() :FormArray {
    return this.form.get("options") as FormArray;
  }

  public onSubmit(formObj :FormGroup) :void {
    this.firstSubmit=true;
    
    let options :string[] = [];
    let optionArray :FormArray = (<FormArray>this.form.controls["options"]);

    for(let i :number =0;i<optionArray.length;i++) {
      let optionValue :string|null = optionArray.get(i.toString())?.value;
      if(typeof optionValue === "string") {
        options.push(optionValue);
      }
    }

    if(this.form.valid) {
      let pollOptions :PollOption[] = [];

      options.forEach((element :string) => {

        let tempPollOption :PollOption = {
          id: null,
          name: element,
          count: 0
        }

        pollOptions.push(tempPollOption)
      });

      let poll :Poll = {
        id:null,
        title: this.form.controls["title"].value,
        description: this.form.controls["description"].value,
        options: pollOptions
      };

      let pollObservable : Observable<Poll>  = this.nix.NewPoll(poll);
      pollObservable.subscribe((response :Poll) => {
        this.router.navigate([`/poll/${response.id}`]);
      });

    }

  }

}
