import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

/**
 * Generated class for the AddPropertyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-property',
  templateUrl: 'add-property.html'
})
export class AddPropertyComponent {

  selection: any;
  propertyTypes: any = [];
  areaUnits: any = [];
  addPropertyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.formInitializer();
    this.selection = 'Sale';
    this.areaUnits = [ 'Kanal', 'Marla', 'Sq. Feet', 'Sq. Yard' ];
    this.propertyTypes = [ 'Apartment', 'House','Penthouse', 'Farm House',
                           'Shop', 'Plaza', 'Office', 'Floor',
                           'Residential Plot', 'Commercial Plot', 'Farm House Plot' ];

    this.addPropertyForm.patchValue({sale_rent: this.selection});
  }

  formInitializer() {
    this.addPropertyForm = this.formBuilder.group({
      sale_rent: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required]],
      city: ['', [Validators.required]],
      propertyDetails: ['', [Validators.required]],
      propertyType: ['', [Validators.required]],
      landArea: ['', [Validators.required]],
      landAreaUnit: ['', [Validators.required]],
      demand: ['', [Validators.required]],
      message: ['']
    });
  }

  get SaleRent() {
    return this.addPropertyForm.get("sale_rent");
  }
  get Username() {
    return this.addPropertyForm.get("userName");
  }
  get Email() {
    return this.addPropertyForm.get("email");
  }
  get MobileNo() {
    return this.addPropertyForm.get("mobileNo");
  }
  get City() {
    return this.addPropertyForm.get("city");
  }
  get PropertyDetails() {
    return this.addPropertyForm.get("propertyDetails");
  }
  get PropertyType() {
    return this.addPropertyForm.get("propertyType");
  }
  get LandArea() {
    return this.addPropertyForm.get("landArea");
  }
  get LandAreaUnit() {
    return this.addPropertyForm.get("landAreaUnit");
  }
  get Demand() {
    return this.addPropertyForm.get("demand");
  }
  get Message() {
    return this.addPropertyForm.get("message");
  }

  addProperty() {
    console.log(this.addPropertyForm);
    if(this.addPropertyForm.invalid) {
      return;
    }
    console.log(this.addPropertyForm.value);
  }

  selectSale() {
    this.selection = 'Sale';
    this.addPropertyForm.patchValue({sale_rent: this.selection});
  }
  selectRent() {
    this.selection = 'Rent';
    this.addPropertyForm.patchValue({sale_rent: this.selection});
  }

  dismiss() {
    this.navCtrl.pop();
  }
}

