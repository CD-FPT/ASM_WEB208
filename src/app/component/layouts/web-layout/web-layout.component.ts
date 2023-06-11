import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.css'],
  template: `
  <div class="auth">
    <ng-container *ngIf="authService.isLoggedIn; else signedOut">
      <!-- Hiển thị thông tin đăng nhập thành công -->
      <i class="fas fa-user"></i>
    </ng-container>
    <ng-template #signedOut>
      <!-- Hiển thị các button "Sign in" và "Sign up" khi chưa đăng nhập -->
      <a routerLink="signin" class="get-started-btn scrollto">Sign in</a>
      <a routerLink="signup" class="get-started-btn scrollto">Sign up</a>
    </ng-template>
  </div>
`,
})
export class WebLayoutComponent {
  isLoggedIn = false;
  role:any = '';
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.role = this.authService.getRole()
    console.log(this.role);
    if(this.role == "member"){
      this.isLoggedIn =true
    }
  }
  SignOut(){
    this.authService.signout()
    window.location.reload
  }
}
