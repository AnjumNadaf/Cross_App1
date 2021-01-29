sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("CA1.Cross_App1.controller.View1", {
		onInit: function () {

		},
		onPress:function(){
			// var Sematic1 = "semantic1";

			var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation"); // get a handle on the global XAppNav service
			var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({

				target: {
					semanticObject: "Cross_App2",
					action: "Display"
				},
				params: {
					// "Sematic1ID": Sematic1,
					"name": "Anjum"

				}
			})) || ""; // generate the Hash to display a Sematic1
			oCrossAppNavigator.toExternal({
				target: {
					shellHash: hash
				}
			});
		}
	});
});