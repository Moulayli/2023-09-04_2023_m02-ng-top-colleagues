import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColleagueService } from 'src/app/providers/colleague.service';

class Collegue {
  pseudo: string | undefined;
  last: string | undefined;
  first: string | undefined;
  photo: string | undefined;
  score : number | undefined;

}

@Component({
  selector: 'tc-create-colleague',
  templateUrl: './create-colleague.page.html',
  styleUrls: ['./create-colleague.page.scss'],
})
export class CreateColleaguePage {

  constructor(private ServiceCollegues: ColleagueService ) {
  }
  monModel = new Collegue();
  submit(): void {
    this.ServiceCollegues.postColleague(this.monModel)
    console.log(this.monModel);
  }
}
