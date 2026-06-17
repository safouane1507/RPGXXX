import {
  TranslateModule,
  TranslatePipe
} from "./chunk-AJRT7THN.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4ELZIBL4.js";

// src/app/features/client/about/about.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function AboutComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r1.text);
  }
}
var AboutComponent = class _AboutComponent {
  static {
    this.\u0275fac = function AboutComponent_Factory(t) {
      return new (t || _AboutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 29, consts: [[1, "about-page"], [1, "about-hero"], [1, "container"], [1, "subtitle"], [1, "container", "section-spacing"], [1, "about-intro"], [1, "mission-vision-grid"], [1, "mv-card"], [1, "values-title"], [1, "values-grid"], [1, "value-card"], [1, "value-icon"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "p");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 6)(18, "div", 7)(19, "h2");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 7)(26, "h2");
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p");
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "h2", 8);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 9);
        \u0275\u0275repeaterCreate(36, AboutComponent_For_37_Template, 7, 3, "div", 10, _forTrack0);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "ABOUT.TITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, "ABOUT.SUBTITLE"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, "ABOUT.INTRO_P1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 15, "ABOUT.INTRO_P2"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 17, "ABOUT.MISSION_TITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 19, "ABOUT.MISSION_TEXT"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 21, "ABOUT.VISION_TITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 23, "ABOUT.VISION_TEXT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 25, "ABOUT.VALUES_TITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(38, 27, "ABOUT.VALUES"));
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ['\n\n.about-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #2c1a00,\n      #5a3200);\n  padding: 3.5rem 1.5rem;\n  text-align: center;\n}\n.about-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: var(--zellige-pattern);\n  background-repeat: repeat;\n  background-size: 40px 12px;\n  opacity: 0.15;\n  pointer-events: none;\n}\n.about-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .about-hero[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.about-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1.75rem, 4vw, 2.5rem);\n  font-weight: 800;\n  color: #f8f1e7 !important;\n  margin: 0 0 0.5rem;\n}\n.about-hero[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #f8f1e7 !important;\n  opacity: 0.85;\n  max-width: 640px;\n  margin: 0 auto;\n}\n.about-intro[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto 3rem;\n}\n.about-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.mission-vision-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-bottom: 3rem;\n}\n@media (max-width: 700px) {\n  .mission-vision-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.mv-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: var(--radius-lg);\n  padding: 1.75rem;\n  box-shadow: var(--shadow-sm);\n}\n.mv-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: var(--brand-primary);\n  margin: 0 0 0.75rem;\n}\n.mv-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n  margin: 0;\n}\n.values-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.25rem;\n}\n@media (max-width: 900px) {\n  .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 540px) {\n  .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.value-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: var(--radius-lg);\n  padding: 1.5rem;\n  text-align: center;\n  box-shadow: var(--shadow-sm);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.value-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.value-card[_ngcontent-%COMP%]   .value-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 2rem;\n  margin-bottom: 0.75rem;\n}\n.value-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.5rem;\n}\n.value-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  line-height: 1.6;\n  margin: 0;\n}\n/*# sourceMappingURL=about.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\features\\client\\about\\about.component.ts", lineNumber: 12 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-WODVRWE7.js.map
