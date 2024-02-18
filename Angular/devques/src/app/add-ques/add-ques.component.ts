import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-add-ques',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './add-ques.component.html',
  styleUrl: './add-ques.component.css'
})
export class AddQuesComponent implements OnInit{
  public categoryList!: Category[]
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required , Validators.minLength(20),Validators.maxLength(500)]
  });
  isLinear = true;

  constructor(private _formBuilder: FormBuilder ,private _categoryService: CategoryService) {}
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
}
