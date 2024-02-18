import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { QuestionService } from '../question.service';
import { Question } from '../question.model';


@Component({
  selector: 'app-ques-list',
  standalone: true,
  imports: [CommonModule ,MatCardModule , MatButtonModule],
  templateUrl: './ques-list.component.html',
  styleUrl: './ques-list.component.css'
})
export class QuesListComponent {
  public selectedQues!: Question
  public serch = ''
  public filterQuesArr!: Question[]
  public quesList!: Question[]
  
  constructor(private router: Router, private _quesService: QuestionService) { }

  ngOnInit(): void {
    this.quesList=this._quesService.getAllQuest();
    this._quesService.getAllStudentsByServer().subscribe({
      next: (res) => {
        this.filterQuesArr = this.quesList = res
      },
      error: (err) => {
        this.filterQuesArr=this._quesService.getAllQuest()
        console.log(err);
      }
    })
  }


public showDetails(ques: Question) {
  console.log('before routing');
  console.log(ques.quesId);
  
  this.router.navigate(["/ques-details", ques.quesId]);
}

public filterQues() {
  this.filterQuesArr = this.quesList.filter((st) => {
    return st.Content.includes(this.serch) || st.Company.includes(this.serch) 
  })
}
}
