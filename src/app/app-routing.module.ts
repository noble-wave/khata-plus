import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/sell', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./protected/protected.module').then((m) => m.ProtectedModule),
  },
  // { path: '**', redirectTo: '/login' },
  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  { path: '**', redirectTo: '/sell' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
