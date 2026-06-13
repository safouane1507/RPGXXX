import {
  ThemeService
} from "./chunk-JRQKPO2B.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet
} from "./chunk-PTMK54BH.js";
import "./chunk-YMY25RDJ.js";
import {
  CommonModule,
  filter,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ELZIBL4.js";

// src/app/features/admin/layout/sidebar/sidebar.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.route;
function SidebarComponent_For_11_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22)(1, "a", 23);
    \u0275\u0275element(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.isActive(child_r4.route));
    \u0275\u0275property("routerLink", child_r4.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", child_r4.label, " ");
  }
}
function SidebarComponent_For_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "button", 16);
    \u0275\u0275listener("click", function SidebarComponent_For_11_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleGroup(item_r2.id));
    });
    \u0275\u0275element(2, "span", 17);
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 19);
    \u0275\u0275element(6, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "ul", 21);
    \u0275\u0275repeaterCreate(8, SidebarComponent_For_11_Conditional_0_For_9_Template, 4, 4, "li", 22, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r2.isGroupOpen(item_r2.id));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r2.isGroupOpen(item_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r2.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r2.isGroupOpen(item_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("open", ctx_r2.isGroupOpen(item_r2.id));
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r2.children);
  }
}
function SidebarComponent_For_11_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.badge);
  }
}
function SidebarComponent_For_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22)(1, "a", 25);
    \u0275\u0275element(2, "span", 17);
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SidebarComponent_For_11_Conditional_1_Conditional_5_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.isActive(item_r2.route));
    \u0275\u0275property("routerLink", item_r2.route);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r2.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, item_r2.badge ? 5 : -1);
  }
}
function SidebarComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SidebarComponent_For_11_Conditional_0_Template, 10, 9, "li", 14)(1, SidebarComponent_For_11_Conditional_1_Template, 6, 6);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275conditional(0, item_r2.children ? 0 : 1);
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor() {
    this.router = inject(Router);
    this.openGroup = signal(null);
    this.menuItems = [
      {
        id: "dashboard",
        label: "Tableau de bord",
        route: "/admin/dashboard",
        icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/></svg>`
      },
      {
        id: "products",
        label: "Gestion des produits",
        route: "/admin/products",
        icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" stroke-width="2"/><polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" stroke-width="2"/><line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" stroke-width="2"/></svg>`
      },
      {
        id: "services",
        label: "Gestion des services",
        route: "/admin/services",
        icon: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" stroke="currentColor" stroke-width="2"/></svg>`
      },
      {
        id: "cooperatives",
        label: "Gestion des coop\xE9ratives",
        icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2"/><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2"/></svg>`,
        children: [
          { label: "E-Boutiques", route: "/admin/cooperatives/boutiques" },
          { label: "Annuaires", route: "/admin/annuaire" },
          { label: "Fournisseurs", route: "/admin/cooperatives/fournisseurs" },
          { label: "Instances Annuaire", route: "/admin/cooperatives/instances" },
          { label: "FAQ Coop\xE9ratives", route: "/admin/cooperatives/faq" }
        ]
      },
      {
        id: "users",
        label: "Gestion des utilisateurs Pro",
        route: "/admin/users",
        icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2"/></svg>`
      },
      {
        id: "payments",
        label: "Gestion des paiements",
        route: "/admin/payments",
        icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" stroke-width="2"/></svg>`
      },
      {
        id: "cms",
        label: "Gestion de contenu (CMS)",
        icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2"/><polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2"/></svg>`,
        children: [
          { label: "Conseils pratiques", route: "/admin/cms/conseils" },
          { label: "\xC0 propos", route: "/admin/cms/about" },
          { label: "Annonces", route: "/admin/cms/annonces" },
          { label: "Articles / Blogs", route: "/admin/cms" }
        ]
      },
      {
        id: "events",
        label: "Gestion des \xE9v\xE9nements",
        route: "/admin/events",
        icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2"/><line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2"/><line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2"/></svg>`
      },
      {
        id: "tourism",
        label: "Gestion du Tourisme",
        route: "/admin/tourism",
        icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="2"/></svg>`
      },
      {
        id: "complaints",
        label: "R\xE9clamations",
        route: "/admin/complaints",
        icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2"/></svg>`
      }
    ];
  }
  toggleGroup(id) {
    this.openGroup.update((v) => v === id ? null : id);
  }
  isGroupOpen(id) {
    return this.openGroup() === id;
  }
  isActive(route) {
    return this.router.url.startsWith(route);
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(t) {
      return new (t || _SidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-admin-sidebar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 0, consts: [[1, "sidebar"], [1, "sidebar-brand"], ["src", "assets/logo/logo1-1.png", "alt", "KENZ BLADI", 1, "sidebar-logo"], [1, "sidebar-brand-text"], [1, "brand-ar"], [1, "brand-sub"], ["role", "navigation", 1, "sidebar-nav"], ["role", "menu"], [1, "sidebar-footer"], ["routerLink", "/", "target", "_blank", 1, "view-site-btn"], ["viewBox", "0 0 24 24", "fill", "none", "width", "16", "height", "16"], ["d", "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,3 21,3 21,9", "stroke", "currentColor", "stroke-width", "2"], ["x1", "10", "y1", "14", "x2", "21", "y2", "3", "stroke", "currentColor", "stroke-width", "2"], ["role", "none", 1, "menu-group", 3, "open"], ["role", "none", 1, "menu-group"], ["role", "menuitem", 1, "menu-item", "group-toggle", 3, "click"], [1, "menu-icon", 3, "innerHTML"], [1, "menu-label"], ["viewBox", "0 0 24 24", "fill", "none", 1, "chevron"], ["d", "M9 18l6-6-6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["role", "menu", 1, "submenu"], ["role", "none"], ["role", "menuitem", 1, "submenu-item", 3, "routerLink"], [1, "submenu-dot"], ["role", "menuitem", 1, "menu-item", 3, "routerLink"], [1, "badge"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "\u0643\u0646\u0632 \u0628\u0644\u0627\u062F\u064A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, "Administration");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "nav", 6)(9, "ul", 7);
        \u0275\u0275repeaterCreate(10, SidebarComponent_For_11_Template, 2, 1, null, null, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "a", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(14, "svg", 10);
        \u0275\u0275element(15, "path", 11)(16, "polyline", 12)(17, "line", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " Voir le site client ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.menuItems);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ['\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 100vh;\n  position: sticky;\n  top: 0;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  background: var(--sidebar-bg, #1a1a2e);\n  color: var(--sidebar-text, #e0e0e0);\n  overflow: hidden;\n  z-index: 50;\n  transition: width 0.2s ease;\n}\n[_ngcontent-%COMP%]:root[data-theme=light]   .sidebar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-right: 1px solid #e8e8e8;\n  --sidebar-text: #2c2c2c;\n  --sidebar-hover: rgba(139, 69, 19, 0.05);\n  --sidebar-active-bg: rgba(139, 69, 19, 0.08);\n  --sidebar-active-text: #8B4513;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .sidebar[_ngcontent-%COMP%] {\n  background: #111827;\n  --sidebar-text: #d1d5db;\n  --sidebar-hover: rgba(255,255,255,0.04);\n  --sidebar-active-bg: rgba(139, 69, 19, 0.18);\n  --sidebar-active-text: #d4af6a;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.25rem 1rem;\n  border-bottom: 1px solid var(--sidebar-border, rgba(255, 255, 255, 0.06));\n  flex-shrink: 0;\n}\n[_ngcontent-%COMP%]:root[data-theme=light]   .sidebar-brand[_ngcontent-%COMP%] {\n  border-bottom-color: #e8e8e8;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n  flex-shrink: 0;\n}\n.sidebar-brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.3;\n}\n.sidebar-brand-text[_ngcontent-%COMP%]   .brand-ar[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #d4af6a;\n  font-family:\n    "Cairo",\n    "Amiri",\n    serif;\n}\n.sidebar-brand-text[_ngcontent-%COMP%]   .brand-sub[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  opacity: 0.6;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0.75rem 0;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n}\n[_ngcontent-%COMP%]:root[data-theme=light]   .sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.1);\n}\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.65rem 1rem;\n  margin: 0 0.5rem;\n  border-radius: 8px;\n  color: var(--sidebar-text);\n  font-size: 0.85rem;\n  font-weight: 500;\n  text-decoration: none;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  width: calc(100% - 1rem);\n  text-align: start;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: var(--sidebar-hover);\n  color: var(--sidebar-active-text, #d4af6a);\n}\n.menu-item.active[_ngcontent-%COMP%] {\n  background: var(--sidebar-active-bg);\n  color: var(--sidebar-active-text, #d4af6a);\n  font-weight: 600;\n}\n.menu-item[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.85;\n}\n.menu-item[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]     svg {\n  width: 100%;\n  height: 100%;\n}\n.menu-item[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.menu-item[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  transition: transform 0.2s ease;\n  opacity: 0.6;\n}\n.menu-item[_ngcontent-%COMP%]   .chevron.rotated[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.badge[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 0.1rem 0.4rem;\n  border-radius: 10px;\n  min-width: 18px;\n  text-align: center;\n}\n.submenu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n}\n.submenu.open[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n.submenu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem 0.5rem 2.75rem;\n  color: var(--sidebar-text);\n  font-size: 0.82rem;\n  text-decoration: none;\n  transition: color 0.2s ease, background 0.2s ease;\n  border-radius: 6px;\n  margin: 0 0.5rem;\n}\n.submenu-item[_ngcontent-%COMP%]:hover {\n  color: var(--sidebar-active-text, #d4af6a);\n  background: var(--sidebar-hover);\n}\n.submenu-item.active[_ngcontent-%COMP%] {\n  color: var(--sidebar-active-text, #d4af6a);\n  font-weight: 600;\n}\n.submenu-item[_ngcontent-%COMP%]   .submenu-dot[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0.5;\n  flex-shrink: 0;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid var(--sidebar-border, rgba(255, 255, 255, 0.06));\n  flex-shrink: 0;\n}\n[_ngcontent-%COMP%]:root[data-theme=light]   .sidebar-footer[_ngcontent-%COMP%] {\n  border-top-color: #e8e8e8;\n}\n.view-site-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  color: var(--sidebar-text);\n  font-size: 0.8rem;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  border: 1px solid var(--sidebar-border, rgba(255, 255, 255, 0.1));\n}\n.view-site-btn[_ngcontent-%COMP%]:hover {\n  background: var(--sidebar-hover);\n  color: var(--sidebar-active-text, #d4af6a);\n  border-color: currentColor;\n}\n[_ngcontent-%COMP%]:root[data-theme=light]   .view-site-btn[_ngcontent-%COMP%] {\n  border-color: #e8e8e8;\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src\\app\\features\\admin\\layout\\sidebar\\sidebar.component.ts", lineNumber: 27 });
})();

// src/app/features/admin/layout/admin-layout.component.ts
function AdminLayoutComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "circle", 17)(2, "path", 18);
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 19);
    \u0275\u0275elementEnd();
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  constructor() {
    this.router = inject(Router);
    this.themeService = inject(ThemeService);
    this.isDarkMode = this.themeService.isDarkMode;
    this.isSidebarOpen = signal(true);
    this.pageTitle = signal("Tableau de bord");
    this.titleMap = {
      "/admin/dashboard": "Tableau de bord",
      "/admin/products": "Gestion des produits",
      "/admin/services": "Gestion des services",
      "/admin/cooperatives": "Gestion des coop\xE9ratives",
      "/admin/annuaire": "Gestion des annuaires",
      "/admin/users": "Gestion des utilisateurs Pro",
      "/admin/payments": "Gestion des paiements",
      "/admin/cms": "Gestion de contenu",
      "/admin/events": "Gestion des \xE9v\xE9nements",
      "/admin/tourism": "Gestion du Tourisme",
      "/admin/complaints": "R\xE9clamations"
    };
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const url = e.urlAfterRedirects;
      const match = Object.keys(this.titleMap).find((k) => url.startsWith(k));
      this.pageTitle.set(match ? this.titleMap[match] : "Administration");
    });
  }
  toggleSidebar() {
    this.isSidebarOpen.update((v) => !v);
  }
  toggleTheme() {
    this.themeService.toggle();
  }
  static {
    this.\u0275fac = function AdminLayoutComponent_Factory(t) {
      return new (t || _AdminLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 4, consts: [[1, "admin-shell"], [1, "admin-main"], [1, "admin-topbar"], [1, "topbar-left"], ["aria-label", "Toggle sidebar", 1, "sidebar-toggle", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "width", "20", "height", "20"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "page-title"], [1, "topbar-right"], [1, "brand-pill"], ["src", "assets/logo/logo1-1.png", "alt", "", 1, "pill-logo"], ["aria-label", "Toggle theme", 1, "icon-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "width", "18", "height", "18"], ["title", "Administrateur", 1, "admin-avatar"], [1, "admin-content"], ["cx", "12", "cy", "12", "r", "5", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function AdminLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-admin-sidebar");
        \u0275\u0275elementStart(2, "div", 1)(3, "header", 2)(4, "div", 3)(5, "button", 4);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_5_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 5);
        \u0275\u0275element(7, "line", 6)(8, "line", 7)(9, "line", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "h1", 9);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 10)(13, "span", 11);
        \u0275\u0275element(14, "img", 12);
        \u0275\u0275text(15, " KENZ BLADI ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 13);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_16_listener() {
          return ctx.toggleTheme();
        });
        \u0275\u0275template(17, AdminLayoutComponent_Conditional_17_Template, 3, 0, ":svg:svg", 14)(18, AdminLayoutComponent_Conditional_18_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 15);
        \u0275\u0275text(20, "A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "main", 16);
        \u0275\u0275element(22, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("sidebar-collapsed", !ctx.isSidebarOpen());
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.pageTitle());
        \u0275\u0275advance(6);
        \u0275\u0275conditional(17, ctx.isDarkMode() ? 17 : 18);
      }
    }, dependencies: [CommonModule, RouterModule, RouterOutlet, SidebarComponent], styles: ["\n\n.admin-shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: var(--admin-bg, #f4f6f9);\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .admin-shell[_ngcontent-%COMP%] {\n  --admin-bg: #0f1117;\n}\n[_ngcontent-%COMP%]:root[data-theme=light]   .admin-shell[_ngcontent-%COMP%] {\n  --admin-bg: #f4f6f9;\n}\n.admin-shell[_ngcontent-%COMP%]   app-admin-sidebar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 260px;\n  transition: width 0.25s ease;\n}\n.admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   app-admin-sidebar[_ngcontent-%COMP%] {\n  width: 0;\n  overflow: hidden;\n}\n.admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   .admin-main[_ngcontent-%COMP%] {\n  margin-inline-start: 0;\n}\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n}\n.admin-topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n  background: var(--topbar-bg, #fff);\n  border-bottom: 1px solid var(--topbar-border, #e8e8e8);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .admin-topbar[_ngcontent-%COMP%] {\n  background: #1a1a2e;\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.topbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.sidebar-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  color: var(--text-muted, #666);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.sidebar-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 69, 19, 0.08);\n  color: #8B4513;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: var(--text-primary, #1a1a1a);\n  margin: 0;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .page-title[_ngcontent-%COMP%] {\n  color: #f0f0f0;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.brand-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.25rem 0.75rem;\n  background: rgba(139, 69, 19, 0.07);\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #8B4513;\n  letter-spacing: 0.05em;\n}\n.brand-pill[_ngcontent-%COMP%]   .pill-logo[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  object-fit: contain;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--topbar-border, #e8e8e8);\n  background: transparent;\n  border-radius: 8px;\n  color: var(--text-muted, #666);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .icon-btn[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  color: #9ca3af;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 69, 19, 0.08);\n  color: #8B4513;\n  border-color: #8B4513;\n}\n.admin-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #8B4513,\n      #d4af6a);\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.admin-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.75rem;\n  overflow-y: auto;\n  height: 0;\n}\n@media (max-width: 768px) {\n  .admin-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=admin-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src\\app\\features\\admin\\layout\\admin-layout.component.ts", lineNumber: 15 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-PM7CZYHH.js.map
