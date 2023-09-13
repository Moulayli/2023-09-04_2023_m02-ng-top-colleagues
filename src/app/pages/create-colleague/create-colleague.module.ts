import { CreateColleagueFormsComponent } from './../../shared/components/create-colleague-forms/create-colleague-forms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleaguePage } from './create-colleague.page';
import { FormsModule } from '@angular/forms';
import { MenuPage } from '../menu/menu.page';
import { PseudoCompomentPage } from '../pseudo-compoment/pseudo-compoment.page';



@NgModule({
  declarations: [
    CreateColleaguePage,

    CreateColleagueFormsComponent,
     MenuPage,
     PseudoCompomentPage

  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class CreateColleagueModule { }
