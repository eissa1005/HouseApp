import { Component, OnInit } from '@angular/core';
import { IProperty } from 'src/app/model/IProperty';
import { Houseservice } from 'src/app/services/Houseservice';

@Component({
  selector: 'property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty> = []
  Today = new Date();
  City = '';
  SearchCity = '';
  SortbyParam = '';
  SortDirection = 'asc';

  constructor(private service: Houseservice) { }

  ngOnInit() {

    this.service.getHouseSerives().subscribe(
      data => {
        this.properties = data
        console.log(data)
      }
    )
  }

  onCityFilter() {
    this.SearchCity = this.City
  }
  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
