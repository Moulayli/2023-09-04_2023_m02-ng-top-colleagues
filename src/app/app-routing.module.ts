import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateColleaguePage } from './pages/create-colleague/create-colleague.page';
import { ColleagueListComponent } from './shared/components/colleague-list/colleague-list.component';
import { WelcomePage } from './pages/welcome/welcome.page';
import { PseudoCompomentPage } from './pages/pseudo-compoment/pseudo-compoment.page';

const routes: Routes = [
  { path: 'form-template', component: CreateColleaguePage },
  { path: 'colleague', component: ColleagueListComponent },
  { path: 'colleague/:pseudo', component: PseudoCompomentPage },
  { path: '', component: WelcomePage },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
