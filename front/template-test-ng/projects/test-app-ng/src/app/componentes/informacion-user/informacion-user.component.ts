import { Component, Input } from '@angular/core';
import { CoreModule } from 'template-test-ng';

@Component({
  selector: 'app-informacion-user',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './informacion-user.component.html',
  styleUrl: './informacion-user.component.scss'
})
export class InformacionUserComponent {

@Input()userName: string ="";
@Input() email: string= "";

}
