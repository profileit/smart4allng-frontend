import { NgModule } from "@angular/core";
import { TagComponent } from "./tag/tag.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [TagComponent],
  imports: [CommonModule],
  exports: [TagComponent] // export the component to make it available in other modules where the Shared module is imported
  
})
export class SharedModule {  }