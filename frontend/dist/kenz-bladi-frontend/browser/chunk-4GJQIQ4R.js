import {
  LanguageService
} from "./chunk-XFLHW3ED.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-PTMK54BH.js";
import {
  ApiService
} from "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
import "./chunk-AJRT7THN.js";
import {
  CommonModule,
  DatePipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4ELZIBL4.js";

// src/app/features/client/blog/blog-detail.component.ts
function BlogDetailComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.post().coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r0.t(ctx_r0.post().title));
  }
}
function BlogDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "a", 2);
    \u0275\u0275text(2, "\u2190 Retour aux articles");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BlogDetailComponent_Conditional_1_Conditional_3_Template, 1, 2, "img", 3);
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "div", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, ctx_r0.post().coverImage ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.t(ctx_r0.post().title));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 4, ctx_r0.post().publishedAt, "dd MMMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r0.t(ctx_r0.post().content), \u0275\u0275sanitizeHtml);
  }
}
function BlogDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "Chargement de l'article\u2026");
    \u0275\u0275elementEnd();
  }
}
var BlogDetailComponent = class _BlogDetailComponent {
  constructor() {
    this.api = inject(ApiService);
    this.route = inject(ActivatedRoute);
    this.lang = inject(LanguageService);
    this.post = signal(null);
  }
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug");
    if (slug)
      this.api.get(`/blog/${slug}`).subscribe({ next: (r) => this.post.set(r.data), error: () => {
      } });
  }
  t(f) {
    const l = this.lang.current();
    return f?.[l] || f?.["fr"] || "";
  }
  static {
    this.\u0275fac = function BlogDetailComponent_Factory(t) {
      return new (t || _BlogDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogDetailComponent, selectors: [["app-blog-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "blog-detail", "container", "section-spacing"], [1, "post-header"], ["routerLink", "/blog", 1, "back-link"], [1, "post-cover", 3, "src", "alt"], [1, "post-date"], [1, "post-content", 3, "innerHTML"], [1, "loading"]], template: function BlogDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "article", 0);
        \u0275\u0275template(1, BlogDetailComponent_Conditional_1_Template, 10, 7)(2, BlogDetailComponent_Conditional_2_Template, 2, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.post() ? 1 : 2);
      }
    }, dependencies: [CommonModule, DatePipe, RouterModule, RouterLink], styles: ["\n\n.blog-detail[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 3rem 1.5rem;\n}\n.back-link[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #8B4513;\n  text-decoration: none;\n  display: block;\n  margin-bottom: 1.5rem;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.post-cover[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 400px;\n  object-fit: cover;\n  border-radius: 14px;\n  margin-bottom: 1.5rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n  color: var(--text-primary);\n}\n.post-date[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  margin-bottom: 2rem;\n}\n.post-content[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.9;\n  color: var(--text-secondary);\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=blog-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogDetailComponent, { className: "BlogDetailComponent", filePath: "src\\app\\features\\client\\blog\\blog-detail.component.ts", lineNumber: 27 });
})();
export {
  BlogDetailComponent
};
//# sourceMappingURL=chunk-4GJQIQ4R.js.map
