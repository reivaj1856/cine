import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { HeadComponent } from '../../head/head.component';

@Component({
  selector: 'app-detalles',
  imports: [FooterComponent,HeadComponent],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

}
