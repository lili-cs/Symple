import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ProjectComponent} from './pages/project/project.component'

const routes: Routes = [
  // { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  // { path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: '/projects', component: ProjectComponent},
  {path: '', redirectTo: './pages/dashboard/dashboard.module#DashboardPageModule'}



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
