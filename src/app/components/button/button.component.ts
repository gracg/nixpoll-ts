import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()  text :string|null = null;
  @Input()  link :string|null = null;

  constructor() { }

  ngOnInit(): void {
  }

  public getText() :string {
    return this.text==null?"null text":this.text;
  }

  public getLink() :string {
    return this.link==null?"/":this.link;
  }

}
