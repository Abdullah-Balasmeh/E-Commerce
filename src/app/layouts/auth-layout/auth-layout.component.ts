import { Component } from '@angular/core';
import { AuthFooterComponent } from "../../components/auth-footer/auth-footer.component";
import { AuthNavComponent } from "../../components/auth-nav/auth-nav.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [AuthFooterComponent, AuthNavComponent, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
