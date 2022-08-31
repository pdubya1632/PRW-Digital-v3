var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/routes/about.tsx
var require_about = __commonJS({
  "app/routes/about.tsx"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-H62UBGOC.css";

// app/components/AppHeader.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), AppHeader = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "navigation navbar mt-6",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex-1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
        to: "/",
        className: "pl-5 text-2xl normal-case leading-6",
        children: [
          "Patrick",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 9,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "pl-2",
            children: "Richardson"
          }, void 0, !1, {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 10,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 11,
            columnNumber: 11
          }, this),
          "Wright"
        ]
      }, void 0, !0, {
        fileName: "app/components/AppHeader.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/AppHeader.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex-none",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        className: "menu menu-horizontal px-0 text-xl",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
              to: "/",
              children: "Work"
            }, void 0, !1, {
              fileName: "app/components/AppHeader.tsx",
              lineNumber: 18,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 17,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
              to: "/about",
              children: "About"
            }, void 0, !1, {
              fileName: "app/components/AppHeader.tsx",
              lineNumber: 21,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 20,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/AppHeader.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/AppHeader.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/AppHeader.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this);

// app/components/AppFooter.tsx
var import_react3 = require("@remix-run/react");

// app/components/icons.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function GithubIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    }, void 0, !1, {
      fileName: "app/components/icons.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/icons.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
function LinkedInIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    }, void 0, !1, {
      fileName: "app/components/icons.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/icons.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function TwitterIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    className: "fill-current",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
    }, void 0, !1, {
      fileName: "app/components/icons.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/icons.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/config/constants.ts
var SITE_AUTHOR = "Patrick Richardson Wright", SITE_DESCRIPTION = `The online portfolio of ${SITE_AUTHOR}, a Creative Developer`, SITE_EMAIL_ADDRESS = "hello@prw.digital", SITE_EMAIL_LINK = `mailto:${SITE_EMAIL_ADDRESS}`, SITE_TITLE = `${SITE_AUTHOR} - A Creative Developer`, SITE_UPDATED = new Date("2022-07-20");
var SITE_YEAR = new Date().getFullYear(), INTRO_BLURB = `I'm a Creative Developer with a love for great design, quality code,
          and intuitive user experiences.`, SOCIAL_GITHUB = "https://github.com/pdubya1632/", SOCIAL_LINKEDIN = "https://www.linkedin.com/in/patrick-wright-451535166/", SOCIAL_TWITTER = "https://twitter.com/wrightmight";

// app/components/AppFooter.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), AppFooter = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
  className: "footer items-center border-t-4 p-7",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "grid-flow-col items-center",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: [
          "Copyright \xA9 ",
          SITE_YEAR,
          " - hello@prw.digital"
        ]
      }, void 0, !0, {
        fileName: "app/components/AppFooter.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/AppFooter.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "grid-flow-col gap-4 md:place-self-center md:justify-self-end",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
          to: SOCIAL_GITHUB,
          children: GithubIcon()
        }, void 0, !1, {
          fileName: "app/components/AppFooter.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
          to: SOCIAL_LINKEDIN,
          children: LinkedInIcon()
        }, void 0, !1, {
          fileName: "app/components/AppFooter.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
          to: SOCIAL_TWITTER,
          children: TwitterIcon()
        }, void 0, !1, {
          fileName: "app/components/AppFooter.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/AppFooter.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/AppFooter.tsx",
  lineNumber: 12,
  columnNumber: 5
}, this);

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }], meta = () => ({
  charset: "utf-8",
  title: "PRW : Creative Developer",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppHeader, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppFooter, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
var route1 = __toESM(require_about());

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_react5 = require("@remix-run/react"), import_node = require("@remix-run/node");

// app/database/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/models/project.server.ts
async function getProjectList() {
  return prisma.project.findMany({
    select: {
      slug: !0,
      title: !0
    }
  });
}

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = async () => {
  let projects = await getProjectList();
  return (0, import_node.json)({ projects });
};
function Index() {
  let { projects } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "min-h-screen",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "my-7 p-7 text-4xl",
          children: INTRO_BLURB
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "grid grid-cols-3",
          children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "card flex-wrap",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {}, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 31,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "card-body p-7",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                    className: "card-title",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
                      to: project.slug,
                      prefetch: "intent",
                      children: [
                        project.title,
                        " \u2192"
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 34,
                      columnNumber: 19
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "card-actions justify-end",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "badge badge-outline",
                        children: "Development"
                      }, void 0, !1, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 39,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "badge badge-outline",
                        children: "Design"
                      }, void 0, !1, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 40,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/index.tsx",
                lineNumber: 32,
                columnNumber: 15
              }, this)
            ]
          }, project.slug, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this))
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 23,
    columnNumber: 4
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f4cf9fb3", entry: { module: "/build/entry.client-DIBARDUB.js", imports: ["/build/_shared/chunk-EMAV6OQX.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VE2WCZ46.js", imports: ["/build/_shared/chunk-WRD4C6IX.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-BIOFYLPQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-OOINFAE4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-F4CF9FB3.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
