import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { TopBarComponent } from './component/top-bar/top-bar.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    TopBarComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule, MatToolbarModule, MatButtonToggleModule
  ],
  exports: [TopBarComponent, HeaderComponent, FooterComponent
  ]
})
export class LayoutModule { }
