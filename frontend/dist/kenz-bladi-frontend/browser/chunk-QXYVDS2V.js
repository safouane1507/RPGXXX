import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-4ELZIBL4.js";

// src/app/features/admin/complaints/complaints.component.ts
var ComplaintsComponent = class _ComplaintsComponent {
  static {
    this.\u0275fac = function ComplaintsComponent_Factory(t) {
      return new (t || _ComplaintsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComplaintsComponent, selectors: [["app-complaints"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 0, consts: [[1, "admin-stub"]], template: function ComplaintsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "R\xE9clamations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Suivi et traitement des r\xE9clamations des clients et acteurs professionnels.");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [CommonModule], styles: ["\n\n.admin-stub[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  padding: 2rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n  color: var(--text-primary);\n}\np[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=complaints.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComplaintsComponent, { className: "ComplaintsComponent", filePath: "src\\app\\features\\admin\\complaints\\complaints.component.ts", lineNumber: 15 });
})();
export {
  ComplaintsComponent
};
//# sourceMappingURL=chunk-QXYVDS2V.js.map
