sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("at.clouddna.student06.zhoui5.controller.Customer", {
            onInit: function () {

            },

            genderFormatter: function(sKey){
                let oView = this.getView();
                let oI18nModel = oView.getModel("i18n");
                let oResourceBundle = oI18nModel.getResourceBundle();
                let sText = oResourceBundle.getText(sKey);
                return sText;
            },

            OnSavePressed: function() {
                //alert("Alert")    ;
                let oView = this.getView();

                let oModel = oView.getModel();
                let oData = oModel.getData();


                //let oInputCustomerID = oView.byID("app_text_customerid")

                //let sCustomerID = oInputCustomerID.value

                console.log("Customerid: " & sCustomerID)

                MessageBox.success(JSON.stringify(oData))        

            }    

        });
    });
