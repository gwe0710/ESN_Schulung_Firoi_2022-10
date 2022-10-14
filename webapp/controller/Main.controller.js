sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
    ],

    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("at.clouddna.student06.zhoui5.controller.Main", {

            onInit: function () {

            },

            onDeleteButtonPressed: function(oEvent){
                let oModel = this.getView().getModel();
                let oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            
                let oSource = oEvent.getSource();
                let sPath = oSource.getBindingContext().getPath();
                
                //debugger;

                _delete( sPath );

            },

            _delete: function (sPath) {
                let oModel = this.getView().getModel();
                
                MessageBox.warning(oResourceBundle.getText("sureToDeleteQuestion"), {
                    title: oResourceBundle.getText("sureToDeleteTitle"),
                    actions: [MessageBox.Action.YES, MessageBox.Action.NO],
                    emphasizedAction: MessageBox.Action.YES,
                    onClose: function(oAction){
                       
                        if(MessageBox.Action.YES === oAction){
                            oModel.remove(sPath);
                        }
                    }
                });            }

        });
    });