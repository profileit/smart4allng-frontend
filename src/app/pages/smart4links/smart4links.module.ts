import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Smart4linksPageRoutingModule } from './smart4links-routing.module';

import { Smart4linksPage } from './smart4links.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Smart4linksPageRoutingModule,
    SharedModule
  ],
  declarations: [Smart4linksPage]
})
export class Smart4linksPageModule {}
