import { Component, OnInit, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../models/question.model';
import { AnswerService } from '../../../services/answer.service';
import { APP_ROUTES } from '../../../app_routes';
import { Answer } from '../../../models/answer.model';


@Component({
  selector: 'app-ques-list',
  templateUrl: './ques-list.component.html',
  styleUrl: './ques-list.component.css'
})
export class QuesListComponent implements OnInit{
  public selectedQues!: Question
  public serch = ''
  //public filterQuesArr!: Question[]
  public quesList!: Question[]
  public ansList!: Answer[]

  constructor(private router: Router, private route: ActivatedRoute, private _quesService: QuestionService, private _ansService: AnswerService) { }

  ngOnInit(): void {
    console.log('on init');

    this.route.queryParams.subscribe((params) => {
      const categoryIds: number[] = params['categories'] ? params['categories'].split(',').map(Number) : [];
      console.log('going to fetch by category IDs 😂');
      this._quesService.getQuestionsByCategoryIds(categoryIds).subscribe({
        next: (res) => {
          console.log(res);
          this.quesList = res;
          console.log('going to bring answers');

          this._ansService.getAnswersByCategoryIds(categoryIds).subscribe({
            next: (res) => {
              console.log('ths is the rus');

              console.log(res);
              this.ansList = res;
            },
            error: (err) => {
              console.log('i didnt bring answers ...😢');

              console.log(err);
            }
          });
        },
        error: (err) => {
          console.log('i didnt bring ques details 😢');

          console.log(err);
        }
      });
    });
  }

 
    public showDetails(ques: Question) {
    this._quesService.setSelectedQuestion(ques);
    this._ansService
    this.router.navigate([APP_ROUTES.DETAILS, ques.questionId]);
  }
  handleImageError(event: any) {
    console.error('Error loading image:', event);
  }
}