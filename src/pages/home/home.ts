import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

}
