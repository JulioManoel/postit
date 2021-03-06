import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {

  @Input()
  public src: string = '';

  @Input()
  public full: boolean = false;

  @Outout
  public onClick: Event

}
