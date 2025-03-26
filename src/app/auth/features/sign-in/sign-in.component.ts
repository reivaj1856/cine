import { Component, inject } from '@angular/core';
import { HeadComponent } from "../../../component/head/head.component";
import { FooterComponent } from '../../../component/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../data-access/auth.service';
import { Router, RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';
import { hasEmailError, isRequired } from '../utils/validators';
import { FormSignIn } from '../../../interface/FormSignIn';
import { GoogleComponent } from '../../google/google.component';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule,HeadComponent,FooterComponent,GoogleComponent,RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export default class SignInComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

  hasEmailRequired() {
      return hasEmailError(this.form);
    }
  
    isRequired(field: 'email' | 'password' | 'numero' | 'nombre' | 'apellido' | 'password1') {
      return isRequired(field, this.form);
    }
  
    form: FormGroup = this._formBuilder.group<FormSignIn>({
      email: this._formBuilder.control('', [Validators.required, Validators.email]),
      password: this._formBuilder.control('', Validators.required),

    });
    async submit() {
      
      if (this.form.invalid) return;
        try {
          const { email, password } = this.form.value;
    
          if (!email || !password) return;
    
          console.log(email, password);
    
          await this._authService.signIn({ email, password });
    
          toast.success('Hola, nuevamente');
          this._router.navigateByUrl('content/media');
        } catch (error) {
          toast.success('cuenta no valida o inexistente');
          console.error('Error during sign up:', error);
        }
     
      }
   async submitWithGoogle(){
    try {
      await this._authService.signInWhitGoogle();
      toast.success('Hola, nuevamente');
      this._router.navigateByUrl('content/media');
    } catch (error) {
      toast.success('upds algo salio mal');
    }
   }
}

