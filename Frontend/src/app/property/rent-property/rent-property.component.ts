import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { Houseservice } from 'src/app/services/Houseservice';

@Component({
  selector: 'rent-property',
  templateUrl: './rent-property.component.html',
  styleUrls: ['./rent-property.component.css']
})
export class RentPropertyComponent implements OnInit {
  SellRent = 2;
  properties: IPropertyBase[];
  Today = new Date();
  City = '';
  SearchCity = '';
  SortbyParam = '';
  SortDirection = 'asc';
  constructor(private route: ActivatedRoute, private houseservice: Houseservice) { }

  ngOnInit() {

  this.houseservice.GetAllProperties(this.SellRent).subscribe(
      data => {
          this.properties = data;
          console.log(data);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  )
  }

}
