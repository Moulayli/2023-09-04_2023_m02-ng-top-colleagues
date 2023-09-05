import { Component ,Input } from '@angular/core';
import { Collegue } from 'src/app/models/collegue';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() collegue : Collegue | undefined;
 // console.log(collegue)
}
