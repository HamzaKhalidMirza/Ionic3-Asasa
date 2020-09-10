import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

/**
 * Generated class for the UpdateProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'update-profile',
  templateUrl: 'update-profile.html'
})
export class UpdateProfileComponent {

  form: FormGroup;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]]
    });

    this.form.patchValue({name: 'Hamza'});
    this.form.patchValue({email: 'sa@mail.com'});
    this.form.patchValue({mobileNo: '03485068163'});
  }
  get Name() {
    return this.form.get("name");
  }
  get Email() {
    return this.form.get("email");
  }
  get MobileNo() {
    return this.form.get("mobileNo");
  }

  updateProfile() {
    console.log(this.form);
    if(this.form.invalid) {
      return;
    }
    console.log(this.form.value);
  }

  dismiss() {
    this.navCtrl.pop();
  }
}
