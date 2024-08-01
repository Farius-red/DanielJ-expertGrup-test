import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import {TemplateTestNgComponent,CoreModule} from 'template-test-ng';
import { LayoutModule } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemplateTestNgComponent,CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  appName = 'prueba daniel juliao';
  logoSrc = '../favicon.ico';
  email = 'daniel.juliao.tecni@gmail.com';
}
