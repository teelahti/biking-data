System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  },
  "bundles": {
    "dist/build": [
      "app/dictionary",
      "github:mbostock/d3@3.5.5/d3",
      "app/listoperations",
      "github:novus/nvd3@1.7.1/build/nv.d3",
      "app/vis",
      "github:mbostock/d3@3.5.5",
      "github:novus/nvd3@1.7.1",
      "app/vis.kmtimeline",
      "app/vis.totalKMDistribution",
      "app/app"
    ]
  }
});

System.config({
  "depCache": {
    "app/vis": [
      "github:mbostock/d3@3.5.5"
    ],
    "github:mbostock/d3@3.5.5": [
      "github:mbostock/d3@3.5.5/d3"
    ],
    "github:novus/nvd3@1.7.1": [
      "github:novus/nvd3@1.7.1/build/nv.d3"
    ],
    "app/vis.kmtimeline": [
      "github:mbostock/d3@3.5.5",
      "github:novus/nvd3@1.7.1",
      "app/vis"
    ],
    "app/vis.totalKMDistribution": [
      "app/listoperations",
      "github:mbostock/d3@3.5.5",
      "github:novus/nvd3@1.7.1"
    ],
    "app/app": [
      "app/dictionary",
      "github:mbostock/d3@3.5.5",
      "app/vis.totalKMDistribution",
      "app/vis.kmtimeline",
      "app/vis"
    ]
  }
});

System.config({
  "map": {
    "ThisIsDallas/Simple-Grid": "github:ThisIsDallas/Simple-Grid@master",
    "d3": "github:mbostock/d3@3.5.5",
    "novus/nvd3": "github:novus/nvd3@1.7.1",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88"
  }
});

