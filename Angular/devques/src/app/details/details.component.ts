import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuestionService } from '../question.service';
import { Question } from '../question.model';

import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  private questionId!:number

   question1: any = {
    quesId: 1,
    content: 'Sample question 1',
    user: { userId: 1, username: 'john_doe', lastName: 'Doe' },
    date: new Date('2022-02-20'),
    answers: [
      { answerId: 1, content: 'Sample answer 1', user: { userId: 1, username: 'john_doe', lastName: 'Doe' }, date: new Date('2022-02-21') },
      { answerId: 2, content: 'Sample answer 2', user: { userId: 1, username: 'john_doe', lastName: 'Doe' }, date: new Date('2022-02-22') },
    ],
  };
 
  constructor(private route: ActivatedRoute,private _questionService: QuestionService) { }

  public question!: Question
  ngOnInit(): void {
    this.route.params.subscribe((parm) => {
      this.questionId = parm['id'];
      this._questionService.getQuestByIdFromServer(this.questionId).subscribe({
        next: (res) => {
          this.question = res
        },
        error: (err) => {
          console.log(err);
        }
      })

    })
  }

}
