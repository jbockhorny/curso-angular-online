import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('passwordlInput') passwordlInput: ElementRef;
  email: string;
  password: string;

  onSubmit(form) {
    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if (form.controls.email.invalid) {
        this.emailInput.nativeElement.focus();
        return;
      }
      if (form.controls.password.invalid) {
        this.passwordlInput.nativeElement.focus();
        return;
      }
      return;
    }
  }

  exibeErro(nomeControle: string, form) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

}
