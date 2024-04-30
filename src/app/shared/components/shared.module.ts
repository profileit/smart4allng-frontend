import { NgModule } from "@angular/core";
import { TagComponent } from "./tag/tag.component";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { IonicModule } from "@ionic/angular";


@NgModule({
  declarations: [TagComponent, HeaderComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [TagComponent, HeaderComponent] // export the component to make it available in other modules where the Shared module is imported
  
})
export class SharedModule {  }