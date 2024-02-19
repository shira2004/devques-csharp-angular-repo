import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor(private router: Router, private _quesService: QuestionService , private _companyService: CompanyService) { }

  ngOnInit(): void {
    console.log('on init');
    
    this._quesService.getAllQuestionByServer().subscribe({
      next: (res) => {
        console.log(res);
        
        this.filterQuesArr = this.quesList = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


public showDetails(ques: Question) {
  console.log(ques);
  
  console.log('im after cliknig ');
  console.log(ques.questionId);
  
  this.router.navigate(["/ques-details", ques.questionId]);
}

public filterQues() {
  this.filterQuesArr = this.quesList.filter((st) => {
    return st.content.includes(this.serch)
    //  || st.Company.includes(this.serch) 
  })
}

getCompanyName(comp : number){
  // const company = this._companyService.getAllCompaniesByServer.find(c => c.companyId === companyId);
  // return company ? company.companyName : 'Unknown Company';
  return 'intel'
}
}
