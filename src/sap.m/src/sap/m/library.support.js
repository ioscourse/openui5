/*!
 * ${copyright}
 */
/**
 * Adds support rules of the sap.m library to the support infrastructure.
 */
sap.ui.define(["jquery.sap.global", "sap/ui/support/library",
				"./rules/Button.support",
				"./rules/CheckBox.support",
				"./rules/Dialog.support",
				"./rules/Image.support",
				"./rules/Input.support",
				"./rules/Link.support",
				"./rules/Panel.support",
				"./rules/Select.support",
				"./rules/SelectDialog.support"],
	function(jQuery, SupportLib,
			ButtonSupport,
			CheckBoxSupport,
			DialogSupport,
			ImageSupport,
			InputSupport,
			LinkSupport,
			PanelSupport,
			SelectSupport,
			SelectDialogSupport) {
	"use strict";

	return {
		name: "sap.m",
		niceName: "UI5 Main Library",
		ruleset: [
			ButtonSupport,
			CheckBoxSupport,
			DialogSupport,
			ImageSupport,
			InputSupport,
			LinkSupport,
			PanelSupport,
			SelectSupport,
			SelectDialogSupport
		]
	};

}, true);
