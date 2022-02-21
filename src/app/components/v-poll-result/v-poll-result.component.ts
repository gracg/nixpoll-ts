import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-v-poll-result',
  templateUrl: './v-poll-result.component.html',
  styleUrls: ['./v-poll-result.component.scss']
})
export class VPollResultComponent implements OnInit {

  public pollId :number|null=null;
  constructor(
    private route: ActivatedRoute) 
    {


  }

  ngOnInit(): void {
    this.pollId = Number(this.route.snapshot.paramMap.get("id"));
    
  }

}
