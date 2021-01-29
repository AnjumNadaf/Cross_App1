/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"CA1/Cross_App1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});