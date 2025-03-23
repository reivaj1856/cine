import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormSignUp } from '../../../interface/FormSignUp';
import { HeadComponent } from '../../../component/head/head.component';
import { FooterComponent } from '../../../component/footer/footer.component';
import { hasEmailError, isRequired } from '../utils/validators';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, HeadComponent, FooterComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export default class SignUpComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

  hasEmailRequired() {
    return hasEmailError(this.form);
  }

  isRequired(field: 'email' | 'password' | 'numero' | 'nombre' | 'apellido' | 'password1') {
    return isRequired(field, this.form);
  }

  form: FormGroup = this._formBuilder.group<FormSignUp>({
    email: this._formBuilder.control('', [Validators.required, Validators.email]),
    password: this._formBuilder.control('', Validators.required),
    numero: this._formBuilder.control('', Validators.required),
    nombre: this._formBuilder.control('', Validators.required),
    apellido: this._formBuilder.control('', Validators.required),
    password1: this._formBuilder.control('', Validators.required),
  });

  async submit() {
    if (this.form.invalid) return;
    try {
      const { email, password } = this.form.value;

      if (!email || !password) return;

      console.log(email, password);

      await this._authService.signUp({ email, password });

      toast.success('Usuario creado correctamente');
      this._router.navigateByUrl('content/media');
    } catch (error) {
      toast.success('Error en el registro vuelva a intentarlo');
      console.error('Error during sign up:', error);
    }
  }
}
