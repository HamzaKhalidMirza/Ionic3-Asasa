import { UpdateProfileComponent } from './../../components/update-profile/update-profile';
import { AddTestimonialComponent } from './../../components/add-testimonial/add-testimonial';
import { AddPropertyComponent } from './../../components/add-property/add-property';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  routeToAddProperty() {
    this.navCtrl.push(AddPropertyComponent);
  }

  routeToAddTestimonial() {
    this.navCtrl.push(AddTestimonialComponent);
  }

  routeToUpdateProfile() {
    this.navCtrl.push(UpdateProfileComponent);
  }
}
