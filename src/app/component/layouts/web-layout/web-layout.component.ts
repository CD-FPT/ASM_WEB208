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
  `
})
export class WebLayoutComponent {
  constructor(private auth: AuthService, private router: Router) { }

  isLoggedIn = false;
  role: any = ''
  ngOnInit() {
    this.role = this.auth.isAuthenticated();
    console.log(this.role.user.role);
    if (this.role.user.role === "member") {
      this.isLoggedIn = true
    }
  }
  // onSignOut(): void {
    // this.auth.signout();
    // Chuyển hướng đến trang sign-in hoặc trang khác theo yêu cầu của bạn
  // }

}
