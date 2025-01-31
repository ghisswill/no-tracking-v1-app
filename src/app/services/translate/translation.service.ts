import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  defaultLang: string = 'fr';

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformaId: Object
  ) {
    if (isPlatformBrowser(this.platformaId)) {
      const savedLang = localStorage.getItem('lang');
      if (savedLang) {
        this.defaultLang = savedLang;
      }
      this.translateService.setDefaultLang(this.defaultLang);
      this.translateService.use(this.defaultLang);
    }
   }

   changeLang(lang: string) {
    this.translateService.use(lang);
    if(isPlatformBrowser(this.platformaId)) {
      localStorage.setItem('lang', lang);
    }
   }
}
