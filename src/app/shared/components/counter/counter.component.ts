import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() votes$: Observable<{like: number, hate: number}>;
  like: number = 0;
  hate: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.votes$.subscribe(votes => {
      this.like = votes.like;
      this.hate = votes.hate;
    });
  }

}
