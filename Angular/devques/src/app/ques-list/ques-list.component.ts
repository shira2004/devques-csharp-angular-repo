import { Component } from '@angular/core';
import { Router } from 'express';
import { QuestionService } from '../question.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-ques-list',
  standalone: true,
  imports: [],
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
    this._quesService.getAllStudentsByServer().subscribe({
      next: (res) => {
        this.filterQuesArr = this.quesList = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

//what the error with navigate ?
public showDetails(ques: Question) {
  this.router.navigate(["/ques/ques-details", ques.quesId]);
}

public filterQues() {
  this.filterQuesArr = this.quesList.filter((st) => {
    return st.Content.includes(this.serch) || st.Company.includes(this.serch) 
  })
}
}
