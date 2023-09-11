import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/test.component';
import { LikeHateComponent } from './shared/components/like-hate/like-hate.component';
import { ColleagueComponent } from './shared/components/colleague/colleague.component';
import { ScorePipe } from './shared/pipes/score.pipe';
import { ColleagueListComponent } from './shared/components/colleague-list/colleague-list.component';
import { VotingHistoryComponent } from './shared/components/voting-history/voting-history.component';
import { WelcomePage } from './pages/welcome/welcome.page';
import { CreateColleaguePage } from './pages/create-colleague/create-colleague.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
    WelcomePage,
    CreateColleaguePage
    ],
  imports: [BrowserModule, NgbModule, NgbCarouselModule, NgIf,ReactiveFormsModule ,CommonModule],
  providers: [],
  bootstrap: [AppComponent],
  //entryComponents: [TestComponent]
})
export class AppModule {}
