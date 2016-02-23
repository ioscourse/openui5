/*!
 * ${copyright}
 */

//Provides default renderer for control sap.ui.table.TreeTable
sap.ui.define(['jquery.sap.global', 'sap/ui/core/Renderer', './TableRenderer'],
	function(jQuery, Renderer, TableRenderer) {
	"use strict";


	/**
	 * TreeTable renderer.
	 * @namespace
	 */
	var TreeTableRenderer = Renderer.extend(TableRenderer);


	TreeTableRenderer.renderTableCellControl = function(rm, oTable, oCell, iCellIndex) {
		if (oTable.isTreeBinding("rows") && iCellIndex === 0 && !oTable.getUseGroupMode()) {
			var oRow = oCell.getParent();
			var oAttributes = oTable._getTreeIconAttributes(oRow);

			rm.write("<span");
			rm.addClass("sapUiTableTreeIcon");
			rm.addClass(oCell.getParent()._sTreeIconClass);
			rm.writeClasses();
			rm.addStyle.apply(rm, oTable._getLevelIndentCSS(oRow));
			rm.writeStyles();
			rm.writeAttribute("tabindex", -1);
			for (var sAttributeName in oAttributes) {
				rm.writeAttribute(sAttributeName, oAttributes[sAttributeName]);
			}
			rm.write(">&nbsp;</span>");
		}
		rm.renderControl(oCell);
	};


	return TreeTableRenderer;

}, /* bExport= */ true);
