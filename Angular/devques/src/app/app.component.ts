import { Component, NgModule } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TopBarComponent } from "./home-components/top-bar/top-bar.component";
import { FooterComponent } from "./home-components/footer/footer.component";
import { SignUpComponent } from './log-in/components/sign-up/sign-up.component';
import { HeaderComponent } from './home-components/header/header.component';
import { CategorySelctionComponent } from './category-selction/category-selction.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,
    MatSlideToggleModule, 
    TopBarComponent, FooterComponent, 
    RouterModule, 
    SignUpComponent,
    HeaderComponent ,CategorySelctionComponent]
})
export class AppComponent {
  title = 'DevQues';
}
