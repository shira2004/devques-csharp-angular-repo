import { Component, OnInit, input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
// import { DatePipe } from '@angular/common';

import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../models/question.model';
import { AnswerService } from '../../../services/answer.service';
import { APP_ROUTES } from '../../../app_routes';
import { Answer } from '../../../models/answer.model';
import { questionForUser } from '../../../models/questionForUser';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../home-components/dialog/dialog.component';



@Component({
  selector: 'app-ques-list',
  templateUrl: './ques-list.component.html',
  styleUrl: './ques-list.component.css'
})
export class QuesListComponent implements OnInit {
  public selectedQues!: Question
  public serch = ''
  public quesList!: Question[]
  public ansList!: Answer[]
  private params: number[] = [];
  //private previousRoute: string = '';
  quesForUser!:questionForUser
  userId!: number;

  dialogData = {
    text1: 'Good !',
    text2: 'We add this question for your personal list.',
    imageSrc: '../../assets/pic/v.png',
    button: {
      label: 'Go to Home',
      onClick: () => {
        this.router.navigate([APP_ROUTES.HOME]);
        console.log('OK button clicked');

      },
    },
  };


  constructor(private router: Router,
    private route: ActivatedRoute,
    private _questionService: QuestionService,
    private _ansService: AnswerService,
    public dialog: MatDialog

  ) { }
  ngOnInit(): void {

    var currentUserString = localStorage.getItem('user');
    if (currentUserString !== null) {
      var currentUser = JSON.parse(currentUserString);
      this.userId = currentUser.userId;

    } else {
      console.log('User data is not present in local storage.');
    }
    if (!this._questionService.isArrow) {
      console.log("not from arrow");
      this.route.queryParams.subscribe((queryParams: Params) => {
        this.params = queryParams['categories'] ? queryParams['categories'].split(',').map(Number) : [];
        console.log('Category IDs:', this.params);
        console.log('going to ques😁');
        
        this._questionService.getQuestionsByCategoryIds(this.params).subscribe({
          next: (res) => {
            console.log('Questions:', res);
            this._questionService.currentQuestions = this.quesList = res;
            console.log('Fetching answers');
            this._ansService.getAnswersByCategoryIds(this.params).subscribe({
              next: (ansRes) => {
                console.log('Answers:', ansRes);
                this.ansList = ansRes;
              },
              error: (ansErr) => {
                console.log('Error fetching answers 😢');
                console.log(ansErr);
              }
            });
          },
          error: (err) => {
            console.log('Error fetching questions 😢');
            console.log(err);
          }
        });
      });
    }
    else {
      console.log("from arrow");
      this.quesList = this._questionService.currentQuestions
    }

    console.log('Fetching answers');
    this._ansService.getAnswersByCategoryIds(this.params).subscribe({
      next: (ansRes) => {
        console.log('Answers:', ansRes);
        this.ansList = ansRes;
      },
      error: (ansErr) => {
        console.log('Error fetching answers 😢');
        console.log(ansErr);
      }
    });
  }




  public showDetails(ques: Question) {
    this._questionService.setSelectedQuestion(ques);
    this.router.navigate([APP_ROUTES.DETAILS, ques.questionId]);
  }

  handleImageError(event: any) {
    console.error('Error loading image:', event);
  }

  setDifficulty(ques: Question, difficulty: number) {
    this.quesForUser = {
      idQues: 0,
      userId: this.userId,
      questionId: ques.questionId,
      kind: ques.kind || 0,
      level: difficulty
    };
  
    this._questionService.dragQuestLevel(this.quesForUser)
      .subscribe({
        next: (res) => {
          console.log('😊');
          console.log(res);
          this.dialog.open(DialogComponent, {
            data: this.dialogData,
            height: '600px',
            width: '400px',
          });
        },
        error: (err) => {
          console.error('Error dragging question level 😢');
          console.error(err);
        }
      });
  }
   
  }
