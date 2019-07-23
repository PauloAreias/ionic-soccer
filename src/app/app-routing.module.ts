import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'equipas-info', loadChildren: './equipas-info/equipas-info.module#EquipasInfoPageModule' },
  { path: 'equipas-info/:id', loadChildren: './equipas-info/equipas-info.module#EquipasInfoPageModule' },
  { path: 'player/:id', loadChildren: './player/player.module#PlayerPageModule' },
  { path: 'comments', loadChildren: './comments/comments.module#CommentsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
