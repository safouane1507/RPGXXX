import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-tourism-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  template: `
    <article class="tourism-detail">
      @if (place()) {
        <!-- Cover -->
        @if (place().coverImage) {
          <div class="detail-cover">
            <img [src]="place().coverImage" [alt]="t(place().name)" />
            <div class="cover-overlay">
              <div class="container">
                <a routerLink="/tourism" class="back-link">← {{ 'TOURISM.TITLE' | translate }}</a>
                <h1>{{ t(place().name) }}</h1>
                @if (place().location?.city) {
                  <span class="location-badge">📍 {{ place().location.city }}</span>
                }
              </div>
            </div>
          </div>
        }

        <div class="container detail-body">
          <!-- Article complet -->
          <section class="article-text">
            <div [innerHTML]="t(place().fullArticle) || t(place().shortDescription)"></div>
          </section>

          <!-- Infos pratiques -->
          @if (place().practicalInfo) {
            <section class="practical-info">
              <h2>{{ 'TOURISM.PRACTICAL_INFO' | translate }}</h2>
              <div class="info-grid">
                @if (t(place().practicalInfo?.bestSeason)) {
                  <div class="info-item">
                    <strong>{{ 'TOURISM.BEST_SEASON' | translate }}</strong>
                    <span>{{ t(place().practicalInfo.bestSeason) }}</span>
                  </div>
                }
                @if (t(place().practicalInfo?.howToGet)) {
                  <div class="info-item">
                    <strong>{{ 'TOURISM.HOW_TO_GET' | translate }}</strong>
                    <span>{{ t(place().practicalInfo.howToGet) }}</span>
                  </div>
                }
              </div>
            </section>
          }

          <!-- Autres endroits à visiter -->
          @if (place().relatedPlaces?.length > 0) {
            <section class="related-places">
              <h2>{{ 'TOURISM.OTHER_PLACES' | translate }}</h2>
              <div class="related-grid">
                @for (r of place().relatedPlaces; track r._id) {
                  <a [routerLink]="['/tourism', r.slug]" class="related-card">
                    @if (r.coverImage) { <img [src]="r.coverImage" [alt]="t(r.name)" loading="lazy" /> }
                    @else { <div class="related-ph"></div> }
                    <span>{{ t(r.name) }}</span>
                  </a>
                }
              </div>
            </section>
          }
        </div>
      } @else {
        <div class="container" style="padding:4rem 1.5rem;text-align:center;color:var(--text-muted)">Chargement…</div>
      }
    </article>`,
  styles: [`.detail-cover{position:relative;height:420px;overflow:hidden;} .detail-cover img{width:100%;height:100%;object-fit:cover;} .cover-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.7) 0%,transparent 60%);display:flex;align-items:flex-end;} .cover-overlay .container{padding-bottom:2rem;} .back-link{font-size:.82rem;color:rgba(255,255,255,.8);text-decoration:none;display:block;margin-bottom:.75rem;&:hover{color:#fff;}} h1{font-size:2rem;font-weight:800;color:#fff;margin-bottom:.5rem;} .location-badge{font-size:.85rem;color:rgba(255,255,255,.8);} .detail-body{padding:2.5rem 1.5rem;display:flex;flex-direction:column;gap:2.5rem;} .article-text{font-size:.95rem;line-height:1.9;color:var(--text-secondary);max-width:800px;} .practical-info h2,.related-places h2{font-size:1.2rem;font-weight:700;margin-bottom:1rem;color:var(--text-primary);} .info-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;} @media(max-width:640px){.info-grid{grid-template-columns:1fr}} .info-item{background:var(--card-bg);border:1px solid var(--card-border);border-radius:10px;padding:1rem;display:flex;flex-direction:column;gap:.25rem;} .info-item strong{font-size:.8rem;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.04em;} .info-item span{font-size:.9rem;color:var(--text-primary);} .related-grid{display:flex;gap:1rem;overflow-x:auto;padding-bottom:.5rem;} .related-card{flex-shrink:0;width:160px;text-decoration:none;display:flex;flex-direction:column;gap:.5rem;} .related-card img,.related-ph{width:160px;height:110px;object-fit:cover;border-radius:10px;} .related-ph{background:var(--bg-tertiary);} .related-card span{font-size:.8rem;font-weight:600;color:var(--text-primary);}`]
})
export class TourismDetailComponent implements OnInit {
  private api   = inject(ApiService);
  private route = inject(ActivatedRoute);
  private lang  = inject(LanguageService);
  place = signal<any>(null);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) this.api.get<{ data: any }>(`/tourism/${slug}`).subscribe({ next: r => this.place.set(r.data), error: () => {} });
  }
  t(f: Record<string, string>): string { const l = this.lang.current(); return f?.[l] || f?.['fr'] || ''; }
}
