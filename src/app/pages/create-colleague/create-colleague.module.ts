import { CreateColleagueFormsComponent } from './../../shared/components/create-colleague-forms/create-colleague-forms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleaguePage } from './create-colleague.page';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateColleaguePage,

    CreateColleagueFormsComponent

  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class CreateColleagueModule { }
