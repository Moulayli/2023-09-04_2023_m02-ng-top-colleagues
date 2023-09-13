import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-pseudo-compoment',
  templateUrl: './pseudo-compoment.page.html',
  styleUrls: ['./pseudo-compoment.page.scss'],
})
export class PseudoCompomentPage implements OnInit {
  pseudo: string | null = null;
  collegue: any;

  constructor(
    private route: ActivatedRoute,
    private ServiceCollegues: ColleagueService
  ) {
    this.pseudo = route.snapshot.paramMap.get('pseudo');
  }
  async ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const pseudo = params.get('pseudo');
      try {
        this.collegue = this.ServiceCollegues.getCollegue(pseudo);
        console.log(this.collegue);
      } catch (error) {}
    });
  }
}
