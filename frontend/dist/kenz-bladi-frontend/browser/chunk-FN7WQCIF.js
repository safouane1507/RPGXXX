import {
  TranslateModule,
  TranslatePipe
} from "./chunk-AJRT7THN.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ELZIBL4.js";

// src/app/features/client/faq/faq.component.ts
var _forTrack0 = ($index, $item) => $item.q;
function FaqComponent_For_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.a);
  }
}
function FaqComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275listener("click", function FaqComponent_For_12_Template_button_click_1_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(i_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 9);
    \u0275\u0275element(4, "path", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, FaqComponent_For_12_Conditional_5_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r2.openIndex() === i_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4.q, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", ctx_r2.openIndex() === i_r2 ? "rotate(180deg)" : "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(5, ctx_r2.openIndex() === i_r2 ? 5 : -1);
  }
}
var FaqComponent = class _FaqComponent {
  constructor() {
    this.openIndex = signal(null);
  }
  toggle(index) {
    this.openIndex.update((current) => current === index ? null : index);
  }
  static {
    this.\u0275fac = function FaqComponent_Factory(t) {
      return new (t || _FaqComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 8, consts: [[1, "faq-page"], [1, "faq-hero"], [1, "container"], [1, "subtitle"], [1, "container", "section-spacing"], [1, "faq-list"], [1, "faq-item", 3, "open"], [1, "faq-item"], [1, "faq-q", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "width", "16", "height", "16"], ["d", "M6 9l6 6 6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "faq-a"]], template: function FaqComponent_Template(rf, ctx) {
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
        \u0275\u0275repeaterCreate(11, FaqComponent_For_12_Template, 6, 6, "div", 6, _forTrack0);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "FAQ.TITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "FAQ.SUBTITLE"));
        \u0275\u0275advance(4);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(13, 6, "FAQ.ITEMS"));
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ['\n\n.faq-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #2c1a00,\n      #5a3200);\n  padding: 3.5rem 1.5rem;\n  text-align: center;\n}\n.faq-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: var(--zellige-pattern);\n  background-repeat: repeat;\n  background-size: 40px 12px;\n  opacity: 0.15;\n  pointer-events: none;\n}\n.faq-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .faq-hero[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.faq-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1.75rem, 4vw, 2.5rem);\n  font-weight: 800;\n  color: #f8f1e7 !important;\n  margin: 0 0 0.5rem;\n}\n.faq-hero[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #f8f1e7 !important;\n  opacity: 0.85;\n  max-width: 640px;\n  margin: 0 auto;\n}\n.faq-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  max-width: 760px;\n  margin: 0 auto;\n}\n.faq-item[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n}\n.faq-q[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  background: transparent;\n  border: none;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  cursor: pointer;\n  text-align: start;\n}\n.faq-q[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n  flex-shrink: 0;\n  color: var(--brand-primary);\n}\n.faq-a[_ngcontent-%COMP%] {\n  padding: 0 1.25rem 1rem;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n}\n/*# sourceMappingURL=faq.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "src\\app\\features\\client\\faq\\faq.component.ts", lineNumber: 12 });
})();
export {
  FaqComponent
};
//# sourceMappingURL=chunk-FN7WQCIF.js.map
