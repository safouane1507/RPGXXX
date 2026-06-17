import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-JXVZJL7I.js";
import {
  RouterModule
} from "./chunk-PTMK54BH.js";
import {
  ApiService
} from "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
import {
  CommonModule,
  DecimalPipe,
  KeyValuePipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4ELZIBL4.js";

// src/app/features/admin/products/products-list.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item._id;
var _c0 = () => [];
function ProductsListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r0.successMsg(), "");
  }
}
function ProductsListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 33);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.bulkDelete());
    });
    \u0275\u0275text(3, "Supprimer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.bulkAction("archive"));
    });
    \u0275\u0275text(5, "Archiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 35);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_8_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.bulkAction("publish"));
    });
    \u0275\u0275text(7, "Publier");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.selectedCount, " s\xE9lectionn\xE9(s)");
  }
}
function ProductsListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 37);
    \u0275\u0275element(2, "polyline", 38)(3, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "button", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 37);
    \u0275\u0275element(6, "path", 40);
    \u0275\u0275elementEnd()();
  }
}
function ProductsListComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    \u0275\u0275property("value", entry_r3.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r3.value);
  }
}
function ProductsListComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    \u0275\u0275property("value", entry_r4.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r4.value);
  }
}
function ProductsListComponent_Conditional_44_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "div", 42);
    \u0275\u0275text(2, " Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 49);
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", product_r7.coverImage, \u0275\u0275sanitizeUrl);
  }
}
function ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 62);
  }
}
function ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "\u2B50 Mis en avant");
    \u0275\u0275elementEnd();
  }
}
function ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2717 ", product_r7.rejectionReason, "");
  }
}
function ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const product_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.publish(product_r7._id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 57);
    \u0275\u0275element(2, "polyline", 64);
    \u0275\u0275elementEnd()();
  }
}
function ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const product_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openReject(product_r7._id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 57);
    \u0275\u0275element(2, "line", 9)(3, "line", 10);
    \u0275\u0275elementEnd()();
  }
}
function ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const product_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.archive(product_r7._id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 57);
    \u0275\u0275element(2, "path", 67)(3, "path", 68);
    \u0275\u0275elementEnd()();
  }
}
function ProductsListComponent_Conditional_44_Conditional_2_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 44)(2, "input", 45);
    \u0275\u0275listener("change", function ProductsListComponent_Conditional_44_Conditional_2_For_21_Template_input_change_2_listener() {
      const product_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleSelect(product_r7._id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td")(4, "span", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 48);
    \u0275\u0275template(7, ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_7_Template, 1, 1, "img", 49)(8, ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_8_Template, 1, 0);
    \u0275\u0275elementStart(9, "div")(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_12_Template, 2, 0, "span", 50)(13, ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_13_Template, 2, 1, "div", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 52);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "div", 53);
    \u0275\u0275template(26, ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_26_Template, 3, 0, "button", 54)(27, ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_27_Template, 4, 0, "button", 55);
    \u0275\u0275elementStart(28, "button", 56);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_44_Conditional_2_For_21_Template_button_click_28_listener() {
      const product_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleFeature(product_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 57);
    \u0275\u0275element(30, "polygon", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, ProductsListComponent_Conditional_44_Conditional_2_For_21_Conditional_31_Template, 4, 0, "button", 59);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "button", 60);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_44_Conditional_2_For_21_Template_button_click_32_listener() {
      const product_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteProduct(product_r7._id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 57);
    \u0275\u0275element(34, "polyline", 38)(35, "path", 61);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r0.isSelected(product_r7._id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r0.isSelected(product_r7._id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.domainLabels[product_r7.domain] || product_r7.domain);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(7, product_r7.coverImage ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getName(product_r7));
    \u0275\u0275advance();
    \u0275\u0275conditional(12, product_r7.isFeatured ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, product_r7.rejectionReason ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 21, product_r7.price, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r7.proActor.proProfile.companyName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r7.stock);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + product_r7.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabels[product_r7.status] || product_r7.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(26, product_r7.status === "en_cours_publication" || product_r7.status === "draft" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(27, product_r7.status !== "rejected" && product_r7.status !== "archived" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("featured", product_r7.isFeatured);
    \u0275\u0275propertyInterpolate("title", product_r7.isFeatured ? "Retirer mise en avant" : "Mettre en avant");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("fill", product_r7.isFeatured ? "currentColor" : "none");
    \u0275\u0275advance();
    \u0275\u0275conditional(31, product_r7.status !== "archived" ? 31 : -1);
  }
}
function ProductsListComponent_Conditional_44_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 43)(1, "thead")(2, "tr")(3, "th", 44)(4, "input", 45);
    \u0275\u0275listener("change", function ProductsListComponent_Conditional_44_Conditional_2_Template_input_change_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleAll());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Produit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Prix (MAD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, ProductsListComponent_Conditional_44_Conditional_2_For_21_Template, 36, 24, "tr", 46, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r0.allSelected);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r0.products());
  }
}
function ProductsListComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, ProductsListComponent_Conditional_44_Conditional_1_Template, 3, 0, "div", 41)(2, ProductsListComponent_Conditional_44_Conditional_2_Template, 22, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.isLoading() ? 1 : 2);
  }
}
function ProductsListComponent_Conditional_45_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 72);
  }
  if (rf & 2) {
    const product_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", product_r12.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r0.getName(product_r12));
  }
}
function ProductsListComponent_Conditional_45_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 82);
    \u0275\u0275element(2, "path", 83);
    \u0275\u0275elementEnd()();
  }
}
function ProductsListComponent_Conditional_45_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, "\u2B50");
    \u0275\u0275elementEnd();
  }
}
function ProductsListComponent_Conditional_45_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_45_For_2_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const product_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.publish(product_r12._id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 57);
    \u0275\u0275element(2, "polyline", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "button", 65);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_45_For_2_Conditional_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const product_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openReject(product_r12._id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 57);
    \u0275\u0275element(5, "line", 9)(6, "line", 10);
    \u0275\u0275elementEnd()();
  }
}
function ProductsListComponent_Conditional_45_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71);
    \u0275\u0275template(2, ProductsListComponent_Conditional_45_For_2_Conditional_2_Template, 1, 2, "img", 72)(3, ProductsListComponent_Conditional_45_For_2_Conditional_3_Template, 3, 0);
    \u0275\u0275elementStart(4, "input", 73);
    \u0275\u0275listener("change", function ProductsListComponent_Conditional_45_For_2_Template_input_change_4_listener() {
      const product_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleSelect(product_r12._id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProductsListComponent_Conditional_45_For_2_Conditional_5_Template, 2, 0, "span", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 75)(7, "span", 76);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h4");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 77)(12, "span", 78);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 79);
    \u0275\u0275template(15, ProductsListComponent_Conditional_45_For_2_Conditional_15_Template, 7, 0);
    \u0275\u0275elementStart(16, "button", 60);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_45_For_2_Template_button_click_16_listener() {
      const product_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteProduct(product_r12._id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 57);
    \u0275\u0275element(18, "polyline", 38)(19, "path", 80);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const product_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.isSelected(product_r12._id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, product_r12.coverImage ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r0.isSelected(product_r12._id));
    \u0275\u0275advance();
    \u0275\u0275conditional(5, product_r12.isFeatured ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.domainLabels[product_r12.domain] || product_r12.domain);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getName(product_r12));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + product_r12.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusLabels[product_r12.status] || product_r12.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(15, product_r12.status === "en_cours_publication" ? 15 : -1);
  }
}
function ProductsListComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, ProductsListComponent_Conditional_45_For_2_Template, 20, 11, "div", 69, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.products());
  }
}
function ProductsListComponent_Conditional_46_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_46_For_4_Template_button_click_0_listener() {
      const $index_r16 = \u0275\u0275restoreView(_r15).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage($index_r16 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r16 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("current", $index_r16 + 1 === ctx_r0.page());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate($index_r16 + 1);
  }
}
function ProductsListComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 85);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_46_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.page() - 1));
    });
    \u0275\u0275text(2, "\u2039 Pr\xE9c\xE9dent");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ProductsListComponent_Conditional_46_For_4_Template, 2, 3, "button", 86, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(5, "button", 85);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_46_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.page() + 1));
    });
    \u0275\u0275text(6, "Suivant \u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.page() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c0).constructor(ctx_r0.pages));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page() === ctx_r0.pages);
  }
}
function ProductsListComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_47_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeReject());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 89)(2, "h4");
    \u0275\u0275text(3, "Raison du rejet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Cette raison sera visible par l'acteur Pro.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "textarea", 90);
    \u0275\u0275twoWayListener("ngModelChange", function ProductsListComponent_Conditional_47_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.rejectReason, $event) || (ctx_r0.rejectReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 91)(8, "button", 92);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_47_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeReject());
    });
    \u0275\u0275text(9, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 93);
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_47_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmReject());
    });
    \u0275\u0275text(11, "Confirmer le rejet");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.rejectReason);
  }
}
var ProductsListComponent = class _ProductsListComponent {
  constructor() {
    this.api = inject(ApiService);
    this.products = signal([]);
    this.isLoading = signal(true);
    this.viewMode = signal("table");
    this.searchTerm = "";
    this.filterDomain = "";
    this.filterStatus = "";
    this.selectedIds = signal(/* @__PURE__ */ new Set());
    this.total = signal(0);
    this.page = signal(1);
    this.limit = 20;
    this.successMsg = signal("");
    this.rejectModalId = signal(null);
    this.rejectReason = signal("");
    this.statusLabels = {
      draft: "Brouillon",
      en_cours_publication: "En attente",
      published: "Publi\xE9",
      archived: "Archiv\xE9",
      rejected: "Rejet\xE9"
    };
    this.domainLabels = {
      artisanat_service: "Artisanat de Service",
      produits_mer: "Produits de la Mer",
      habillement_mode: "Habillement & Mode",
      tourisme_rural: "Tourisme Rural",
      artisanat_art: "Artisanat d'art",
      agriculture_bio: "Agriculture Bio",
      soin_beaute: "Soin & Beaut\xE9",
      produit_terroir: "Produit de Terroir",
      artisanat_culinaire: "Artisanat Culinaire"
    };
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading.set(true);
    const params = { page: this.page(), limit: this.limit };
    if (this.filterDomain)
      params["domain"] = this.filterDomain;
    if (this.filterStatus)
      params["status"] = this.filterStatus;
    if (this.searchTerm)
      params["search"] = this.searchTerm;
    this.api.get("/admin/products", params).subscribe({
      next: (res) => {
        this.products.set(res.data);
        this.total.set(res.pagination.total);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  get pages() {
    return Math.ceil(this.total() / this.limit);
  }
  get selectedCount() {
    return this.selectedIds().size;
  }
  get allSelected() {
    return this.selectedIds().size === this.products().length && this.products().length > 0;
  }
  toggleSelect(id) {
    this.selectedIds.update((s) => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  }
  toggleAll() {
    this.selectedIds.set(this.selectedIds().size === this.products().length ? /* @__PURE__ */ new Set() : new Set(this.products().map((p) => p._id)));
  }
  isSelected(id) {
    return this.selectedIds().has(id);
  }
  getName(p) {
    return p.name?.["fr"] || p.name?.["ar"] || "\u2014";
  }
  clearFilters() {
    this.searchTerm = "";
    this.filterDomain = "";
    this.filterStatus = "";
    this.page.set(1);
    this.load();
  }
  applyFilters() {
    this.page.set(1);
    this.load();
  }
  goToPage(p) {
    this.page.set(p);
    this.load();
  }
  // ── Status actions ────────────────────────────────────────
  publish(id) {
    this.api.patch(`/admin/products/${id}/status`, { status: "published" }).subscribe(() => {
      this.notify("Produit publi\xE9 !");
      this.load();
    });
  }
  archive(id) {
    this.api.patch(`/admin/products/${id}/status`, { status: "archived" }).subscribe(() => {
      this.notify("Produit archiv\xE9.");
      this.load();
    });
  }
  openReject(id) {
    this.rejectModalId.set(id);
    this.rejectReason.set("");
  }
  closeReject() {
    this.rejectModalId.set(null);
  }
  confirmReject() {
    const id = this.rejectModalId();
    if (!id)
      return;
    this.api.patch(`/admin/products/${id}/status`, { status: "rejected", rejectionReason: this.rejectReason() }).subscribe(() => {
      this.closeReject();
      this.notify("Produit rejet\xE9.");
      this.load();
    });
  }
  toggleFeature(p) {
    this.api.patch(`/admin/products/${p._id}/feature`).subscribe((res) => {
      p.isFeatured = res.isFeatured;
      this.notify(res.isFeatured ? "Mis en avant !" : "Retir\xE9 de la mise en avant.");
    });
  }
  deleteProduct(id) {
    if (!confirm("Supprimer ce produit d\xE9finitivement ?"))
      return;
    this.api.delete(`/admin/products/${id}`).subscribe(() => {
      this.notify("Produit supprim\xE9.");
      this.load();
    });
  }
  // ── Bulk actions ──────────────────────────────────────────
  bulkAction(action) {
    const ids = Array.from(this.selectedIds());
    if (!ids.length)
      return;
    this.api.post("/admin/products/bulk", { ids, action }).subscribe(() => {
      this.selectedIds.set(/* @__PURE__ */ new Set());
      this.notify(`${ids.length} produit(s) ${action === "publish" ? "publi\xE9s" : "archiv\xE9s"}.`);
      this.load();
    });
  }
  bulkDelete() {
    const ids = Array.from(this.selectedIds());
    if (!ids.length || !confirm(`Supprimer ${ids.length} produit(s) ?`))
      return;
    ids.forEach((id) => this.api.delete(`/admin/products/${id}`).subscribe());
    setTimeout(() => {
      this.selectedIds.set(/* @__PURE__ */ new Set());
      this.notify("Produits supprim\xE9s.");
      this.load();
    }, 400);
  }
  notify(msg) {
    this.successMsg.set(msg);
    setTimeout(() => this.successMsg.set(""), 3500);
  }
  static {
    this.\u0275fac = function ProductsListComponent_Factory(t) {
      return new (t || _ProductsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsListComponent, selectors: [["app-products-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 19, consts: [[1, "products-page"], [1, "page-header"], [1, "header-actions"], [1, "success-toast"], [1, "toolbar"], [1, "bulk-actions"], [1, "filters"], [1, "filter-chip", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "width", "12", "height", "12"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18", "stroke", "currentColor", "stroke-width", "2"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18", "stroke", "currentColor", "stroke-width", "2"], ["type", "text", "placeholder", "\u{1F50D} Rechercher...", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value"], [1, "view-toggle"], ["title", "Vue grille", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "width", "15", "height", "15"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1", "stroke", "currentColor", "stroke-width", "2"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1", "stroke", "currentColor", "stroke-width", "2"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1", "stroke", "currentColor", "stroke-width", "2"], ["title", "Vue tableau", 3, "click"], ["x1", "8", "y1", "6", "x2", "21", "y2", "6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "8", "y1", "12", "x2", "21", "y2", "12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "8", "y1", "18", "x2", "21", "y2", "18", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "3", "y1", "6", "x2", "3.01", "y2", "6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "3", "y1", "12", "x2", "3.01", "y2", "12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "3", "y1", "18", "x2", "3.01", "y2", "18", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "table-wrapper"], [1, "products-grid"], [1, "pagination"], [1, "selected-count"], [1, "btn-sm", "btn-danger", 3, "click"], [1, "btn-sm", 3, "click"], [1, "btn-sm", "btn-success", 3, "click"], ["disabled", "", 1, "btn-sm", "btn-ghost"], ["viewBox", "0 0 24 24", "fill", "none", "width", "14", "height", "14"], ["points", "3,6 5,6 21,6", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19,6l-1,14H6L5,6M10,11v6M14,11v6M9,6V4h6v2", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M5 8h14M5 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM19 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM4 8l1 12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l1-12", "stroke", "currentColor", "stroke-width", "2"], [1, "loading-row"], [1, "spinner-sm"], [1, "products-table"], [1, "col-check"], ["type", "checkbox", 3, "change", "checked"], [3, "selected"], [1, "domain-tag"], [1, "col-name"], ["alt", "", 1, "product-thumb", 3, "src"], [1, "feat-tag"], [1, "rejection-note"], [1, "status-pill"], [1, "actions-cell"], ["title", "Valider & Publier", 1, "icon-action", "publish"], ["title", "Rejeter", 1, "icon-action", "reject"], [1, "icon-action", "feature", 3, "click", "title"], ["viewBox", "0 0 24 24", "fill", "none", "width", "13", "height", "13"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2", "stroke", "currentColor", "stroke-width", "2"], ["title", "Archiver", 1, "icon-action", "archive"], ["title", "Supprimer", 1, "icon-action", "delete", 3, "click"], ["d", "M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "product-thumb-empty"], ["title", "Valider & Publier", 1, "icon-action", "publish", 3, "click"], ["points", "20 6 9 17 4 12", "stroke", "currentColor", "stroke-width", "2.5"], ["title", "Rejeter", 1, "icon-action", "reject", 3, "click"], ["title", "Archiver", 1, "icon-action", "archive", 3, "click"], ["d", "M5 8h14M5 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM19 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z", "stroke", "currentColor", "stroke-width", "1.8"], ["d", "M4 8l1 12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l1-12", "stroke", "currentColor", "stroke-width", "1.8"], [1, "product-grid-card", 3, "selected"], [1, "product-grid-card"], [1, "grid-thumb"], [3, "src", "alt"], ["type", "checkbox", 1, "grid-check", 3, "change", "checked"], [1, "grid-feat"], [1, "grid-body"], [1, "domain-tag", "sm"], [1, "grid-footer"], [1, "status-pill", "sm"], [1, "grid-actions"], ["d", "M19 6l-1 14H6L5 6", "stroke", "currentColor", "stroke-width", "2"], [1, "grid-thumb-empty"], ["viewBox", "0 0 24 24", "fill", "none", "width", "28", "height", "28", "opacity", "0.3"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", "stroke", "currentColor", "stroke-width", "1.5"], ["title", "Publier", 1, "icon-action", "publish", 3, "click"], [3, "click", "disabled"], [3, "current"], [3, "click"], [1, "overlay", 3, "click"], [1, "reject-modal"], ["placeholder", "Ex: Photos manquantes, description insuffisante\u2026", "rows", "4", 3, "ngModelChange", "ngModel"], [1, "reject-footer"], [1, "btn-ghost", 3, "click"], [1, "btn-reject", 3, "click"]], template: function ProductsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Liste Des Produits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275template(5, ProductsListComponent_Conditional_5_Template, 2, 1, "span", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
        \u0275\u0275template(8, ProductsListComponent_Conditional_8_Template, 8, 1)(9, ProductsListComponent_Conditional_9_Template, 7, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
        \u0275\u0275listener("click", function ProductsListComponent_Template_button_click_11_listener() {
          return ctx.clearFilters();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 8);
        \u0275\u0275element(13, "line", 9)(14, "line", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Effacer ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(16, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function ProductsListComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function ProductsListComponent_Template_input_keyup_enter_16_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function ProductsListComponent_Template_select_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterDomain, $event) || (ctx.filterDomain = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ProductsListComponent_Template_select_change_17_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(18, "option", 13);
        \u0275\u0275text(19, "Cat\xE9gorie");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(20, ProductsListComponent_For_21_Template, 2, 2, "option", 14, _forTrack0);
        \u0275\u0275pipe(22, "keyvalue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function ProductsListComponent_Template_select_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ProductsListComponent_Template_select_change_23_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(24, "option", 13);
        \u0275\u0275text(25, "Statut");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(26, ProductsListComponent_For_27_Template, 2, 2, "option", 14, _forTrack0);
        \u0275\u0275pipe(28, "keyvalue");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 15)(30, "button", 16);
        \u0275\u0275listener("click", function ProductsListComponent_Template_button_click_30_listener() {
          return ctx.viewMode.set("grid");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(31, "svg", 17);
        \u0275\u0275element(32, "rect", 18)(33, "rect", 19)(34, "rect", 20)(35, "rect", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(36, "button", 22);
        \u0275\u0275listener("click", function ProductsListComponent_Template_button_click_36_listener() {
          return ctx.viewMode.set("table");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 17);
        \u0275\u0275element(38, "line", 23)(39, "line", 24)(40, "line", 25)(41, "line", 26)(42, "line", 27)(43, "line", 28);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(44, ProductsListComponent_Conditional_44_Template, 3, 1, "div", 29)(45, ProductsListComponent_Conditional_45_Template, 3, 0, "div", 30)(46, ProductsListComponent_Conditional_46_Template, 7, 3, "div", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275template(47, ProductsListComponent_Conditional_47_Template, 12, 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.successMsg() ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("visible", ctx.selectedCount > 0);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.selectedCount > 0 ? 8 : 9);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.filterDomain);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(22, 15, ctx.domainLabels));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(28, 17, ctx.statusLabels));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.viewMode() === "grid");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.viewMode() === "table");
        \u0275\u0275advance(8);
        \u0275\u0275conditional(44, ctx.viewMode() === "table" ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(45, ctx.viewMode() === "grid" && !ctx.isLoading() ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(46, ctx.pages > 1 ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(47, ctx.rejectModalId() ? 47 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, KeyValuePipe, RouterModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.products-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.btn-add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 1rem;\n  background: #27ae60;\n  color: #fff;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  text-decoration: none;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  padding: 0.75rem 1rem;\n}\n.bulk-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.filter-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.35rem 0.75rem;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 0.78rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.filter-chip[_ngcontent-%COMP%]:hover {\n  border-color: #8B4513;\n  color: #8B4513;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.82rem;\n  min-width: 180px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.625rem;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.82rem;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.2s;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n}\n.selection-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  padding: 0.2rem 0.6rem;\n  background: rgba(139, 69, 19, 0.06);\n  border-radius: 10px;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  overflow: hidden;\n  margin-inline-start: auto;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.6rem;\n  border: none;\n  background: transparent;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #8B4513;\n  color: #fff;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(139, 69, 19, 0.08);\n  color: #8B4513;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.loading-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 2rem;\n  color: var(--text-muted);\n  font-size: 0.85rem;\n}\n.loading-row[_ngcontent-%COMP%]   .spinner-sm[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(139, 69, 19, 0.15);\n  border-top-color: #8B4513;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.products-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.83rem;\n}\n.products-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-bottom: 1px solid var(--card-border);\n}\n.products-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  text-align: start;\n  font-weight: 600;\n  color: var(--text-secondary);\n  white-space: nowrap;\n  display: table-cell;\n  align-items: center;\n  gap: 0.3rem;\n}\n.products-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  opacity: 0.5;\n}\n.products-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--card-border);\n  transition: background 0.15s;\n}\n.products-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 69, 19, 0.03);\n}\n.products-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  background: rgba(139, 69, 19, 0.06);\n}\n.products-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.products-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  color: var(--text-primary);\n  vertical-align: middle;\n}\n.products-table[_ngcontent-%COMP%]   .col-check[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.products-table[_ngcontent-%COMP%]   .col-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  min-width: 200px;\n}\n.product-thumb[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 6px;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.product-thumb-empty[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 6px;\n  background: var(--bg-tertiary);\n  flex-shrink: 0;\n}\n.domain-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.5rem;\n  background: rgba(139, 69, 19, 0.07);\n  color: #8B4513;\n  border-radius: 6px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.domain-tag.sm[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.625rem;\n  border-radius: 10px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.status-pill.status-published[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n.status-pill.status-en_cours_publication[_ngcontent-%COMP%] {\n  background: rgba(52, 152, 219, 0.1);\n  color: #3498db;\n}\n.status-pill.status-draft[_ngcontent-%COMP%] {\n  background: rgba(149, 165, 166, 0.1);\n  color: #95a5a6;\n}\n.status-pill.status-archived[_ngcontent-%COMP%] {\n  background: rgba(189, 195, 199, 0.1);\n  color: #7f8c8d;\n}\n.status-pill.status-rejected[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  color: #e74c3c;\n}\n.status-pill.sm[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 20px;\n  cursor: pointer;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-track[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--card-border);\n  border-radius: 10px;\n  transition: background 0.2s;\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-track[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  left: 3px;\n  top: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%] {\n  background: #27ae60;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%]::before {\n  transform: translateX(16px);\n}\n.icon-action[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.icon-action.edit[_ngcontent-%COMP%] {\n  color: #3498db;\n}\n.icon-action.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(52, 152, 219, 0.08);\n  border-color: #3498db;\n}\n.icon-action.view[_ngcontent-%COMP%] {\n  color: #27ae60;\n}\n.icon-action.view[_ngcontent-%COMP%]:hover {\n  background: rgba(39, 174, 96, 0.08);\n  border-color: #27ae60;\n}\n.icon-action.delete[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.icon-action.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(231, 76, 60, 0.08);\n  border-color: #e74c3c;\n}\n.icon-action.publish[_ngcontent-%COMP%] {\n  color: #27ae60;\n}\n.icon-action.publish[_ngcontent-%COMP%]:hover {\n  background: rgba(39, 174, 96, 0.08);\n  border-color: #27ae60;\n}\n.icon-action.reject[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.icon-action.reject[_ngcontent-%COMP%]:hover {\n  background: rgba(231, 76, 60, 0.08);\n  border-color: #e74c3c;\n}\n.icon-action.archive[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n}\n.icon-action.archive[_ngcontent-%COMP%]:hover {\n  background: rgba(127, 140, 141, 0.08);\n  border-color: #7f8c8d;\n}\n.icon-action.feature[_ngcontent-%COMP%] {\n  color: #d4af6a;\n}\n.icon-action.feature[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 106, 0.08);\n  border-color: #d4af6a;\n}\n.icon-action.feature.featured[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 106, 0.12);\n  border-color: #d4af6a;\n  color: #d4af6a;\n}\n.feat-tag[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #d4af6a;\n  display: block;\n}\n.rejection-note[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #e74c3c;\n  margin-top: 0.1rem;\n}\n.grid-feat[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  inset-inline-end: 8px;\n  font-size: 0.85rem;\n}\n.success-toast[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #27ae60;\n  background: rgba(39, 174, 96, 0.08);\n  border: 1px solid rgba(39, 174, 96, 0.2);\n  padding: 0.3rem 0.75rem;\n  border-radius: 8px;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 50;\n}\n.reject-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(440px, 95vw);\n  background: var(--card-bg);\n  border-radius: 14px;\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);\n  z-index: 51;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.reject-modal[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n}\n.reject-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.reject-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family: inherit;\n  resize: vertical;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.reject-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n}\n.reject-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.625rem;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.875rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--card-border);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 0.85rem;\n  cursor: pointer;\n}\n.btn-reject[_ngcontent-%COMP%] {\n  padding: 0.45rem 1rem;\n  background: #e74c3c;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 1rem;\n}\n.product-grid-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  overflow: hidden;\n  transition: box-shadow 0.2s;\n}\n.product-grid-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n.product-grid-card.selected[_ngcontent-%COMP%] {\n  border-color: #8B4513;\n}\n.product-grid-card[_ngcontent-%COMP%]   .grid-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  height: 130px;\n  background: var(--bg-tertiary);\n}\n.product-grid-card[_ngcontent-%COMP%]   .grid-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.product-grid-card[_ngcontent-%COMP%]   .grid-thumb[_ngcontent-%COMP%]   .grid-thumb-empty[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.product-grid-card[_ngcontent-%COMP%]   .grid-thumb[_ngcontent-%COMP%]   .grid-check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  inset-inline-start: 8px;\n  cursor: pointer;\n}\n.product-grid-card[_ngcontent-%COMP%]   .grid-body[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.product-grid-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0.375rem 0 0.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.product-grid-card[_ngcontent-%COMP%]   .grid-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.product-grid-card[_ngcontent-%COMP%]   .grid-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.3rem;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.7rem;\n  border-radius: 6px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: 1px solid var(--card-border);\n  background: transparent;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-sm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-sm.btn-danger[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  border-color: rgba(231, 76, 60, 0.3);\n}\n.btn-sm.btn-danger[_ngcontent-%COMP%]:hover {\n  background: rgba(231, 76, 60, 0.06);\n}\n.btn-sm.btn-success[_ngcontent-%COMP%] {\n  color: #27ae60;\n  border-color: rgba(39, 174, 96, 0.3);\n}\n.btn-sm.btn-success[_ngcontent-%COMP%]:hover {\n  background: rgba(39, 174, 96, 0.06);\n}\n.btn-sm.btn-ghost[_ngcontent-%COMP%] {\n  border-color: transparent;\n}\n.selected-count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #8B4513;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.375rem;\n  padding: 0.5rem 0;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  background: var(--card-bg);\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   button.current[_ngcontent-%COMP%] {\n  background: #8B4513;\n  color: #fff;\n  border-color: #8B4513;\n  font-weight: 700;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled):not(.current) {\n  border-color: #8B4513;\n  color: #8B4513;\n}\n/*# sourceMappingURL=products-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsListComponent, { className: "ProductsListComponent", filePath: "src\\app\\features\\admin\\products\\products-list.component.ts", lineNumber: 29 });
})();
export {
  ProductsListComponent
};
//# sourceMappingURL=chunk-YJPTY6KI.js.map
