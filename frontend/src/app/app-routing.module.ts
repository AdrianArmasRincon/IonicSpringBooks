import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs-menu/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs-menu',
    loadChildren: () => import('./tabs-menu/tabs-menu.module').then(m => m.TabsMenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
