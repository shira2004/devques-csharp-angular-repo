import { Category } from "./category.model";
import { User } from "./log-in/user.model";

export class Question {
   questionId!:number;
   categoryId!: number;
   content!: string;
   companyId!: number;
   //Answers!: any;  
   //Company!: string; 
   userId!:number 
}


