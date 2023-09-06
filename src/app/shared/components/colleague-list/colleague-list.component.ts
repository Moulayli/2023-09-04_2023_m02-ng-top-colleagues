import { Component } from '@angular/core';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss'],
})
export class ColleagueListComponent {

  constructor(private ServiceCollegues: ColleagueService ) {
  }
  collegues = this.ServiceCollegues.listerCollegues();
}
