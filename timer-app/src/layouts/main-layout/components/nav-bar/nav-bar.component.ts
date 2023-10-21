import { Component } from '@angular/core';
import { AuthService } from 'src/core/auth/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(
    private authService: AuthService,
  ) {}

  logout(): void {
    this.authService.isAuth = false;
    this.authService.goToUnauthPage();
  }
}
