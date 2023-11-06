sap.ui.define([
               "sap/ui/core/format/NumberFormat"
  ] , function (NumberFormat) {
    "use strict";

    return {

		   formatNumberBrazil : function(pValue){
				  var oNumberFormat = NumberFormat.getFloatInstance({
																	  maxFractionDigits: 3,
																	  groupingEnabled: true,
																	  groupingSeparator: ".",
																	  decimalSeparator: ","
				  													});
				  
				  if(isNaN(pValue)){
					  pValue = 0;
				  }
				  
				  var text = oNumberFormat.format(pValue);
				  return text;
						 
			}


    };

  }
);