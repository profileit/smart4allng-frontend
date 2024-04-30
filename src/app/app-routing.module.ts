import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'newsfeed',
    pathMatch: 'full'
  },
  {
    path: 'newsfeed',
    loadChildren: () => import('./pages/newsfeed/newsfeed.module').then( m => m.NewsfeedPageModule)
  },  {
    path: 'smart4links',
    loadChildren: () => import('./pages/smart4links/smart4links.module').then( m => m.Smart4linksPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
