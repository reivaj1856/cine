import { Component } from '@angular/core';
import { HeadComponent } from "../../../component/head/head.component";
import { FooterComponent } from '../../../component/footer/footer.component';

@Component({
  selector: 'app-sign-in',
  imports: [HeadComponent,FooterComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export default class SignInComponent {

}
