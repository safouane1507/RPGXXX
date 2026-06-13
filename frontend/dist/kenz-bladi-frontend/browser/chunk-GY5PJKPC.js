import {
  LanguageService
} from "./chunk-XFLHW3ED.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-PTMK54BH.js";
import {
  ApiService
} from "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-AJRT7THN.js";
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4ELZIBL4.js";

// src/app/features/client/blog/blog-list.component.ts
var _forTrack0 = ($index, $item) => $item._id;
var _c0 = (a0) => ["/blog", a0];
function BlogListComponent_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const post_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", post_r1.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r1.t(post_r1.title));
  }
}
function BlogListComponent_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function BlogListComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "div", 7);
    \u0275\u0275template(2, BlogListComponent_For_12_Conditional_2_Template, 1, 2, "img", 8)(3, BlogListComponent_For_12_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 10);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, post_r1.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, post_r1.coverImage ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t(post_r1.title));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t(post_r1.excerpt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 5, post_r1.publishedAt, "dd/MM/yyyy"));
  }
}
var BlogListComponent = class _BlogListComponent {
  constructor() {
    this.api = inject(ApiService);
    this.lang = inject(LanguageService);
    this.posts = signal([]);
  }
  ngOnInit() {
    this.api.get("/blog", { limit: 9 }).subscribe({ next: (r) => this.posts.set(r.data), error: () => {
    } });
  }
  t(field) {
    const l = this.lang.current();
    return field?.[l] || field?.["fr"] || field?.["ar"] || "";
  }
  static {
    this.\u0275fac = function BlogListComponent_Factory(t) {
      return new (t || _BlogListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogListComponent, selectors: [["app-blog-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 6, consts: [[1, "blog-section"], [1, "blog-hero"], [1, "container"], [1, "subtitle"], [1, "container", "section-spacing"], [1, "blog-grid"], [1, "blog-card", 3, "routerLink"], [1, "blog-cover"], ["loading", "lazy", 3, "src", "alt"], [1, "blog-body"], [1, "meta"], [1, "blog-cover-ph"]], template: function BlogListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 4)(10, "div", 5);
        \u0275\u0275repeaterCreate(11, BlogListComponent_For_12_Template, 12, 10, "a", 6, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "HOME.ARTICLES_TITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "HOME.ARTICLES_SUBTITLE"));
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.posts());
      }
    }, dependencies: [CommonModule, DatePipe, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ['\n\n.blog-section[_ngcontent-%COMP%] {\n  padding-bottom: 4rem;\n}\n.blog-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #2c1a00,\n      #5a3200);\n  padding: 3.5rem 1.5rem;\n  text-align: center;\n}\n.blog-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: var(--zellige-pattern);\n  background-repeat: repeat;\n  background-size: 40px 12px;\n  opacity: 0.15;\n  pointer-events: none;\n}\n.blog-hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.blog-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1.75rem, 4vw, 2.5rem);\n  font-weight: 800;\n  margin: 0 0 0.5rem;\n  color: #f8f1e7 !important;\n}\n.blog-hero[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #f8f1e7 !important;\n  opacity: 0.85;\n  max-width: 640px;\n  margin: 0 auto;\n}\n.blog-grid[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n}\n@media (max-width: 900px) {\n  .blog-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .blog-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.blog-card[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.blog-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n  text-decoration: none;\n}\n.blog-cover[_ngcontent-%COMP%] {\n  height: 180px;\n  overflow: hidden;\n  background: var(--bg-tertiary);\n}\n.blog-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.blog-cover-ph[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 69, 19, 0.08),\n      rgba(212, 175, 106, 0.08));\n}\n.blog-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.4rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\np[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 0.5rem;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=blog-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogListComponent, { className: "BlogListComponent", filePath: "src\\app\\features\\client\\blog\\blog-list.component.ts", lineNumber: 40 });
})();
export {
  BlogListComponent
};
//# sourceMappingURL=chunk-GY5PJKPC.js.map
