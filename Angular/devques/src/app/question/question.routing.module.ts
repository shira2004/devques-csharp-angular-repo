import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './components/details/details.component';
import { AddQuesComponent } from './components/add-ques/add-ques.component';
import { RecommendedQuestionsComponent } from './components/recommended-questions/recommended-questions.component';
import { QuesListComponent } from './components/ques-list/ques-list.component';

const questionRoute:Routes=[
    { path: '', redirectTo: 'ques-list', pathMatch: 'full' },
    {path: 'ques-list' ,component: QuesListComponent},
    {path: "ques-details/:id", component: DetailsComponent },
    {path: 'add-ques' ,component: AddQuesComponent},
    {path: 'recommended-questions' ,component: RecommendedQuestionsComponent},
]
@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(questionRoute)
    ],
    exports: [RouterModule]
  })
  export class QuestionRoutingModule { }
  