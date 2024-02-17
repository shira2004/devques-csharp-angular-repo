import { Component, NgModule } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';

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
    HeaderComponent]
})
export class AppComponent {
  title = 'DevQues';
}
