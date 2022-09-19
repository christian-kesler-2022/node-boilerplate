var express = require('express');

module.exports = function (app) {
  app.use(express.static('./public'));

  // charts
  app.use('/devextreme/charts', express.static('./views/devextreme/charts'));
  // data grid
  app.use(
    '/devextreme/data-grid',
    express.static('./views/devextreme/madata-gridps')
  );
  // editors
  app.use('/devextreme/editors', express.static('./views/devextreme/editors'));
  // file management
  app.use(
    '/devextreme/file-management',
    express.static('./views/devextreme/file-management')
  );
  // gauges
  app.use('/devextreme/gauges', express.static('./views/devextreme/gauges'));
  // html editor
  app.use(
    '/devextreme/html-editor',
    express.static('./views/devextreme/html-editor')
  );
  // maps
  app.use('/devextreme/maps', express.static('./views/devextreme/maps'));
  // scheduler
  app.use(
    '/devextreme/scheduler',
    express.static('./views/devextreme/scheduler')
  );
};
