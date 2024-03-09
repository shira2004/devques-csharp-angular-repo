import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../models/question.model';
import { AnswerService } from '../../../services/answer.service';
import { MatDialog } from '@angular/material/dialog';
import { APP_ROUTES } from '../../../app_routes';
import { DialogComponent } from '../../../home-components/dialog/dialog.component';
import { Answer } from '../../../models/answer.model';
import { handleFileSelected } from '../../../helper';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  // convertToBlobUrl(arg0: string|undefined): File {
  // throw new Error('Method not implemented.');
  // }
  public question: Question | null = null;
  public filteredAnswers: Answer[] = [];
  showTextField = false;
  showCodeField = false;
  comment: string = '';
  code: string = '';
  public ans!: Answer
  public userId!: number;
  isDarkMode = true;
  selectedImage: File | null = null;
  base64Image: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private _quesService: QuestionService,
    private _ansService: AnswerService,
    private renderer: Renderer2,
    private el: ElementRef,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    var currentUserString = localStorage.getItem('user');

    if (currentUserString !== null) {
      var currentUser = JSON.parse(currentUserString);
      this.userId = currentUser.userId;

    } else {
      console.log('User data is not present in local storage.');
    }
    this._quesService.selectedQuestion$.subscribe((selectedQuestion) => {
      this.question = selectedQuestion;
      const allAnswers = this._ansService.getStoredAnswers();
      if (this.question) {
        this.filteredAnswers = allAnswers.filter(answer => answer.questionId === this.question?.questionId);
      }

    });
  }

  APP_ROUTES = APP_ROUTES
  dialogData1 = {
    text1: 'thank you !',
    text2: 'Your answer has been successfully added.',
    imageSrc: '../../assets/pic/coming.gif',
    button: {
      label: 'OK',
      onClick: () => {
        this.router.navigate([APP_ROUTES.HOME]);
        console.log('OK button clicked');

      },
    },
  };

  dialogData2 = {
    text1: 'ooppss!',
    text2: 'we have problem to add your answer.',
    imageSrc: '../../assets/pic/error.gif',
    button: {
      label: 'OK',
      onClick: () => {
        this.router.navigate(['home']);
        console.log('OK button clicked');

      },
    },
  };


  toggleTextField() {
    this.showTextField = !this.showTextField;
  }
  toggleCodeField() {
    console.log('toggling code field');
    console.log(this.showCodeField);

    this.showCodeField = !this.showCodeField;
    console.log(this.showCodeField);

  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  onSubmit() {
    console.log('submit func');

    this.ans = {
      answerId: 0,
      questionId: this.question?.questionId || 0,
      userId: this.userId,
      content: this.comment,
      code: this.code,
      rating: 0,
      categoryId: this.question?.categoryId || 0,
      image: this.base64Image || '',
      score: 0

    };
    console.log(this.ans);


    this._ansService.addAnswer(this.ans).subscribe({
      next: (res) => {
        console.log(res);
        this.dialog.open(DialogComponent, {
          data: this.dialogData1,
          height: '500px',
          width: '300px',
        });
      },
      error: (err) => {
        console.log('😢');

        console.log(err);
        this.dialog.open(DialogComponent, {
          data: this.dialogData2,
          height: '500px',
          width: '300px',
        });
      }
    });
  }

  onFileSelected(event: any): void {
    handleFileSelected(event, (base64Image) => {
      this.selectedImage = event.target.files[0];
      this.base64Image = base64Image;
     
    });
  }

  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }


  prev() {    
    this._quesService.isArrow = true; 
    this.router.navigate([APP_ROUTES.QUES_LIST]);
  }

}
