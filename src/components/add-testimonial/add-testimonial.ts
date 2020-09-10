import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

/**
 * Generated class for the AddTestimonialComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-testimonial',
  templateUrl: 'add-testimonial.html'
})
export class AddTestimonialComponent {

  addTestimonialForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.addTestimonialForm = this.formBuilder.group({
      reason: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }
  get Reason() {
    return this.addTestimonialForm.get("reason");
  }
  get Message() {
    return this.addTestimonialForm.get("message");
  }

  addTestimonial() {
    console.log(this.addTestimonialForm);
    if(this.addTestimonialForm.invalid) {
      return;
    }
    console.log(this.addTestimonialForm.value);
  }

  dismiss() {
    this.navCtrl.pop();
  }

}

