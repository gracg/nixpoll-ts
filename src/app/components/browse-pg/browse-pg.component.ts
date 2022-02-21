import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poll } from 'src/app/models/Poll';
import { NixPollHelperService } from 'src/app/services/nix-poll-helper.service';

@Component({
  selector: 'app-browse-pg',
  templateUrl: './browse-pg.component.html',
  styleUrls: ['./browse-pg.component.scss']
})
export class BrowsePgComponent implements OnInit {

  public polls: Poll[]|null=null;

  constructor(private nix: NixPollHelperService,private router:Router) { }

  ngOnInit(): void {
    this.nix.getPolls().subscribe((elements :Poll[]) => {
      console.log(elements)
      let pollsTemp :Poll[] = [];
      elements.forEach(n =>pollsTemp.push(n));
      this.polls=pollsTemp;
      console.log(this.polls);
    });
  }

  public goToPoll(poll:Poll) :void {
    this.router.navigateByUrl(`/poll/${poll.id}`)
  }

}
