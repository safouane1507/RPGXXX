import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { LanguageService } from './core/services/language.service';
import { ChatbotComponent } from './chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatbotComponent],
  template: `
    <router-outlet />
    <app-chatbot />
  `
})
export class AppComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    // Services auto-initialize from localStorage on construction
  }
}