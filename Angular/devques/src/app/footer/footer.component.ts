import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButtonModule ,MatIconModule , MatToolbarModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  getCurrentYear(): number {
    return new Date().getFullYear();
  }

}
