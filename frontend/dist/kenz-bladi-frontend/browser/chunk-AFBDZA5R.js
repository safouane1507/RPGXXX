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

// src/app/features/admin/events/events-list.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item._id;
function EventsListComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.label);
  }
}
function EventsListComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275property("value", t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2);
  }
}
function EventsListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r2.successMsg(), "");
  }
}
function EventsListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function EventsListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Aucun \xE9v\xE9nement. Cr\xE9ez le premier !");
    \u0275\u0275elementEnd();
  }
}
function EventsListComponent_Conditional_23_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2192 ", \u0275\u0275pipeBind2(2, 1, e_r5.endDate, "dd/MM/yyyy"), "");
  }
}
function EventsListComponent_Conditional_23_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F465} ", e_r5.registrationCount, "");
  }
}
function EventsListComponent_Conditional_23_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function EventsListComponent_Conditional_23_For_2_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const e_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeStatus(e_r5._id, "published"));
    });
    \u0275\u0275text(1, "Publier");
    \u0275\u0275elementEnd();
  }
}
function EventsListComponent_Conditional_23_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function EventsListComponent_Conditional_23_For_2_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const e_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeStatus(e_r5._id, "cancelled"));
    });
    \u0275\u0275text(1, "Annuler");
    \u0275\u0275elementEnd();
  }
}
function EventsListComponent_Conditional_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, EventsListComponent_Conditional_23_For_2_Conditional_12_Template, 3, 4, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 16)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, EventsListComponent_Conditional_23_For_2_Conditional_16_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 17)(18, "button", 18);
    \u0275\u0275listener("click", function EventsListComponent_Conditional_23_For_2_Template_button_click_18_listener() {
      const e_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openForm(e_r5));
    });
    \u0275\u0275text(19, "Modifier");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, EventsListComponent_Conditional_23_For_2_Conditional_20_Template, 2, 0, "button", 19)(21, EventsListComponent_Conditional_23_For_2_Conditional_21_Template, 2, 0, "button", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r5.type);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.STATUS_MAP[e_r5.status].cls);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.STATUS_MAP[e_r5.status].label || e_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r5.title.fr || e_r5.title.ar || "Sans titre");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", \u0275\u0275pipeBind2(11, 11, e_r5.startDate, "dd/MM/yyyy"), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(12, e_r5.endDate && e_r5.endDate !== e_r5.startDate ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", e_r5.location.city || "Lieu \xE0 d\xE9finir", "");
    \u0275\u0275advance();
    \u0275\u0275conditional(16, e_r5.registrationCount ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(20, e_r5.status === "draft" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(21, e_r5.status === "published" ? 21 : -1);
  }
}
function EventsListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, EventsListComponent_Conditional_23_For_2_Template, 22, 14, "div", 12, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.events());
  }
}
function EventsListComponent_Conditional_24_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    \u0275\u0275property("value", t_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r9);
  }
}
function EventsListComponent_Conditional_24_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formError());
  }
}
function EventsListComponent_Conditional_24_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 45);
  }
}
function EventsListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function EventsListComponent_Conditional_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25)(3, "h3");
    \u0275\u0275text(4, "{{ editId() ? 'Modifier l'\xE9v\xE9nement' : 'Nouvel \xE9v\xE9nement' }}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function EventsListComponent_Conditional_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 27);
    \u0275\u0275listener("ngSubmit", function EventsListComponent_Conditional_24_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275elementStart(8, "div", 28)(9, "div", 29)(10, "label");
    \u0275\u0275text(11, "Titre (FR) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 29)(14, "label");
    \u0275\u0275text(15, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (AR)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 28)(18, "div", 29)(19, "label");
    \u0275\u0275text(20, "Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 32)(22, "option", 6);
    \u0275\u0275text(23, "\u2014 Type \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, EventsListComponent_Conditional_24_For_25_Template, 2, 2, "option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 29)(27, "label");
    \u0275\u0275text(28, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 33)(30, "option", 34);
    \u0275\u0275text(31, "Brouillon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 35);
    \u0275\u0275text(33, "Publi\xE9");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 28)(35, "div", 29)(36, "label");
    \u0275\u0275text(37, "Date de d\xE9but *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 29)(40, "label");
    \u0275\u0275text(41, "Date de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 28)(44, "div", 29)(45, "label");
    \u0275\u0275text(46, "Ville");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 29)(49, "label");
    \u0275\u0275text(50, "R\xE9gion");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "input", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 29)(53, "label");
    \u0275\u0275text(54, "Description (FR)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "textarea", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, EventsListComponent_Conditional_24_Conditional_56_Template, 2, 1, "div", 41);
    \u0275\u0275elementStart(57, "div", 42)(58, "button", 43);
    \u0275\u0275listener("click", function EventsListComponent_Conditional_24_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275text(59, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 44);
    \u0275\u0275template(61, EventsListComponent_Conditional_24_Conditional_61_Template, 1, 0, "span", 45);
    \u0275\u0275text(62, " {{ editId() ? 'Mettre \xE0 jour' : 'Cr\xE9er l'\xE9v\xE9nement' }} ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.eventTypes);
    \u0275\u0275advance(32);
    \u0275\u0275conditional(56, ctx_r2.formError() ? 56 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(61, ctx_r2.saving() ? 61 : -1);
  }
}
var EVENT_TYPES = ["festival", "foire", "atelier", "exposition", "conference", "autre"];
var STATUS_MAP = {
  draft: { label: "Brouillon", cls: "draft" },
  published: { label: "Publi\xE9", cls: "published" },
  cancelled: { label: "Annul\xE9", cls: "cancelled" },
  archived: { label: "Archiv\xE9", cls: "archived" }
};
var EventsListComponent = class _EventsListComponent {
  constructor() {
    this.api = inject(ApiService);
    this.fb = inject(FormBuilder);
    this.events = signal([]);
    this.total = signal(0);
    this.isLoading = signal(true);
    this.filterStatus = signal("");
    this.filterType = signal("");
    this.formOpen = signal(false);
    this.editId = signal(null);
    this.saving = signal(false);
    this.successMsg = signal("");
    this.formError = signal("");
    this.eventTypes = EVENT_TYPES;
    this.STATUS_MAP = STATUS_MAP;
    this.form = this.fb.group({
      titleFr: ["", Validators.required],
      titleAr: [""],
      type: ["", Validators.required],
      status: ["draft"],
      startDate: ["", Validators.required],
      endDate: [""],
      city: [""],
      region: [""],
      descFr: [""]
    });
  }
  get statusEntries() {
    return Object.entries(STATUS_MAP).map(([key, v]) => ({ key, label: v.label }));
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading.set(true);
    const params = { limit: 50 };
    if (this.filterStatus())
      params["status"] = this.filterStatus();
    if (this.filterType())
      params["type"] = this.filterType();
    this.api.get("/events", params).subscribe({
      next: (res) => {
        this.events.set(res.data);
        this.total.set(res.pagination.total);
        this.isLoading.set(false);
      },
      error: () => {
        this.events.set([]);
        this.isLoading.set(false);
      }
    });
  }
  openForm(event) {
    this.formError.set("");
    if (event) {
      this.editId.set(event._id);
      this.form.patchValue({
        titleFr: event.title?.fr || "",
        titleAr: event.title?.ar || "",
        type: event.type,
        status: event.status,
        startDate: event.startDate?.slice(0, 10) || "",
        endDate: event.endDate?.slice(0, 10) || "",
        city: event.location?.city || "",
        region: event.location?.region || ""
      });
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
      type: v.type,
      status: v.status,
      startDate: v.startDate,
      endDate: v.endDate || v.startDate,
      location: { city: v.city, region: v.region },
      description: { fr: v.descFr }
    };
    const req = this.editId() ? this.api.put(`/events/${this.editId()}`, payload) : this.api.post("/events", payload);
    req.subscribe({
      next: () => {
        this.saving.set(false);
        this.successMsg.set(this.editId() ? "\xC9v\xE9nement mis \xE0 jour !" : "\xC9v\xE9nement cr\xE9\xE9 !");
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
    this.api.patch(`/events/${id}/status`, { status }).subscribe({
      next: () => {
        this.successMsg.set("Statut mis \xE0 jour.");
        this.load();
        setTimeout(() => this.successMsg.set(""), 3e3);
      }
    });
  }
  static {
    this.\u0275fac = function EventsListComponent_Factory(t) {
      return new (t || _EventsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsListComponent, selectors: [["app-events-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 4, consts: [[1, "events-page"], [1, "page-header"], [1, "sub"], [1, "btn-add", 3, "click"], [1, "filter-bar"], [1, "fs", 3, "change"], ["value", ""], [3, "value"], [1, "alert", "success"], [1, "loading"], [1, "empty"], [1, "events-grid"], [1, "event-card"], [1, "event-head"], [1, "type-badge"], [1, "status-pill"], [1, "event-meta"], [1, "event-actions"], [1, "act-btn", "edit", 3, "click"], [1, "act-btn", "publish"], [1, "act-btn", "cancel"], [1, "act-btn", "publish", 3, "click"], [1, "act-btn", "cancel", 3, "click"], [1, "overlay", 3, "click"], [1, "modal"], [1, "modal-header"], [1, "close", 3, "click"], [1, "modal-form", 3, "ngSubmit", "formGroup"], [1, "row-2"], [1, "field"], ["formControlName", "titleFr", "placeholder", "Festival de l'Argane\u2026"], ["formControlName", "titleAr", "placeholder", "\u0645\u0647\u0631\u062C\u0627\u0646\u2026", "dir", "rtl"], ["formControlName", "type"], ["formControlName", "status"], ["value", "draft"], ["value", "published"], ["formControlName", "startDate", "type", "date"], ["formControlName", "endDate", "type", "date"], ["formControlName", "city", "placeholder", "Marrakech"], ["formControlName", "region", "placeholder", "Marrakech-Safi"], ["formControlName", "descFr", "rows", "3", "placeholder", "Description de l'\xE9v\xE9nement\u2026"], [1, "alert", "error"], [1, "modal-footer"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-save", 3, "disabled"], [1, "spinner"]], template: function EventsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Gestion des \xC9v\xE9nements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function EventsListComponent_Template_button_click_7_listener() {
          return ctx.openForm();
        });
        \u0275\u0275text(8, "+ Nouvel \xE9v\xE9nement");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "select", 5);
        \u0275\u0275listener("change", function EventsListComponent_Template_select_change_10_listener($event) {
          ctx.filterStatus.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementStart(11, "option", 6);
        \u0275\u0275text(12, "Tous les statuts");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(13, EventsListComponent_For_14_Template, 2, 2, "option", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "select", 5);
        \u0275\u0275listener("change", function EventsListComponent_Template_select_change_15_listener($event) {
          ctx.filterType.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementStart(16, "option", 6);
        \u0275\u0275text(17, "Tous les types");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(18, EventsListComponent_For_19_Template, 2, 2, "option", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, EventsListComponent_Conditional_20_Template, 2, 1, "div", 8)(21, EventsListComponent_Conditional_21_Template, 2, 0, "div", 9)(22, EventsListComponent_Conditional_22_Template, 2, 0)(23, EventsListComponent_Conditional_23_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, EventsListComponent_Conditional_24_Template, 63, 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.total(), " \xE9v\xE9nement(s)");
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.statusEntries);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.eventTypes);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(20, ctx.successMsg() ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(21, ctx.isLoading() ? 21 : ctx.events().length === 0 ? 22 : 23);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(24, ctx.formOpen() ? 24 : -1);
      }
    }, dependencies: [CommonModule, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.events-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 0.2rem;\n}\n.sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-add[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  flex-wrap: wrap;\n}\n.fs[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.625rem;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.82rem;\n  outline: none;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.875rem;\n  border-radius: 8px;\n  font-size: 0.84rem;\n  font-weight: 500;\n}\n.alert.success[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.08);\n  border: 1px solid rgba(39, 174, 96, 0.2);\n  color: #27ae60;\n}\n.alert.error[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.08);\n  border: 1px solid rgba(231, 76, 60, 0.2);\n  color: #e74c3c;\n}\n.loading[_ngcontent-%COMP%], .empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n.events-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1rem;\n}\n.event-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.event-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.type-badge[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.625rem;\n  background: rgba(139, 69, 19, 0.07);\n  color: #8B4513;\n  border-radius: 6px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.status-pill[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.55rem;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.status-pill.draft[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-muted);\n}\n.status-pill.published[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n.status-pill.cancelled[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  color: #e74c3c;\n}\n.status-pill.archived[_ngcontent-%COMP%] {\n  background: rgba(52, 73, 94, 0.08);\n  color: #52616b;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  flex-wrap: wrap;\n}\n.event-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.25rem;\n}\n.act-btn[_ngcontent-%COMP%] {\n  padding: 0.28rem 0.7rem;\n  border-radius: 6px;\n  border: 1px solid;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: transparent;\n}\n.act-btn.edit[_ngcontent-%COMP%] {\n  border-color: rgba(52, 152, 219, 0.3);\n  color: #3498db;\n}\n.act-btn.publish[_ngcontent-%COMP%] {\n  border-color: rgba(39, 174, 96, 0.3);\n  color: #27ae60;\n}\n.act-btn.cancel[_ngcontent-%COMP%] {\n  border-color: rgba(231, 76, 60, 0.3);\n  color: #e74c3c;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 50;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(560px, 95vw);\n  max-height: 85vh;\n  overflow-y: auto;\n  background: var(--card-bg);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 51;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--card-border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n}\n.close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.modal-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.875rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.8rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n  font-family: inherit;\n}\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--card-border);\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.875rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--card-border);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=events-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsListComponent, { className: "EventsListComponent", filePath: "src\\app\\features\\admin\\events\\events-list.component.ts", lineNumber: 222 });
})();
export {
  EventsListComponent
};
//# sourceMappingURL=chunk-AFBDZA5R.js.map
