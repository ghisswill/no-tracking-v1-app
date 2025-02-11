import { Router } from '@angular/router';
import { LoginService } from './../../services/login/login.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslationService } from '../../services/translate/translation.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {

  lang: string = '';
  logoutSubscription: Subscription | undefined | null;
  userConnected: User | undefined;
  @Output() showSidebarCliked = new EventEmitter();

  constructor(
    private translate: TranslateService,
    private translateService: TranslationService,
    private loginService:LoginService,
    private router: Router) {}


  ngOnInit() {
    this.lang = (localStorage.getItem('lang') || 'en').toUpperCase();
    this.translate.setDefaultLang('fr');
  }

  showSider() {
    this.showSidebarCliked.emit();
  }

  changeLang(lang: string) {
    this.translateService.changeLang(lang);
    this.lang = lang.toUpperCase();
  }

  logout() {
  }

  navigateLogin() {
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.logoutSubscription?.unsubscribe();
  }

}
