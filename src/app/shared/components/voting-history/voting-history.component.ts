import { Component } from '@angular/core';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss'],
})
export class VotingHistoryComponent {
  constructor(private ServiceVotes: VoteService) {}

  votes = this.ServiceVotes.listVote;
}
