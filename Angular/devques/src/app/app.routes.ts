import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RecommendedQuestionsComponent } from './recommended-questions/recommended-questions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';
import { DialogComponent } from './dialog/dialog.component';
import { AddQuesComponent } from './add-ques/add-ques.component';
import { AboutComponent } from './about/about.component';
import { QuesListComponent } from './ques-list/ques-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
export const routes: Routes = [
    {path: '', redirectTo: 'home' , pathMatch:'full'},
    {path: 'home' ,component: HomeComponent},
    {path: 'my-account' ,component: MyAccountComponent},
    {path: 'sign-in' ,component: SignInComponent},
    {path: 'sign-up' ,component: SignUpComponent},
    {path: "ques-details/:id", component: DetailsComponent },
    {path: 'dialog' ,component: DialogComponent},
    {path: 'add-ques' ,component: AddQuesComponent},
    {path: 'About' ,component: AboutComponent},
    {path: 'recommended-questions' ,component: RecommendedQuestionsComponent},
    {path: 'ques' ,component: QuesListComponent},
    {path: '**' ,component: NotFoundComponent},


];
