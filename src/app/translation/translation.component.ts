import { Component, Inject, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-translation',
  imports: [SharedModule],
  templateUrl: './translation.component.html',
  styleUrl: './translation.component.scss'
})
export class TranslationComponent implements OnInit {
  private html: HTMLElement;
  private currentLanguage: string;
  constructor(
    private appTranslate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.html = this.document.getElementsByTagName('html')[0];
    this.currentLanguage = localStorage.getItem('lang') || 'ar';
  }
  ngOnInit(): void {
    var lang = localStorage.getItem('lang') || 'ar';
    this.appTranslate.setDefaultLang(lang);
    this.updateUi();
  }

  Changelang(lang: string) {
    this.currentLanguage = lang;
    this.appTranslate.use(lang);
    localStorage.setItem('lang', lang);
    this.updateUi();

  }
  updateUi(): void {
    this.html.lang = this.currentLanguage;
    this.document.body.dir = this.getDirection();
  }
  getDirection(): string {
    return this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
  }
}
