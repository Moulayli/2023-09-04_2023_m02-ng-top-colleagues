import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/test.component';
import { LikeHateComponent } from './shared/components/like-hate/like-hate.component';
import { ColleagueComponent } from './shared/components/colleague/colleague.component';
import { ScorePipe } from './shared/pipes/score.pipe';
import { ColleagueListComponent } from './shared/components/colleague-list/colleague-list.component';
import { VotingHistoryComponent } from './shared/components/voting-history/voting-history.component';
import { WelcomePage } from './pages/welcome/welcome.page';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
    WelcomePage
    ],
  imports: [BrowserModule, NgbModule, NgbCarouselModule, NgIf],
  providers: [],
  bootstrap: [AppComponent],
  //entryComponents: [TestComponent]
})
export class AppModule {}
