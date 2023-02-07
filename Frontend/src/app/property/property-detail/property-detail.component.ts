import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/model/Property';
import { Houseservice } from 'src/app/services/Houseservice';

@Component({
  selector: 'property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  public propertyID: number;
  property = new Property();
  constructor(
    private router: ActivatedRoute,
    private houseservice: Houseservice
  ) {}

  ngOnInit() {
    this.propertyID = +this.router.snapshot.params['id'];
    this.router.params.subscribe((params) => {
      this.propertyID = Number(params['id']);
      this.houseservice.GetProperty(this.propertyID).subscribe(
        (data) => {
        this.property = data as Property;
      });
    });
  }
}
