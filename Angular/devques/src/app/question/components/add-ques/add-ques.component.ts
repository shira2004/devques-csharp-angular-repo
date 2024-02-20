import { QuestionService } from '../../../question.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

import { Category } from '../../../category.model';
import { CategoryService } from '../../../category.service';
import { Question } from '../../../question.model';


@Component({
  selector: 'app-add-ques',

  templateUrl: './add-ques.component.html',
  styleUrl: './add-ques.component.css'
})
export class AddQuesComponent implements OnInit{
  public categoryList!: Category[]
  firstFormGroup = this._formBuilder.group({
    categoryCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    contentCtrl: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]],
    answerCtrl: ['', [Validators.minLength(10), Validators.maxLength(500)]]
  });
  isLinear = true;
  ques! : Question

  constructor(private _formBuilder: FormBuilder ,private _categoryService: CategoryService , private _questionService :QuestionService) {}
  ngOnInit(): void {
      
     this._categoryService.getAllCategoriesByServer().subscribe({
      next: (res) => {
        this.categoryList = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
}
commit() {
   this.ques = {
    categoryId: parseInt(this.firstFormGroup.get('categoryCtrl')!.value || '0'),
    content: this.secondFormGroup.get('contentCtrl')!.value || '',
    userId: 1,
    questionId:0,
    companyId: 1
  };

 

  this._questionService.createQuestion(this.ques).subscribe({
    next: (res) => {
      console.log('good!!');
      
      console.log(res);
    },
    error: (err) => {
      console.log('error');
      
      console.log(err);
    }
  });
}
}
