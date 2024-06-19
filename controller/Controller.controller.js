sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast',
    'sap/ui/thirdparty/jquery',
  ],
  function (Controller, JSONModel, MessageToast, jQuery) {
    'use strict';
    const c = Controller.extend('my.app.controller.Controller', {
      onInit: function () {
       
      },
    });
    return c;
  }
);
