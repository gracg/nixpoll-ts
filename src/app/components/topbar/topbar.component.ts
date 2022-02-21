import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  private isCollapsed :boolean=true;
  constructor() { }


  ngOnInit(): void {
  }

  public getIsCollapsed() :boolean {
    return this.isCollapsed;
  }

  public flip() :void {
    console.log("flip");
    console.log(this.isCollapsed);
    this.isCollapsed=!this.isCollapsed;
    console.log(this.isCollapsed)
  }

}
