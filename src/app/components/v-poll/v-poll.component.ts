import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-v-poll',
  templateUrl: './v-poll.component.html',
  styleUrls: ['./v-poll.component.scss']
})
export class VPollComponent implements OnInit {

  public pollId :number|null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pollId=Number(this.route.snapshot.paramMap.get("id"));
  }

  public getPollId() :number {
    return this.pollId!;
  } 

}
