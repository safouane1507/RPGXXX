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

// src/app/features/client/services/services.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function ServicesComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
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
    const service_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.text);
  }
}
var ServicesComponent = class _ServicesComponent {
  static {
    this.\u0275fac = function ServicesComponent_Factory(t) {
      return new (t || _ServicesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 8, consts: [[1, "services-page"], [1, "services-hero"], [1, "container"], [1, "subtitle"], [1, "container", "section-spacing"], [1, "services-grid"], [1, "service-card"], [1, "service-icon"]], template: function ServicesComponent_Template(rf, ctx) {
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
        \u0275\u0275repeaterCreate(11, ServicesComponent_For_12_Template, 7, 3, "div", 6, _forTrack0);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "SERVICES.TITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "SERVICES.SUBTITLE"));
        \u0275\u0275advance(4);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(13, 6, "SERVICES.LIST"));
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ['\n\n.services-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #2c1a00,\n      #5a3200);\n  padding: 3.5rem 1.5rem;\n  text-align: center;\n}\n.services-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: var(--zellige-pattern);\n  background-repeat: repeat;\n  background-size: 40px 12px;\n  opacity: 0.15;\n  pointer-events: none;\n}\n.services-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .services-hero[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.services-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1.75rem, 4vw, 2.5rem);\n  font-weight: 800;\n  color: #f8f1e7 !important;\n  margin: 0 0 0.5rem;\n}\n.services-hero[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #f8f1e7 !important;\n  opacity: 0.85;\n  max-width: 640px;\n  margin: 0 auto;\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 900px) {\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.service-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: var(--radius-lg);\n  padding: 1.75rem;\n  box-shadow: var(--shadow-sm);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.service-card[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 2.25rem;\n  margin-bottom: 0.875rem;\n}\n.service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 0.5rem;\n}\n.service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  line-height: 1.7;\n  margin: 0;\n}\n/*# sourceMappingURL=services.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "src\\app\\features\\client\\services\\services.component.ts", lineNumber: 12 });
})();
export {
  ServicesComponent
};
//# sourceMappingURL=chunk-3T4J6F6O.js.map
