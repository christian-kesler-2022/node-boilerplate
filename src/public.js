var express = require('express');

module.exports = function (app) {
  app.use(express.static('./public'));

  // charts
  app.use('/devextreme/charts', express.static('./view/devextreme/charts'));
  // data grid
  app.use(
    '/devextreme/data-grid',
    express.static('./view/devextreme/madata-gridps')
  );
  // editors
  app.use('/devextreme/editors', express.static('./view/devextreme/editors'));
  // file management
  app.use(
    '/devextreme/file-management',
    express.static('./view/devextreme/file-management')
  );
  // gauges
  app.use('/devextreme/gauges', express.static('./view/devextreme/gauges'));
  // html editor
  app.use(
    '/devextreme/html-editor',
    express.static('./view/devextreme/html-editor')
  );
  // maps
  app.use('/devextreme/maps', express.static('./view/devextreme/maps'));
  // scheduler
  app.use(
    '/devextreme/scheduler',
    express.static('./view/devextreme/scheduler')
  );
};
