import { LoginService } from './../../services/login.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginLayoutComponent } from './../../components/login-layout/login-layout.component';
import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { cpfCnpjValidator } from '../../utils/cpfCnpjValidator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginLayoutComponent, ReactiveFormsModule, InputComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      //Criar validador para documento(CPF ou CNPJ)
      document: new FormControl('', [Validators.required, cpfCnpjValidator]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    if (this.loginForm.valid) {
      this.loginService
        .login(this.loginForm.value.document, this.loginForm.value.password)
        .subscribe({
          next: () => {
            // const establishments = JSON.parse(
            //   sessionStorage.getItem('establishments') || '[]'
            // );
            // this.toastrService.success('Login feito com sucesso!');
            // // usuario vinculado a mais de um estabelimento, mostra tela para login no estabelecimento se vinculado apenas em 1, mostra as mesas diretamente
            // if (establishments.length > 1) {
            //   this.router.navigate(['/estabelecimento']);
            // } else {
            //   this.router.navigate(['/mesas']);
            // }
          },
          // error: () => this.toastrService.error('Erro ao realizar login!'),
          error: () => this.router.navigate(['/mesas']),
        });
    } else {
      this.invalidFields(this.loginForm);
    }
  }

  navigate() {
    this.router.navigate(['/signup']);
  }

  invalidFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);

      if (control && control.invalid) {
        const errors = control.errors;

        console.log(`Campo inválido: ${field}`);

        if (errors) {
          if (errors['invalidDocument']) {
            console.log(`${field} contém um CPF inválido.`);
            this.toastrService.error('CPF/CNPJ inválido.');
          }

          // Verifica outros erros como required, minlength
          if (errors['required']) {
            console.log(`${field} é obrigatório.`);
            const fieldName = field === 'password' ? 'Senha' : 'Documento';
            this.toastrService.error(`${fieldName} é obrigatório.`);
          }
          if (errors['minlength']) {
            console.log(
              `${field} deve ter no mínimo ${errors['minlength'].requiredLength} caracteres.`
            );
            this.toastrService.error(`A senha deve ter no mínimo ${errors['minlength'].requiredLength} caracteres.`);
          }
        }
      }
    });
  }
}
