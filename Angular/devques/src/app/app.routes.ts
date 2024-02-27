import { Routes } from '@angular/router';

import { MyAccountComponent } from './home-components/my-account/my-account.component';
import { SignUpComponent } from './log-in/components/sign-up/sign-up.component';
import { NotFoundComponent } from './home-components/not-found/not-found.component';
import { DialogComponent } from './home-components/dialog/dialog.component';
import { AboutComponent } from './home-components/about/about.component';
import { SignInComponent } from './log-in/components/sign-in/sign-in.component';
import { QuesListComponent } from './question/components/ques-list/ques-list.component';
import { DetailsComponent } from './question/components/details/details.component';
import { AddQuesComponent } from './question/components/add-ques/add-ques.component';
import { RecommendedQuestionsComponent } from './question/components/recommended-questions/recommended-questions.component';
import { CategorySelctionComponent } from './category-selction/category-selction.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home-components/home/home.component').then(c => c.HomeComponent) },
    { path: 'About', component: AboutComponent },
    { path: 'my-account', component: MyAccountComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },


    { path: 'ques', loadChildren: () => import('./question/question.module').then(m => m.QuestionModule) },
    { path: 'dialog', component: DialogComponent },
    { path: 'category-Selections', component: CategorySelctionComponent },
    { path: '**', component: NotFoundComponent },

];
