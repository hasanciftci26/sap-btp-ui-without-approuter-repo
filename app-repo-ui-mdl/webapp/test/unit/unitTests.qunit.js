/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ntttest/app-repo-ui-mdl/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
