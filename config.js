System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
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
    ]
  }
});

System.config({
  "depCache": {
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
  }
});

System.config({
  "map": {
    "ThisIsDallas/Simple-Grid": "github:ThisIsDallas/Simple-Grid@master",
    "css-toggle-switch": "npm:css-toggle-switch@4.0.2",
    "d3": "github:mbostock/d3@3.5.16",
    "novus/nvd3": "github:novus/nvd3@1.8.2",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88"
  }
});

