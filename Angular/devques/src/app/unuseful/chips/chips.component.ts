// import { Category } from '../../category.model';
// import { Question } from '../../question/question.model';
// import {COMMA, ENTER} from '@angular/cdk/keycodes';
// import {Component, ElementRef, OnInit, ViewChild, inject} from '@angular/core';
// import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';
// import {MatIconModule} from '@angular/material/icon';
// import {AsyncPipe} from '@angular/common';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {LiveAnnouncer} from '@angular/cdk/a11y';
// import { CategoryService } from '../../category.service';

// @Component({
//   selector: 'app-chips',
//   standalone: true,
//   imports: [
//     FormsModule,
//     MatFormFieldModule,
//     MatChipsModule,
//     MatIconModule,
//     MatAutocompleteModule,
//     ReactiveFormsModule,
//     AsyncPipe,
//   ],
//   templateUrl: './chips.component.html',
//   styleUrl: './chips.component.css'
// })
// export class ChipsComponent implements OnInit {
//   separatorKeysCodes: number[] = [ENTER, COMMA];
//   categoryCtrl = new FormControl('');
//   filterdCategories: Observable<string[]>;
//   ques: string[] = ['Lemon'];
//   // allCategories: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
//   public allCategories!: Category[]
//   @ViewChild('categoryInput') Category!: ElementRef<HTMLInputElement>;

//   announcer = inject(LiveAnnouncer);

//   constructor(private _categoryService: CategoryService) {
//     this.filterdCategories = this.categoryCtrl.valueChanges.pipe(
//       startWith(null),
//       map((category: string | null) => (category ? this._filter(category) : this.allCategories.slice())),
      
//     );
//   }
//   ngOnInit(): void {
//     this.allCategories=this._categoryService.getAllQuest();
//   }

//   add(event: MatChipInputEvent): void {
//     const value = (event.value || '').trim();

//     // Add our category
//     if (value) {
//       this.ques.push(value);
//     }

//     // Clear the input value
//     event.chipInput!.clear();

//     this.categoryCtrl.setValue(null);
//   }

//   remove(category: string): void {
//     const index = this.ques.indexOf(category);

//     if (index >= 0) {
//       this.ques.splice(index, 1);

//       this.announcer.announce(`Removed ${category}`);
//     }
//   }

//   selected(event: MatAutocompleteSelectedEvent): void {
//     this.ques.push(event.option.viewValue);
//     this.Category.nativeElement.value = '';
//     this.categoryCtrl.setValue(null);
//   }

//   private _filter(value: string): string[] {
//     const filterValue = value.toLowerCase();

//     return this.allCategories.filter(category => category.toLowerCase().includes(filterValue));
//   }
// }
