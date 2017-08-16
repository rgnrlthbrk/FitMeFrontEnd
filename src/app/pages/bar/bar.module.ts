import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './header/navigation.component';
import { NavigationUserComponent } from './header_user/navigationUser.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ CommonModule, RouterModule ],
  exports:      [ CommonModule, FormsModule,
                  FooterComponent, NavigationComponent, NavigationUserComponent ],
  declarations: [ FooterComponent, NavigationComponent, NavigationUserComponent ]
})
export class BarModule { }
