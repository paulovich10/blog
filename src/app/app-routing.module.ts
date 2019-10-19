import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [

  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent },
  { path: 'new', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
