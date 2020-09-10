import { NgModule } from "@angular/core";
import { AddPropertyComponent } from "./add-property/add-property";
import { AddTestimonialComponent } from "./add-testimonial/add-testimonial";
import { IonicModule } from "ionic-angular";
import { UpdateProfileComponent } from "./update-profile/update-profile";
@NgModule({
  declarations: [
    AddPropertyComponent,
    AddTestimonialComponent,
    UpdateProfileComponent,
  ],
  imports: [IonicModule],
  exports: [
    AddPropertyComponent,
    AddTestimonialComponent,
    UpdateProfileComponent,
  ],
  entryComponents: [
    AddPropertyComponent,
    AddTestimonialComponent,
    UpdateProfileComponent,
  ],
})
export class ComponentsModule {}
