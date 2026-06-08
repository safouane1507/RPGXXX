import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="blog-detail container section-spacing">
      @if (post()) {
        <header class="post-header">
          <a routerLink="/blog" class="back-link">← Retour aux articles</a>
          @if (post().coverImage) { <img [src]="post().coverImage" [alt]="t(post().title)" class="post-cover" /> }
          <h1>{{ t(post().title) }}</h1>
          <p class="post-date">{{ post().publishedAt | date:'dd MMMM yyyy' }}</p>
        </header>
        <div class="post-content" [innerHTML]="t(post().content)"></div>
      } @else {
        <div class="loading">Chargement de l'article…</div>
      }
    </article>`,
  styles: [`.blog-detail{max-width:800px;margin:0 auto;padding:3rem 1.5rem;} .back-link{font-size:.85rem;color:#8B4513;text-decoration:none;display:block;margin-bottom:1.5rem;&:hover{text-decoration:underline;}} .post-cover{width:100%;max-height:400px;object-fit:cover;border-radius:14px;margin-bottom:1.5rem;} h1{font-size:1.75rem;font-weight:800;margin-bottom:.5rem;color:var(--text-primary);} .post-date{font-size:.82rem;color:var(--text-muted);margin-bottom:2rem;} .post-content{font-size:.95rem;line-height:1.9;color:var(--text-secondary);} .loading{text-align:center;padding:3rem;color:var(--text-muted);}`]
})
export class BlogDetailComponent implements OnInit {
  private api   = inject(ApiService);
  private route = inject(ActivatedRoute);
  private lang  = inject(LanguageService);
  post = signal<any>(null);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) this.api.get<{ data: any }>(`/blog/${slug}`).subscribe({ next: r => this.post.set(r.data), error: () => {} });
  }
  t(f: Record<string, string>): string { const l = this.lang.current(); return f?.[l] || f?.['fr'] || ''; }
}
