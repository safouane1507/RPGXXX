import {
  HttpClient,
  HttpParams
} from "./chunk-YMY25RDJ.js";
import {
  inject,
  ɵɵdefineInjectable
} from "./chunk-4ELZIBL4.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000/api",
  uploadsUrl: "http://localhost:3000/uploads",
  appName: "KENZ BLADI",
  appNameAr: "\u0643\u0646\u0632 \u0628\u0644\u0627\u062F\u064A",
  defaultLanguage: "fr",
  defaultTheme: "light"
};

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = environment.apiUrl;
  }
  get(path, params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        if (v !== void 0 && v !== null)
          httpParams = httpParams.set(k, String(v));
      });
    }
    return this.http.get(`${this.base}${path}`, { params: httpParams });
  }
  post(path, body) {
    return this.http.post(`${this.base}${path}`, body);
  }
  put(path, body) {
    return this.http.put(`${this.base}${path}`, body);
  }
  patch(path, body) {
    return this.http.patch(`${this.base}${path}`, body);
  }
  delete(path) {
    return this.http.delete(`${this.base}${path}`);
  }
  static {
    this.\u0275fac = function ApiService_Factory(t) {
      return new (t || _ApiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  ApiService
};
//# sourceMappingURL=chunk-V274X4JC.js.map
