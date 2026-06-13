import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-4ELZIBL4.js";

// src/app/features/admin/payments/payments.component.ts
var PaymentsComponent = class _PaymentsComponent {
  static {
    this.\u0275fac = function PaymentsComponent_Factory(t) {
      return new (t || _PaymentsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentsComponent, selectors: [["app-payments"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 0, consts: [[1, "admin-stub"]], template: function PaymentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Gestion des Paiements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Suivi des transactions, abonnements des acteurs Pro (Gratuit / Basic / Premium / Enterprise).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Endpoint : ");
        \u0275\u0275elementStart(7, "code");
        \u0275\u0275text(8, "GET /api/admin/payments");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [CommonModule], styles: ["\n\n.admin-stub[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  padding: 2rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n  color: var(--text-primary);\n}\np[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n}\ncode[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  padding: 0.1rem 0.4rem;\n  border-radius: 4px;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=payments.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentsComponent, { className: "PaymentsComponent", filePath: "src\\app\\features\\admin\\payments\\payments.component.ts", lineNumber: 16 });
})();
export {
  PaymentsComponent
};
//# sourceMappingURL=chunk-EKOTT7ZR.js.map
