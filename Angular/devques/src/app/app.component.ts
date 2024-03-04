import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SignUpComponent } from './log-in/components/sign-up/sign-up.component';
// import { MonacoComponent } from './monaco/monaco.component';
import { newHomeComponent } from './new-home/new-home.component';
import { LayoutModule } from './layout/layout.module';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,
    MatSlideToggleModule,
    RouterModule,
    SignUpComponent,
    LayoutModule,
    //  MonacoComponent,
    newHomeComponent
  ]
})
export class AppComponent {
  title = 'DevQues';
}
