import { Component, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionService } from '../../../question.service';
import { Question } from '../../../question.model';
import { CompanyService } from '../../../company.service';


@Component({
  selector: 'app-ques-list',
  templateUrl: './ques-list.component.html',
  styleUrl: './ques-list.component.css'
})
export class QuesListComponent {
  public selectedQues!: Question
  public serch = ''
  public filterQuesArr!: Question[]
  public quesList!: Question[]
  
  constructor(private router: Router,private route: ActivatedRoute,  private _quesService: QuestionService , private _companyService: CompanyService) { }

  ngOnInit(): void {
    console.log('on init');

    this.route.queryParams.subscribe((params) => {
      const categoryIds: number[] = params['categories'] ? params['categories'].split(',').map(Number) : [];
       console.log('going to fetch by category IDs 😂')
        this._quesService.getQuestionsByCategoryIds(categoryIds).subscribe({
          next: (res) => {
            console.log(res);
            this.quesList = res;
          },
          error: (err) => {
            console.log(err);
          }
        });
      
    });
  }

  public showDetails(ques: Question) {

    this._quesService.setSelectedQuestion(ques);
    this.router.navigate(['/ques/ques-details', ques.questionId]);
  }

  

  
}