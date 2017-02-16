sap.ui.define(['sap/ui/commons/TextView', 'sap/ui/core/Fragment'],
	function(TextView, Fragment) {
	"use strict";

	sap.ui.jsfragment("samples.components.ext.customer.CustomTextViewFrag", {

		createContent : function(oController) {
			var oTextView = new TextView("iHaveCausedDestruction", {
				text : "Hello World"
			});
			return oTextView;
		}

	});

});
