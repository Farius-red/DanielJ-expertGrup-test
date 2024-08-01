import { Component, Input } from '@angular/core';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';

@Component({
  selector: 'lib-template-test-ng',
  standalone: true,
  imports: [MenuComponent,FooterComponent],
 templateUrl: './template-test-ng.componen.html',
  styleUrl: './template-test-ng.component.css'
})
export class TemplateTestNgComponent {
 @Input() appName = 'prueba daniel juliao';
 @Input() logoSrc = '../favicon.ico';
 @Input() email = 'daniel.juliao.tecni@gmail.com';
}
