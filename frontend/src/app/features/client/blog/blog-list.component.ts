import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  template: `
    <section class="blog-section">
      <div class="blog-hero">
        <div class="container">
          <h1>{{ 'HOME.ARTICLES_TITLE' | translate }}</h1>
          <p class="subtitle">{{ 'HOME.ARTICLES_SUBTITLE' | translate }}</p>
        </div>
      </div>
      <div class="container section-spacing">
        <div class="blog-grid">
          @for (post of posts(); track post._id) {
            <a [routerLink]="['/blog', post.slug]" class="blog-card">
              <div class="blog-cover">
                @if (post.coverImage) { <img [src]="post.coverImage" [alt]="t(post.title)" loading="lazy" /> }
                @else { <div class="blog-cover-ph"></div> }
              </div>
              <div class="blog-body">
                <h3>{{ t(post.title) }}</h3>
                <p>{{ t(post.excerpt) }}</p>
                <span class="meta">{{ post.publishedAt | date:'dd/MM/yyyy' }}</span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>`,
  styles: [`.blog-section{padding-bottom:4rem;} .blog-hero{position:relative;overflow:hidden;background:linear-gradient(135deg,#2c1a00,#5a3200);padding:3.5rem 1.5rem;text-align:center;} .blog-hero::before{content:'';position:absolute;inset:0;background-image:var(--zellige-pattern);background-repeat:repeat;background-size:40px 12px;opacity:.15;pointer-events:none;} .blog-hero .container{position:relative;z-index:1;} .blog-hero h1{font-size:clamp(1.75rem,4vw,2.5rem);font-weight:800;margin:0 0 .5rem;color:#f8f1e7 !important;} .blog-hero .subtitle{font-size:1rem;color:#f8f1e7 !important;opacity:.85;max-width:640px;margin:0 auto;} .blog-grid{margin-top:2.5rem;display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;} @media(max-width:900px){.blog-grid{grid-template-columns:repeat(2,1fr)}} @media(max-width:600px){.blog-grid{grid-template-columns:1fr}} .blog-card{text-decoration:none;background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;overflow:hidden;transition:transform .2s,box-shadow .2s;&:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,.1);text-decoration:none;}} .blog-cover{height:180px;overflow:hidden;background:var(--bg-tertiary);} .blog-cover img{width:100%;height:100%;object-fit:cover;} .blog-cover-ph{height:100%;background:linear-gradient(135deg,rgba(139,69,19,.08),rgba(212,175,106,.08));} .blog-body{padding:1rem;} h3{font-size:.95rem;font-weight:700;color:var(--text-primary);margin-bottom:.4rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;} p{font-size:.8rem;color:var(--text-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:.5rem;} .meta{font-size:.72rem;color:var(--text-muted);}`]
})
export class BlogListComponent implements OnInit {
  private api  = inject(ApiService);
  private lang = inject(LanguageService);
  posts = signal<any[]>([]);

  ngOnInit(): void {
    this.api.get<{ data: any[] }>('/blog', { limit: 9 }).subscribe({ next: r => this.posts.set(r.data), error: () => {} });
  }
  t(field: Record<string, string>): string {
    const l = this.lang.current();
    return field?.[l] || field?.['fr'] || field?.['ar'] || '';
  }
}
