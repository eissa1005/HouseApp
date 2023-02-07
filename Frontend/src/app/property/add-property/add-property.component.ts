import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';
import { Properties } from 'src/app/enums/enums';
import { Ikeyvaluepair } from 'src/app/model/IKeyValuePair';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { Property } from 'src/app/model/Property';
import { AlertifyService } from 'src/app/services/AlertifyService';
import { AS } from 'src/app/services/AS';
import { Houseservice } from 'src/app/services/Houseservice';



@Component({
  selector: 'add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('formTabs') formTabs: TabsetComponent;
  addPropertyForm: FormGroup;
  nextClicked: boolean;
  property = new Property();

  // Will come from masters
  PropertyTypes: Ikeyvaluepair[];
  FurnishTypes: Ikeyvaluepair[];
  CityList: Ikeyvaluepair[];
  propertyView: IPropertyBase = {
    Id: 0,
    Name: '',
    Price: 0,
    SellRent: 0,
    PropertyType: '',
    FurnishingType: '',
    BHK: 0,
    BuiltArea: 0,
    City: '',
    ReadyToMove: false,
  };
  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router,
    private alertify: AlertifyService,
    private houseService: Houseservice,
    private AS: AS
  ) {}

  ngOnInit(): void {
    this.CreateAddPropertyForm();
    this.PropertyTypes = this.houseService.GetAllPropertyType();
    this.FurnishTypes = this.houseService.GetAllFurnishTypes();
    this.CityList = this.houseService.GetAllCities();
  }

  //#region Add PropertyForm
  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: ['1', Validators.required],
        BHK: [null, Validators.required],
        PropertyType: [null, Validators.required],
        FurnishingType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required],
      }),

      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [0],
        Maintenance: [0],
      }),

      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
      }),

      OtherInfo: this.fb.group({
        RTM: [null, Validators.required],
        PossessionOn: [null, Validators.required],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null],
      }),
    });
  }
  //#endregion

  // #region <FormGroups>
  get BasicInfo() {
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
  }

  get PriceInfo() {
    return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
  }

  get AddressInfo() {
    return this.addPropertyForm.controls['AddressInfo'] as FormGroup;
  }

  get OtherInfo() {
    return this.addPropertyForm.controls['OtherInfo'] as FormGroup;
  }
  // #endregion

  // #region <Form Controls>
  get SellRent() {
    return this.BasicInfo.controls['SellRent'] as FormControl;
  }

  get BHK() {
    return this.BasicInfo.controls['BHK'] as FormControl;
  }

  get PropertyType() {
    return this.BasicInfo.controls['PropertyType'] as FormControl;
  }

  get FurnishingType() {
    return this.BasicInfo.controls['FurnishingType'] as FormControl;
  }

  get Name() {
    return this.BasicInfo.controls['Name'] as FormControl;
  }

  get City() {
    return this.BasicInfo.controls['City'] as FormControl;
  }

  get Price() {
    return this.PriceInfo.controls['Price'] as FormControl;
  }

  get BuiltArea() {
    return this.PriceInfo.controls['BuiltArea'] as FormControl;
  }

  get CarpetArea() {
    return this.PriceInfo.controls['CarpetArea'] as FormControl;
  }

  get Security() {
    return this.PriceInfo.controls['Security'] as FormControl;
  }

  get Maintenance() {
    return this.PriceInfo.controls['Maintenance'] as FormControl;
  }

  get FloorNo() {
    return this.AddressInfo.controls['FloorNo'] as FormControl;
  }

  get TotalFloor() {
    return this.AddressInfo.controls['TotalFloor'] as FormControl;
  }

  get Address() {
    return this.AddressInfo.controls['Address'] as FormControl;
  }

  get LandMark() {
    return this.AddressInfo.controls['LandMark'] as FormControl;
  }

  get RTM() {
    return this.OtherInfo.controls['RTM'] as FormControl;
  }

  get PossessionOn() {
    return this.OtherInfo.controls['PossessionOn'] as FormControl;
  }

  get AOP() {
    return this.OtherInfo.controls['AOP'] as FormControl;
  }

  get Gated() {
    return this.OtherInfo.controls['Gated'] as FormControl;
  }

  get MainEntrance() {
    return this.OtherInfo.controls['MainEntrance'] as FormControl;
  }

  get Description() {
    return this.OtherInfo.controls['Description'] as FormControl;
  }

  // #endregion

  //#region mapProperty
  mapProperty(): void {
    this.property.Id = this.houseService.newProID();
    this.property.SellRent = +this.SellRent.value;
    this.property.BHK = this.BHK.value;
    this.property.PropertyType = this.PropertyType.value;
    this.property.Name = this.Name.value;
    this.property.CityId = this.City.value;
    this.property.FurnishingType = this.FurnishingType.value;
    this.property.Price = this.Price.value;
    this.property.Security = this.Security.value;
    this.property.Maintenance = this.Maintenance.value;
    this.property.BuiltArea = this.BuiltArea.value;
    this.property.CarpetArea = this.CarpetArea.value;
    this.property.FloorNo = this.FloorNo.value;
    this.property.TotalFloors = this.TotalFloor.value;
    this.property.Address = this.Address.value;
    this.property.Address2 = this.LandMark.value;
    this.property.ReadyToMove = this.RTM.value;
    this.property.Gated = this.Gated.value;
    this.property.MainEntrance = this.MainEntrance.value;
    // this.property.EstPossessionOn =
    // this.datePipe.transform(this.PossessionOn.value,'MM/dd/yyyy')?.toString();
    this.property.Description = this.Description.value;
  }
  //#endregion

  onSubmit() {
    if (this.allTabsValid()) {
      this.mapProperty();
      this.houseService.AddProperty(this.property);
      this.alertify.success('Congrats Add New Property');
      this.router.navigate(['/'])
    }else{
      this.alertify.error('this Property not added please Check error');

    }
  }

  onBack() {
    this.router.navigate(['/']);
  }

  //#region  AllTabs Validations
  allTabsValid(): boolean {
    if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }

    if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }

    if (this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }

    if (this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
    }
    return true;
  }
  //#endregion

  //#region selectTab
  selectTab(NextTabId: number, IsCurrentTabValid: boolean) {
    this.nextClicked = true;
    if (IsCurrentTabValid) {
      this.formTabs.tabs[NextTabId].active = true;
    }
  }
  //#endregion
}
