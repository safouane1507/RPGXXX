import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-JXVZJL7I.js";
import {
  ApiService
} from "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
import {
  CommonModule,
  DecimalPipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ELZIBL4.js";

// src/app/features/pro/products/pro-products.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item._id;
var _forTrack2 = ($index, $item) => $item.value;
function ProProductsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r0.successMsg(), "");
  }
}
function ProProductsComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("value", s_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2.label);
  }
}
function ProProductsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProProductsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "p");
    \u0275\u0275text(2, "Vous n'avez pas encore de produits.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 3);
    \u0275\u0275listener("click", function ProProductsComponent_Conditional_17_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openForm());
    });
    \u0275\u0275text(4, "Ajouter votre premier produit");
    \u0275\u0275elementEnd()();
  }
}
function ProProductsComponent_Conditional_18_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2717 ", p_r5.rejectionReason, "");
  }
}
function ProProductsComponent_Conditional_18_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 13)(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProProductsComponent_Conditional_18_For_18_Conditional_7_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 18);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 19);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 20)(20, "button", 21);
    \u0275\u0275listener("click", function ProProductsComponent_Conditional_18_For_18_Template_button_click_20_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openForm(p_r5));
    });
    \u0275\u0275text(21, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 22);
    \u0275\u0275listener("click", function ProProductsComponent_Conditional_18_For_18_Template_button_click_22_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmDelete(p_r5._id));
    });
    \u0275\u0275text(23, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((p_r5.name["fr"] || p_r5.name["ar"] || "?").charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.name["fr"] || p_r5.name["ar"] || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(7, p_r5.rejectionReason ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.domainLabel(p_r5.domain));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, p_r5.price, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.stock);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.STATUS_LABELS[p_r5.status].cls);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.STATUS_LABELS[p_r5.status].label || p_r5.status, " ");
  }
}
function ProProductsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "table", 12)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Produit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Domaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Prix (MAD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, ProProductsComponent_Conditional_18_For_18_Template, 24, 12, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.products());
  }
}
function ProProductsComponent_Conditional_19_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function ProProductsComponent_Conditional_19_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r7 = ctx.$implicit;
    \u0275\u0275property("value", d_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r7.label);
  }
}
function ProProductsComponent_Conditional_19_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formError());
  }
}
function ProProductsComponent_Conditional_19_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 49);
  }
}
function ProProductsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function ProProductsComponent_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function ProProductsComponent_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 27);
    \u0275\u0275listener("ngSubmit", function ProProductsComponent_Conditional_19_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitForm());
    });
    \u0275\u0275elementStart(8, "div", 28)(9, "label", 29);
    \u0275\u0275text(10, "Nom du produit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 30)(12, "div", 31)(13, "label");
    \u0275\u0275text(14, "Fran\xE7ais *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 32);
    \u0275\u0275template(16, ProProductsComponent_Conditional_19_Conditional_16_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 31)(18, "label", 34);
    \u0275\u0275text(19, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 28)(22, "label", 29);
    \u0275\u0275text(23, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 30)(25, "div", 31)(26, "label");
    \u0275\u0275text(27, "Fran\xE7ais");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "textarea", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 31)(30, "label", 34);
    \u0275\u0275text(31, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "textarea", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 38)(34, "div", 31)(35, "label");
    \u0275\u0275text(36, "Domaine *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 39)(38, "option", 7);
    \u0275\u0275text(39, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(40, ProProductsComponent_Conditional_19_For_41_Template, 2, 2, "option", 8, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 31)(43, "label");
    \u0275\u0275text(44, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "select", 40)(46, "option", 41);
    \u0275\u0275text(47, "Brouillon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 42);
    \u0275\u0275text(49, "Soumettre pour publication");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 38)(51, "div", 31)(52, "label");
    \u0275\u0275text(53, "Prix (MAD) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 31)(56, "label");
    \u0275\u0275text(57, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(59, ProProductsComponent_Conditional_19_Conditional_59_Template, 2, 1, "div", 45);
    \u0275\u0275elementStart(60, "div", 46)(61, "button", 47);
    \u0275\u0275listener("click", function ProProductsComponent_Conditional_19_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275text(62, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 48);
    \u0275\u0275template(64, ProProductsComponent_Conditional_19_Conditional_64_Template, 1, 0, "span", 49);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editId() ? "Modifier le produit" : "Nouveau produit");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(16, ((tmp_3_0 = ctx_r0.fc("nameFr")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.fc("nameFr")) == null ? null : tmp_3_0.touched) ? 16 : -1);
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r0.domains);
    \u0275\u0275advance(19);
    \u0275\u0275conditional(59, ctx_r0.formError() ? 59 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(64, ctx_r0.isSaving() ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.editId() ? "Mettre \xE0 jour" : "Enregistrer", " ");
  }
}
var DOMAINS = [
  { value: "artisanat_service", label: "Artisanat de Service" },
  { value: "produits_mer", label: "Produits de la Mer" },
  { value: "habillement_mode", label: "Habillement & Mode" },
  { value: "tourisme_rural", label: "Tourisme Rural" },
  { value: "artisanat_art", label: "Artisanat d'art" },
  { value: "agriculture_bio", label: "Agriculture Bio" },
  { value: "soin_beaute", label: "Soin & Beaut\xE9" },
  { value: "produit_terroir", label: "Produit de Terroir" },
  { value: "artisanat_culinaire", label: "Artisanat Culinaire" }
];
var STATUS_LABELS = {
  draft: { label: "Brouillon", cls: "draft" },
  en_cours_publication: { label: "En cours", cls: "pending" },
  published: { label: "Publi\xE9", cls: "published" },
  archived: { label: "Archiv\xE9", cls: "archived" },
  rejected: { label: "Rejet\xE9", cls: "rejected" }
};
var ProProductsComponent = class _ProProductsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.fb = inject(FormBuilder);
    this.products = signal([]);
    this.total = signal(0);
    this.isLoading = signal(true);
    this.formOpen = signal(false);
    this.editId = signal(null);
    this.isSaving = signal(false);
    this.successMsg = signal("");
    this.formError = signal("");
    this.statusFilter = signal("");
    this.domains = DOMAINS;
    this.STATUS_LABELS = STATUS_LABELS;
    this.form = this.fb.group({
      nameFr: ["", Validators.required],
      nameAr: [""],
      descFr: [""],
      descAr: [""],
      domain: ["", Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0],
      status: ["draft"]
    });
  }
  get statusEntries() {
    return Object.entries(STATUS_LABELS).map(([key, v]) => ({ key, label: v.label }));
  }
  fc(name) {
    return this.form.get(name);
  }
  domainLabel(id) {
    return DOMAINS.find((d) => d.value === id)?.label ?? id;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading.set(true);
    const params = { limit: 50 };
    if (this.statusFilter())
      params["status"] = this.statusFilter();
    this.api.get("/products/my", params).subscribe({
      next: (res) => {
        this.products.set(res.data);
        this.total.set(res.pagination.total);
        this.isLoading.set(false);
      },
      error: () => {
        this.products.set([]);
        this.isLoading.set(false);
      }
    });
  }
  openForm(product) {
    this.formError.set("");
    this.successMsg.set("");
    if (product) {
      this.editId.set(product._id);
      this.form.patchValue({
        nameFr: product.name["fr"] || "",
        nameAr: product.name["ar"] || "",
        domain: product.domain,
        price: product.price,
        stock: product.stock,
        status: product.status
      });
    } else {
      this.editId.set(null);
      this.form.reset({ price: 0, stock: 0, status: "draft" });
    }
    this.formOpen.set(true);
  }
  closeForm() {
    this.formOpen.set(false);
  }
  submitForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSaving.set(true);
    this.formError.set("");
    const v = this.form.getRawValue();
    const payload = {
      name: { fr: v.nameFr, ar: v.nameAr },
      description: { fr: v.descFr, ar: v.descAr },
      domain: v.domain,
      price: v.price,
      stock: v.stock,
      status: v.status
    };
    const req = this.editId() ? this.api.put(`/products/${this.editId()}`, payload) : this.api.post("/products", payload);
    req.subscribe({
      next: () => {
        this.isSaving.set(false);
        this.successMsg.set(this.editId() ? "Produit mis \xE0 jour !" : "Produit cr\xE9\xE9 avec succ\xE8s !");
        this.closeForm();
        this.load();
      },
      error: (err) => {
        this.isSaving.set(false);
        this.formError.set(err.error?.error || "Erreur lors de l'enregistrement");
      }
    });
  }
  confirmDelete(id) {
    if (!confirm("Supprimer ce produit d\xE9finitivement ?"))
      return;
    this.api.delete(`/products/${id}`).subscribe({
      next: () => {
        this.successMsg.set("Produit supprim\xE9.");
        this.load();
      },
      error: () => {
      }
    });
  }
  static {
    this.\u0275fac = function ProProductsComponent_Factory(t) {
      return new (t || _ProProductsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProProductsComponent, selectors: [["app-pro-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 4, consts: [[1, "pro-products"], [1, "page-header"], [1, "sub"], [1, "btn-add", 3, "click"], [1, "alert", "success"], [1, "filter-bar"], [1, "filter-select", 3, "change"], ["value", ""], [3, "value"], [1, "loading"], [1, "empty"], [1, "table-wrap"], [1, "products-table"], [1, "col-name"], [1, "avatar"], [1, "name"], [1, "rejection-note"], [1, "domain-chip"], [1, "price"], [1, "status-pill"], [1, "actions"], ["title", "Modifier", 1, "icon-btn", "edit", 3, "click"], ["title", "Supprimer", 1, "icon-btn", "del", 3, "click"], [1, "overlay", 3, "click"], [1, "slide-panel"], [1, "panel-header"], [1, "close-btn", 3, "click"], [1, "panel-form", 3, "ngSubmit", "formGroup"], [1, "field-group"], [1, "section-label"], [1, "ml-row"], [1, "field"], ["formControlName", "nameFr", "placeholder", "Nom en fran\xE7ais"], [1, "err"], [1, "rtl"], ["formControlName", "nameAr", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629", "dir", "rtl"], ["formControlName", "descFr", "rows", "3", "placeholder", "Description en fran\xE7ais\u2026"], ["formControlName", "descAr", "rows", "3", "dir", "rtl", "placeholder", "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629\u2026"], [1, "row-2"], ["formControlName", "domain"], ["formControlName", "status"], ["value", "draft"], ["value", "en_cours_publication"], ["type", "number", "formControlName", "price", "placeholder", "0.00", "min", "0"], ["type", "number", "formControlName", "stock", "placeholder", "0", "min", "0"], [1, "alert", "error"], [1, "panel-footer"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-save", 3, "disabled"], [1, "spinner"]], template: function ProProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Mes Produits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function ProProductsComponent_Template_button_click_7_listener() {
          return ctx.openForm();
        });
        \u0275\u0275text(8, "+ Ajouter un produit");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, ProProductsComponent_Conditional_9_Template, 2, 1, "div", 4);
        \u0275\u0275elementStart(10, "div", 5)(11, "select", 6);
        \u0275\u0275listener("change", function ProProductsComponent_Template_select_change_11_listener($event) {
          ctx.statusFilter.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementStart(12, "option", 7);
        \u0275\u0275text(13, "Tous les statuts");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(14, ProProductsComponent_For_15_Template, 2, 2, "option", 8, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(16, ProProductsComponent_Conditional_16_Template, 2, 0, "div", 9)(17, ProProductsComponent_Conditional_17_Template, 5, 0)(18, ProProductsComponent_Conditional_18_Template, 19, 0)(19, ProProductsComponent_Conditional_19_Template, 66, 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.total(), " produit(s) dans votre catalogue");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(9, ctx.successMsg() ? 9 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.statusEntries);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(16, ctx.isLoading() ? 16 : ctx.products().length === 0 ? 17 : 18);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(19, ctx.formOpen() ? 19 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n.pro-products[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 0.2rem;\n}\n.sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-add[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 0.65rem 1rem;\n  border-radius: 8px;\n  font-size: 0.84rem;\n  font-weight: 500;\n}\n.alert.success[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.08);\n  border: 1px solid rgba(39, 174, 96, 0.2);\n  color: #27ae60;\n}\n.alert.error[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.08);\n  border: 1px solid rgba(231, 76, 60, 0.2);\n  color: #e74c3c;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.625rem;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.82rem;\n  outline: none;\n}\n.loading[_ngcontent-%COMP%], .empty[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  border: 1.5px dashed var(--card-border);\n  border-radius: 12px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.products-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.products-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.6rem 1rem;\n  text-align: start;\n  font-weight: 600;\n  color: var(--text-secondary);\n  background: var(--bg-secondary);\n  white-space: nowrap;\n}\n.products-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.65rem 1rem;\n  border-top: 1px solid var(--card-border);\n  vertical-align: middle;\n}\n.col-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 7px;\n  background:\n    linear-gradient(\n      135deg,\n      #8B4513,\n      #d4af6a);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8rem;\n  flex-shrink: 0;\n}\n.name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.rejection-note[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #e74c3c;\n  margin-top: 0.15rem;\n}\n.domain-chip[_ngcontent-%COMP%] {\n  padding: 0.18rem 0.5rem;\n  background: rgba(139, 69, 19, 0.07);\n  color: #8B4513;\n  border-radius: 6px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.status-pill[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.55rem;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.status-pill.draft[_ngcontent-%COMP%] {\n  background: rgba(149, 165, 166, 0.12);\n  color: #7f8c8d;\n}\n.status-pill.pending[_ngcontent-%COMP%] {\n  background: rgba(243, 156, 18, 0.1);\n  color: #d68910;\n}\n.status-pill.published[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n.status-pill.archived[_ngcontent-%COMP%] {\n  background: rgba(52, 73, 94, 0.08);\n  color: #52616b;\n}\n.status-pill.rejected[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  color: #e74c3c;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.9rem;\n  padding: 0.2rem 0.3rem;\n  border-radius: 5px;\n  transition: background 0.15s;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 50;\n}\n.slide-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: min(460px, 100vw);\n  background: var(--card-bg);\n  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.15);\n  z-index: 51;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--card-border);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.panel-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  flex: 1;\n}\n.field-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  border-left: 3px solid #8B4513;\n  padding-left: 0.5rem;\n}\n.ml-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\nlabel.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n  font-family: inherit;\n}\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.err[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #e74c3c;\n}\n.panel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--card-border);\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.875rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--card-border);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=pro-products.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProProductsComponent, { className: "ProProductsComponent", filePath: "src\\app\\features\\pro\\products\\pro-products.component.ts", lineNumber: 269 });
})();
export {
  ProProductsComponent
};
//# sourceMappingURL=chunk-HB47O7Q5.js.map
