import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  formSignin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })
  
  constructor(private fb: FormBuilder, private auth: AuthService) { 

  }
  errorMessage: string = '';
  successMessage: string = '';

  onHandleSubmit() {
    if (this.formSignin.valid) {
      this.auth.signin(this.formSignin.value).subscribe(data => {
        localStorage.setItem('credential', JSON.stringify(data));
        localStorage.setItem('user', JSON.stringify(data.user));
       
        const role = data?.user?.role;
        console.log(role);
        this.auth.login(role);
        this.successMessage = 'Đăng nhập thành công'; // Lưu thông báo thành công
      }, error => {
        this.errorMessage = error.error.message; // Lưu thông báo lỗi
      })
    }
  }
}
