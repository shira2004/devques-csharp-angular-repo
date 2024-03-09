import { NgModule } from '@angular/core';
import { CommonModule ,DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';


import { AddQuesComponent } from './components/add-ques/add-ques.component';
import { QuesListComponent } from './components/ques-list/ques-list.component';
import { DetailsComponent } from './components/details/details.component';
import { RecommendedQuestionsComponent } from './components/recommended-questions/recommended-questions.component';
import { QuestionRoutingModule } from './question.routing.module';
import { FileReaderPipe } from '../file-reader.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CategoryselectionComponent } from './components/category-selection/category-selection.component';
import { HighlightDirective } from '../highlight.directive';

// import { HighlightJsModule } from 'ngx-highlight-js';

@NgModule({
  declarations: [DetailsComponent, AddQuesComponent, RecommendedQuestionsComponent, QuesListComponent,CategoryselectionComponent , FileReaderPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    QuestionRoutingModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    HighlightDirective,
    DatePipe,
    
    // HighlightJsModule,
  ]
})
export class QuestionModule { }