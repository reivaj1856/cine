import { FormControl } from "@angular/forms";

export interface FormSignUp {
    email: FormControl<String | null >;
    password: FormControl<String | null >;
    numero: FormControl<String| null >;
    nombre: FormControl<String | null >;
    apellido: FormControl<String | null >;
    password1: FormControl<String | null >;
}
