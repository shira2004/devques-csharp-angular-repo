import { Category } from "./category.model";
import { Company } from "./company.model";
import { User } from "../log-in/user.model";
import { Data } from "@angular/router";

export class Question {
   questionId!:number;
   categoryId!: number;
   content!: string;
   companyId?: number;
   userId!:number
   user?:User 
   company?:Company
   image?: string;
   kind?: number; 
   title? :string 
   code?: string;
   dateUpload!:Date;
}


