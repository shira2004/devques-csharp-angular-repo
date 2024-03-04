import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Category } from '../../../models/category.model';
import { QuestionService } from '../../../services/question.service';
import { CategoryService } from '../../../services/category.service';
import { Question } from '../../../models/question.model';
import { AnswerService } from '../../../services/answer.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../../app_routes';
import { DialogComponent } from '../../../home-components/dialog/dialog.component';
import { Answer } from '../../../models/answer.model';



@Component({
  selector: 'app-add-ques',

  templateUrl: './add-ques.component.html',
  styleUrl: './add-ques.component.css'
})
export class AddQuesComponent implements OnInit {
  public categoryList!: Category[]
  selectedImage: File | null = null;
  base64Image: string | null = null;
  showCodeField = false;
  code: string = '';

  public userId!: number;
  public questId!: number;

  firstFormGroup = this._formBuilder.group({
    categoryCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    contentCtrl: ['', [Validators.required, Validators.minLength(5)]],
    answerCtrl: ['', [Validators.minLength(10)]],
    selectedOption: [0],
    titleCtrl: [''],
    codeCtrl: [''], 
    customOption: ['']
  });
  isLinear = true;
  ques!: Question;
  ans!: Answer;

  options = [
    'Coding',
    'SystemDesign',
    'Behavioral',
    'Technical',
    'ProblemSolving',
    'BrainTeasers',
    'CodingChallenges',
    'SystemArchitecture',
    'WhiteboardCoding',
    'SoftSkills',
    'Theory',
    'CaseStudy',
    'Ethical',
    'ScenarioBased',
    'TestingDebugging',
    'MachineLearning',
    'DevOpsInfrastructure',
    'AgileProjectManagement'
  ];
  constructor(
    private _formBuilder: FormBuilder,
    private _categoryService: CategoryService,
    private _questionService: QuestionService,
    private _ansService: AnswerService,
    public dialog: MatDialog,
    private router: Router,
  ) { }
  ngOnInit(): void {
    var currentUserString = localStorage.getItem('user');

    if (currentUserString !== null) {
      var currentUser = JSON.parse(currentUserString);

      this.userId = currentUser.userId;

    } else {
      console.log('User data is not present in local storage.');
    }

    this._categoryService.getAllCategoriesByServer().subscribe({
      next: (res) => {
        this.categoryList = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  APP_ROUTES = APP_ROUTES
  dialogData1 = {
    text1: 'good !',
    text2: 'Your question has been successfully added.',
    imageSrc: '../../assets/pic/boy.gif',
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
    text2: 'we have problem with creating your quest.',
    imageSrc: '../../assets/pic/error.gif',
    button: {
      label: 'OK',
      onClick: () => {
        this.router.navigate(['home']);
        console.log('OK button clicked');

      },
    },
  };
  commit() {
    this.ques = {
      questionId: 0,
      userId: this.userId,
      companyId: 1,
      categoryId: parseInt(this.firstFormGroup.get('categoryCtrl')!.value || '0'),
      content: this.secondFormGroup.get('contentCtrl')!.value || '',
      image: this.base64Image || '',
      kind: this.secondFormGroup.get('selectedOption')!.value || 0,
      title: this.secondFormGroup.get('titleCtrl')!.value || '',
      code: this.secondFormGroup.get('codeCtrl')?.value || '',
    };
    console.log(this.ques);
    // console.log(this.ques.image);

    this._questionService.createQuestion(this.ques)
      .subscribe({
        next: (questionRes) => {
          console.log('😊');
          console.log(questionRes);
          this.questId = questionRes.questionId;
          this.dialog.open(DialogComponent, {
            data: this.dialogData1
          });

          this.ans = {
            answerId: 0,
            userId: this.userId,
            questionId: this.questId,
            rating: 0,
            content: this.secondFormGroup.get('answerCtrl')?.value || '',
            categoryId: parseInt(this.firstFormGroup.get('categoryCtrl')?.value || '0'),

          };
          console.log(this.ans);

          this.createAnswer();
        },
        error: (err) => {
          console.log(err);
          this.dialog.open(DialogComponent, {
            data: this.dialogData2
          });

        }
      });
  }

  createAnswer() {
    this._ansService.createAnswer(this.ans)
      .subscribe({
        next: (answerRes) => {
          console.log(answerRes);

        },
        error: (err) => {
          console.log('i have error with creating ans 😒');

          console.log(err);

        }
      });
  }
  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
    if (this.selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.base64Image = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }

  toggleCodeField() {
    console.log('toggling code field');
    console.log(this.showCodeField);

    this.showCodeField = !this.showCodeField;
    console.log(this.showCodeField);

  }
}

