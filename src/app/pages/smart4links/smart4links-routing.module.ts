import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Smart4linksPage } from './smart4links.page';

const routes: Routes = [
  {
    path: '',
    component: Smart4linksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Smart4linksPageRoutingModule {}
