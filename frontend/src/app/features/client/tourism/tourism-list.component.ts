import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-tourism-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  template: `
    <section class="tourism-page">
      <div class="tourism-hero">
        <div class="container">
          <h1>{{ 'TOURISM.TITLE' | translate }}</h1>
          <p>{{ 'TOURISM.SUBTITLE' | translate }}</p>
        </div>
      </div>
      <div class="container section-spacing">
        <div class="tourism-grid">
          @for (place of places(); track place._id) {
            <a [routerLink]="['/tourism', place.slug]" class="tourism-card">
              <div class="tc-cover">
                @if (place.coverImage) { <img [src]="place.coverImage" [alt]="t(place.name)" loading="lazy" /> }
                @else { <div class="tc-cover-ph"></div> }
              </div>
              <div class="tc-body">
                <span class="tc-type">{{ place.locationType }}</span>
                <h3>{{ t(place.name) }}</h3>
                <p>{{ t(place.shortDescription) }}</p>
                @if (place.location?.city || place.location?.region) {
                  <span class="tc-loc">📍 {{ place.location?.city || place.location?.region }}</span>
                }
              </div>
            </a>
          }
        </div>
      </div>
    </section>`,
  styles: [`.tourism-hero{background:linear-gradient(135deg,#0d2818,#1a4731);padding:3rem 0;color:#fff;} .tourism-hero h1{font-size:1.75rem;font-weight:800;margin-bottom:.5rem;} .tourism-hero p{opacity:.8;} .tourism-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.25rem;} .tourism-card{text-decoration:none;background:var(--card-bg);border:1px solid var(--card-border);border-radius:14px;overflow:hidden;transition:transform .2s,box-shadow .2s;&:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.1);text-decoration:none;}} .tc-cover{height:200px;background:var(--bg-tertiary);overflow:hidden;} .tc-cover img{width:100%;height:100%;object-fit:cover;} .tc-cover-ph{height:100%;background:linear-gradient(135deg,rgba(39,174,96,.08),rgba(39,77,22,.12));} .tc-body{padding:1rem;} .tc-type{font-size:.7rem;font-weight:600;color:#27ae60;text-transform:uppercase;letter-spacing:.05em;} h3{font-size:1rem;font-weight:700;color:var(--text-primary);margin:.25rem 0 .375rem;} p{font-size:.8rem;color:var(--text-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:.5rem;} .tc-loc{font-size:.75rem;color:var(--text-muted);}`]
})
export class TourismListComponent implements OnInit {
  private api  = inject(ApiService);
  private lang = inject(LanguageService);
  places = signal<any[]>([]);

  ngOnInit(): void {
    this.api.get<{ data: any[] }>('/tourism', { limit: 12 }).subscribe({ next: r => this.places.set(r.data), error: () => {} });
  }
  t(f: Record<string, string>): string { const l = this.lang.current(); return f?.[l] || f?.['fr'] || ''; }
}
