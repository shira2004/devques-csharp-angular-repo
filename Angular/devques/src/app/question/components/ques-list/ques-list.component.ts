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

      if (categoryIds.length > 0) {
       console.log('going to futch by category IDs 😂')
        this._quesService.getQuestionsByCategoryIds(categoryIds).subscribe({
          next: (res) => {
            console.log(res);
            this.filterQuesArr = this.quesList = res;
          },
          error: (err) => {
            console.log(err);
          }
        });
      } else {
        console.log('going to futch all 😒')
        // Fetch all questions if no specific category IDs are provided
        this._quesService.getAllQuestionByServer().subscribe({
          next: (res) => {
            console.log(res);
            this.filterQuesArr = this.quesList = res;
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    });
  }

  public showDetails(ques: Question) {
    console.log(ques);

    console.log('im after clicking ');
    console.log(ques.questionId);

    this.router.navigate(['/ques-details', ques.questionId]);
  }

  public filterQues() {
    this.filterQuesArr = this.quesList.filter((st) => {
      //return st.content.includes(this.search);
      //  || st.Company.includes(this.search) 
    });
  }

  getCompanyName(comp: number) {
    // const company = this._companyService.getAllCompaniesByServer.find(c => c.companyId === companyId);
    // return company ? company.companyName : 'Unknown Company';
    return 'intel';
  }
}