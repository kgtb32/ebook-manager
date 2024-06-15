import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SidecarService } from './services/tauri/sidecar.service';
import { routes } from './app.routing.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HomePageModule
  ],
  providers: [
    SidecarService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
