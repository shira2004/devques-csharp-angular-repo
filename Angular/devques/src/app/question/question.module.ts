import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddQuesComponent } from './components/add-ques/add-ques.component';
import { QuesListComponent } from './components/ques-list/ques-list.component';
import { DetailsComponent } from './components/details/details.component';
import { RecommendedQuestionsComponent } from './components/recommended-questions/recommended-questions.component';
import { QuestionRoutingModule } from './question.routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
    declarations: [DetailsComponent , AddQuesComponent , RecommendedQuestionsComponent , QuesListComponent ],
    imports: [
      CommonModule, 
      ReactiveFormsModule,
      FormsModule,
    //   MatCardModule ,
      MatButtonModule,
      MatStepperModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatCardModule,
      QuestionRoutingModule
    ]
  })
  export class QuestionModule { }