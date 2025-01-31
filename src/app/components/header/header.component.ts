import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslationService } from '../../services/translate/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  lang: string = '';
  @Output() showSidebarCliked = new EventEmitter();

  constructor(private translate: TranslateService, private translateService: TranslationService ) {}

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

}
