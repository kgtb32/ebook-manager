import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { BadgeModule } from 'primeng/badge'
import { DividerModule } from 'primeng/divider'
import { DropdownModule } from 'primeng/dropdown'
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton'
import { SelectButtonModule } from 'primeng/selectbutton'
import { InputTextModule } from 'primeng/inputtext'

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    BadgeModule,
    DividerModule,
    DropdownModule,
    ListboxModule,
    RadioButtonModule,
    SelectButtonModule,
    InputTextModule,
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
  ]
})
export class LayoutModule { }
