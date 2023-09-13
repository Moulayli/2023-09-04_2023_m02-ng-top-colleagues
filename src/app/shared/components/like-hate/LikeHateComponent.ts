import { Component, Output, EventEmitter } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';



@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  @Output() likeHateEvent = new EventEmitter<LikeHate>();

  score: number = 0;
  LikeHate: LikeHate | null = null;


  onLike() {
    if (this.score < 1000) {
      this.score++;
      this.likeHateEvent.emit(LikeHate.LIKE);
    }
  }

  onHate() {
    if (this.score > -1000) {
      this.score--;
      this.likeHateEvent.emit(LikeHate.HATE);
    }
  }
}
