import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-4ELZIBL4.js";

// src/app/features/admin/cooperatives/cooperatives-list.component.ts
var CooperativesListComponent = class _CooperativesListComponent {
  static {
    this.\u0275fac = function CooperativesListComponent_Factory(t) {
      return new (t || _CooperativesListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CooperativesListComponent, selectors: [["app-cooperatives-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 0, consts: [[1, "admin-stub"]], template: function CooperativesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Gestion des Coop\xE9ratives & Acteurs Pro");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "ul")(4, "li");
        \u0275\u0275text(5, "E-Boutiques \u2014 boutiques en ligne des coop\xE9ratives");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "li");
        \u0275\u0275text(7, "Annuaires \u2014 fiches annuaire (voir onglet d\xE9di\xE9)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "li");
        \u0275\u0275text(9, "Fournisseurs \u2014 gestion des fournisseurs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "li");
        \u0275\u0275text(11, "Instances FAQ \u2014 FAQ sp\xE9cifique par domaine");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [CommonModule], styles: ["\n\n.admin-stub[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  padding: 2rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n}\nul[_ngcontent-%COMP%] {\n  padding-inline-start: 1.25rem;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  line-height: 2;\n}\n/*# sourceMappingURL=cooperatives-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CooperativesListComponent, { className: "CooperativesListComponent", filePath: "src\\app\\features\\admin\\cooperatives\\cooperatives-list.component.ts", lineNumber: 20 });
})();
export {
  CooperativesListComponent
};
//# sourceMappingURL=chunk-QYOPUVA3.js.map
