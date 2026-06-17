import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
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
  DatePipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ELZIBL4.js";

// src/app/features/admin/cms/cms.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item._id;
function CmsComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function CmsComponent_For_11_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.activeTab.set(tab_r2.key);
      return \u0275\u0275resetView(ctx_r2.load());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === tab_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.count);
  }
}
function CmsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r2.successMsg(), "");
  }
}
function CmsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function CmsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Aucun article dans cette cat\xE9gorie.");
    \u0275\u0275elementEnd();
  }
}
function CmsComponent_Conditional_15_For_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("par ", a_r5.author, "");
  }
}
function CmsComponent_Conditional_15_For_16_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function CmsComponent_Conditional_15_For_16_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const a_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeStatus(a_r5._id, "published"));
    });
    \u0275\u0275text(1, "Publier");
    \u0275\u0275elementEnd();
  }
}
function CmsComponent_Conditional_15_For_16_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function CmsComponent_Conditional_15_For_16_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const a_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeStatus(a_r5._id, "archived"));
    });
    \u0275\u0275text(1, "Archiver");
    \u0275\u0275elementEnd();
  }
}
function CmsComponent_Conditional_15_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 13)(2, "div", 14);
    \u0275\u0275text(3, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CmsComponent_Conditional_15_For_16_Conditional_7_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 19);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 20)(18, "button", 21);
    \u0275\u0275listener("click", function CmsComponent_Conditional_15_For_16_Template_button_click_18_listener() {
      const a_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openForm(a_r5));
    });
    \u0275\u0275text(19, "Modifier");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, CmsComponent_Conditional_15_For_16_Conditional_20_Template, 2, 0, "button", 22)(21, CmsComponent_Conditional_15_For_16_Conditional_21_Template, 2, 0, "button", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(a_r5.title.fr || a_r5.title.ar || "Sans titre");
    \u0275\u0275advance();
    \u0275\u0275conditional(7, a_r5.author ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r5.category);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.STATUS_MAP[a_r5.status].cls);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.STATUS_MAP[a_r5.status].label || a_r5.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 9, a_r5.publishedAt || a_r5.createdAt, "dd/MM/yy"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(20, a_r5.status === "draft" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(21, a_r5.status === "published" ? 21 : -1);
  }
}
function CmsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "table", 12)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, CmsComponent_Conditional_15_For_16_Template, 22, 12, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r2.articles());
  }
}
function CmsComponent_Conditional_16_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275property("value", c_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r9);
  }
}
function CmsComponent_Conditional_16_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formError());
  }
}
function CmsComponent_Conditional_16_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 48);
  }
}
function CmsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function CmsComponent_Conditional_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 27)(2, "div", 28)(3, "h3");
    \u0275\u0275text(4, "{{ editId() ? 'Modifier l'article' : 'Nouvel article' }}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function CmsComponent_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 30);
    \u0275\u0275listener("ngSubmit", function CmsComponent_Conditional_16_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275elementStart(8, "div", 31)(9, "div", 32)(10, "label");
    \u0275\u0275text(11, "Titre (FR) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 32)(14, "label");
    \u0275\u0275text(15, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (AR)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 31)(18, "div", 32)(19, "label");
    \u0275\u0275text(20, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 35)(22, "option", 36);
    \u0275\u0275text(23, "\u2014 Cat\xE9gorie \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, CmsComponent_Conditional_16_For_25_Template, 2, 2, "option", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 32)(27, "label");
    \u0275\u0275text(28, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 38)(30, "option", 39);
    \u0275\u0275text(31, "Brouillon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 40);
    \u0275\u0275text(33, "Publi\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 41);
    \u0275\u0275text(35, "Programmer");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 32)(37, "label");
    \u0275\u0275text(38, "Contenu (FR)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "textarea", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 32)(41, "label");
    \u0275\u0275text(42, "\u0627\u0644\u0645\u062D\u062A\u0648\u0649 (AR)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "textarea", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, CmsComponent_Conditional_16_Conditional_44_Template, 2, 1, "div", 44);
    \u0275\u0275elementStart(45, "div", 45)(46, "button", 46);
    \u0275\u0275listener("click", function CmsComponent_Conditional_16_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275text(47, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 47);
    \u0275\u0275template(49, CmsComponent_Conditional_16_Conditional_49_Template, 1, 0, "span", 48);
    \u0275\u0275text(50, " {{ editId() ? 'Mettre \xE0 jour' : 'Cr\xE9er l'article' }} ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.categories);
    \u0275\u0275advance(20);
    \u0275\u0275conditional(44, ctx_r2.formError() ? 44 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(49, ctx_r2.saving() ? 49 : -1);
  }
}
var STATUS_MAP = {
  draft: { label: "Brouillon", cls: "draft" },
  published: { label: "Publi\xE9", cls: "published" },
  archived: { label: "Archiv\xE9", cls: "archived" },
  scheduled: { label: "Programm\xE9", cls: "scheduled" }
};
var CATEGORIES = ["actualit\xE9s", "artisanat", "tourisme", "agriculture", "conseils", "communaut\xE9"];
var CmsComponent = class _CmsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.fb = inject(FormBuilder);
    this.articles = signal([]);
    this.total = signal(0);
    this.isLoading = signal(true);
    this.activeTab = signal("all");
    this.formOpen = signal(false);
    this.editId = signal(null);
    this.saving = signal(false);
    this.successMsg = signal("");
    this.formError = signal("");
    this.STATUS_MAP = STATUS_MAP;
    this.categories = CATEGORIES;
    this.counts = signal({ all: 0, draft: 0, published: 0, archived: 0 });
    this.form = this.fb.group({
      titleFr: ["", Validators.required],
      titleAr: [""],
      category: [""],
      status: ["draft"],
      contentFr: [""],
      contentAr: [""]
    });
  }
  get statusTabs() {
    const c = this.counts();
    return [
      { key: "all", label: "Tous", count: c.all },
      { key: "draft", label: "Brouillons", count: c.draft },
      { key: "published", label: "Publi\xE9s", count: c.published },
      { key: "archived", label: "Archiv\xE9s", count: c.archived }
    ];
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading.set(true);
    const params = { limit: 50 };
    if (this.activeTab() !== "all")
      params["status"] = this.activeTab();
    this.api.get("/blog", params).subscribe({
      next: (res) => {
        this.articles.set(res.data);
        this.total.set(res.pagination.total);
        if (this.activeTab() === "all")
          this.loadCounts();
        this.isLoading.set(false);
      },
      error: () => {
        this.articles.set([]);
        this.isLoading.set(false);
      }
    });
  }
  loadCounts() {
    const statuses = ["draft", "published", "archived"];
    const results = { all: this.total() };
    let done = 0;
    statuses.forEach((s) => {
      this.api.get("/blog", { status: s, limit: 1 }).subscribe({
        next: (res) => {
          results[s] = res.pagination.total;
          done++;
          if (done === statuses.length)
            this.counts.set(results);
        }
      });
    });
  }
  openForm(a) {
    this.formError.set("");
    if (a) {
      this.editId.set(a._id);
      this.form.patchValue({ titleFr: a.title.fr || "", titleAr: a.title.ar || "", category: a.category, status: a.status });
    } else {
      this.editId.set(null);
      this.form.reset({ status: "draft" });
    }
    this.formOpen.set(true);
  }
  closeForm() {
    this.formOpen.set(false);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.formError.set("");
    const v = this.form.getRawValue();
    const payload = {
      title: { fr: v.titleFr, ar: v.titleAr },
      content: { fr: v.contentFr, ar: v.contentAr },
      category: v.category,
      status: v.status
    };
    const req = this.editId() ? this.api.put(`/blog/${this.editId()}`, payload) : this.api.post("/blog", payload);
    req.subscribe({
      next: () => {
        this.saving.set(false);
        this.successMsg.set(this.editId() ? "Article mis \xE0 jour !" : "Article cr\xE9\xE9 !");
        this.closeForm();
        this.load();
        setTimeout(() => this.successMsg.set(""), 4e3);
      },
      error: (err) => {
        this.saving.set(false);
        this.formError.set(err.error?.error || "Erreur lors de l'enregistrement");
      }
    });
  }
  changeStatus(id, status) {
    this.api.patch(`/blog/${id}/status`, { status }).subscribe({
      next: () => {
        this.successMsg.set("Statut mis \xE0 jour.");
        this.load();
        setTimeout(() => this.successMsg.set(""), 3e3);
      }
    });
  }
  static {
    this.\u0275fac = function CmsComponent_Factory(t) {
      return new (t || _CmsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CmsComponent, selectors: [["app-cms"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 4, consts: [[1, "cms-page"], [1, "page-header"], [1, "sub"], [1, "btn-add", 3, "click"], [1, "status-tabs"], [1, "stab", 3, "active"], [1, "alert", "success"], [1, "loading"], [1, "stab", 3, "click"], [1, "count"], [1, "empty"], [1, "table-wrap"], [1, "table"], [1, "col-title"], [1, "article-icon"], [1, "title"], [1, "author"], [1, "chip", "cat"], [1, "spill"], [1, "date"], [1, "actions"], [1, "act-btn", "edit", 3, "click"], [1, "act-btn", "publish"], [1, "act-btn", "archive"], [1, "act-btn", "publish", 3, "click"], [1, "act-btn", "archive", 3, "click"], [1, "overlay", 3, "click"], [1, "modal"], [1, "modal-header"], [1, "close", 3, "click"], [1, "modal-form", 3, "ngSubmit", "formGroup"], [1, "row-2"], [1, "field"], ["formControlName", "titleFr", "placeholder", "Titre en fran\xE7ais\u2026"], ["formControlName", "titleAr", "placeholder", "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629\u2026", "dir", "rtl"], ["formControlName", "category"], ["value", ""], [3, "value"], ["formControlName", "status"], ["value", "draft"], ["value", "published"], ["value", "scheduled"], ["formControlName", "contentFr", "rows", "5", "placeholder", "Contenu de l'article en fran\xE7ais\u2026"], ["formControlName", "contentAr", "rows", "4", "dir", "rtl", "placeholder", "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0627\u0644 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629\u2026"], [1, "alert", "error"], [1, "modal-footer"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-save", 3, "disabled"], [1, "spinner"]], template: function CmsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Gestion de Contenu (CMS)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function CmsComponent_Template_button_click_7_listener() {
          return ctx.openForm();
        });
        \u0275\u0275text(8, "+ Nouvel article");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4);
        \u0275\u0275repeaterCreate(10, CmsComponent_For_11_Template, 4, 4, "button", 5, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, CmsComponent_Conditional_12_Template, 2, 1, "div", 6)(13, CmsComponent_Conditional_13_Template, 2, 0, "div", 7)(14, CmsComponent_Conditional_14_Template, 2, 0)(15, CmsComponent_Conditional_15_Template, 17, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, CmsComponent_Conditional_16_Template, 51, 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.total(), " article(s) au total");
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.statusTabs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(12, ctx.successMsg() ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(13, ctx.isLoading() ? 13 : ctx.articles().length === 0 ? 14 : 15);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(16, ctx.formOpen() ? 16 : -1);
      }
    }, dependencies: [CommonModule, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.cms-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 0.2rem;\n}\n.sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-add[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n}\n.status-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  border-bottom: 2px solid var(--card-border);\n  flex-wrap: wrap;\n}\n.stab[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.875rem;\n  background: none;\n  border: none;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.stab.active[_ngcontent-%COMP%] {\n  color: #8B4513;\n  border-bottom-color: #8B4513;\n}\n.count[_ngcontent-%COMP%] {\n  padding: 0.1rem 0.4rem;\n  border-radius: 8px;\n  background: var(--bg-tertiary);\n  font-size: 0.68rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.875rem;\n  border-radius: 8px;\n  font-size: 0.84rem;\n  font-weight: 500;\n}\n.alert.success[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.08);\n  border: 1px solid rgba(39, 174, 96, 0.2);\n  color: #27ae60;\n}\n.alert.error[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.08);\n  border: 1px solid rgba(231, 76, 60, 0.2);\n  color: #e74c3c;\n}\n.loading[_ngcontent-%COMP%], .empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 1rem;\n  text-align: start;\n  font-weight: 600;\n  color: var(--text-secondary);\n  background: var(--bg-secondary);\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.65rem 1rem;\n  border-top: 1px solid var(--card-border);\n  vertical-align: middle;\n}\n.col-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n}\n.article-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.author[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n}\n.chip.cat[_ngcontent-%COMP%] {\n  padding: 0.18rem 0.5rem;\n  background: rgba(139, 69, 19, 0.07);\n  color: #8B4513;\n  border-radius: 6px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.spill[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.55rem;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.spill.draft[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-muted);\n}\n.spill.published[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n.spill.archived[_ngcontent-%COMP%] {\n  background: rgba(127, 140, 141, 0.1);\n  color: #7f8c8d;\n}\n.spill.scheduled[_ngcontent-%COMP%] {\n  background: rgba(52, 152, 219, 0.1);\n  color: #3498db;\n}\n.date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n}\n.act-btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.65rem;\n  border-radius: 6px;\n  border: 1px solid;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: transparent;\n}\n.act-btn.edit[_ngcontent-%COMP%] {\n  border-color: rgba(52, 152, 219, 0.3);\n  color: #3498db;\n}\n.act-btn.publish[_ngcontent-%COMP%] {\n  border-color: rgba(39, 174, 96, 0.3);\n  color: #27ae60;\n}\n.act-btn.archive[_ngcontent-%COMP%] {\n  border-color: rgba(127, 140, 141, 0.3);\n  color: #7f8c8d;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 50;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(620px, 95vw);\n  max-height: 88vh;\n  overflow-y: auto;\n  background: var(--card-bg);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 51;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--card-border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n}\n.close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.modal-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.875rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.8rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n  font-family: inherit;\n}\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--card-border);\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.875rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--card-border);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=cms.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CmsComponent, { className: "CmsComponent", filePath: "src\\app\\features\\admin\\cms\\cms.component.ts", lineNumber: 222 });
})();
export {
  CmsComponent
};
//# sourceMappingURL=chunk-ZGJ5IYLJ.js.map
