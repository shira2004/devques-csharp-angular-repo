import { Category } from "./category.model";
import { Company } from "./company.model";
import { User } from "./log-in/user.model";

export class Question {
   questionId!:number;
   categoryId!: number;
   content!: string;
   companyId!: number;
   userId!:number
   user?:User 
   company?:Company
}


