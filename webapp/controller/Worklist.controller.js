sap.ui.define([
	"materialcopy/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"materialcopy/model/formatter",
	"sap/ui/core/util/MockServer",
	"sap/m/MessageBox",
	"sap/ui/comp/smartfilterbar/SelectOption",
	"sap/ui/export/Spreadsheet"
], function (
	BaseController,
	JSONModel,
	formatter,
	MockServer,
	MessageBox,
	SelectOption,
	Spreadsheet) {

	"use strict";

	return BaseController.extend("materialcopy.controller.Worklist", {

		formatter: formatter,
		
		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */
		/**
		 * @public
		 */
		onInit: function () {
			var oModel = this.getOwnerComponent().getModel();
			oModel.setSizeLimit(999);
		}

	});
});