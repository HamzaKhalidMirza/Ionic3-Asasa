import { NgModule } from '@angular/core';
import { AddPropertyComponent } from './add-property/add-property';
import { AddTestimonialComponent } from './add-testimonial/add-testimonial';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [AddPropertyComponent,
    AddTestimonialComponent],
	imports: [
    IonicModule
  ],
	exports: [AddPropertyComponent,
    AddTestimonialComponent],
    entryComponents: [
      AddPropertyComponent,
      AddTestimonialComponent
    ]
})
export class ComponentsModule {}
