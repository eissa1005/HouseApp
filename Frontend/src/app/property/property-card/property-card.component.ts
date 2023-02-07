import { Component, Input, OnInit, Output } from '@angular/core';
import { IPropertyBase } from 'src/app/model/IPropertyBase';

@Component({
  selector: 'property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {

  @Input() property : IPropertyBase;
  @Output() hideIcons:boolean
  constructor() {}

  ngOnInit() {


  }
}
