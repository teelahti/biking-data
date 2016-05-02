System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "dist/build": [
      "app/dictionary",
      "github:mbostock/d3@3.5.16/d3",
      "app/listoperations",
      "github:novus/nvd3@1.8.2/build/nv.d3",
      "app/vis",
      "github:mbostock/d3@3.5.16",
      "github:novus/nvd3@1.8.2",
      "app/vis.kmtimeline",
      "app/vis.totalKMDistribution",
      "app/app"
    ],
    "dist/build.js": [
      "app/app.js",
      "npm:sheetrock@1.0.1.js",
      "npm:sheetrock@1.0.1/src/sheetrock.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js",
      "app/vis.js",
      "github:mbostock/d3@3.5.16.js",
      "github:mbostock/d3@3.5.16/d3.js",
      "app/vis.kmtimeline.js",
      "github:novus/nvd3@1.8.2.js",
      "github:novus/nvd3@1.8.2/build/nv.d3.js",
      "app/vis.totalKMDistribution.js",
      "app/listoperations.js",
      "app/dictionary.js"
    ]
  },

  depCache: {
    "app/vis": [
      "github:mbostock/d3@3.5.16"
    ],
    "github:mbostock/d3@3.5.16": [
      "github:mbostock/d3@3.5.16/d3"
    ],
    "github:novus/nvd3@1.8.2": [
      "github:novus/nvd3@1.8.2/build/nv.d3"
    ],
    "app/vis.kmtimeline": [
      "github:mbostock/d3@3.5.16",
      "github:novus/nvd3@1.8.2",
      "app/vis"
    ],
    "app/vis.totalKMDistribution": [
      "app/listoperations",
      "github:mbostock/d3@3.5.16",
      "github:novus/nvd3@1.8.2"
    ],
    "app/app": [
      "app/dictionary",
      "github:mbostock/d3@3.5.16",
      "app/vis.totalKMDistribution",
      "app/vis.kmtimeline",
      "app/vis"
    ]
  },

  map: {
    "ThisIsDallas/Simple-Grid": "github:ThisIsDallas/Simple-Grid@master",
    "css-toggle-switch": "npm:css-toggle-switch@4.0.2",
    "d3": "github:mbostock/d3@3.5.16",
    "novus/nvd3": "github:novus/nvd3@1.8.2",
    "sheetrock": "npm:sheetrock@1.0.1",
    "traceur": "github:jmcriffey/bower-traceur@0.0.93",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:sheetrock@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
