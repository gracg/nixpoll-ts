import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from 'src/app/models/Poll';
import { PollOption } from 'src/app/models/PollOption';
import { NixPollHelperService } from 'src/app/services/nix-poll-helper.service';

@Component({
  selector: 'app-poll-result',
  templateUrl: './poll-result.component.html',
  styleUrls: ['./poll-result.component.scss']
})
export class PollResultComponent implements OnInit {

  @Input() pollId :number|null = null;
  public poll :Poll|null=null;

  public data :any[]=[];
  constructor(private nix :NixPollHelperService) { }

  ngOnInit(): void {
    this.nix.getPoll(this.pollId!).subscribe((element :Poll) => {
      this.poll=element;

      this.poll.options.forEach((item :PollOption) => {
        this.data.push({name:item.name, value:item.count})
      });
      this.data.sort((a,b) => {return b.value-a.value;});
      console.log(this.data);

    });
  }

}
