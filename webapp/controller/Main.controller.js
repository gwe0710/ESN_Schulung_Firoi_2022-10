sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/core/routing/History"
],

    function (Controller, MessageBox, JSONModel, Fragment, History) {
        "use strict";

        return Controller.extend("at.clouddna.student06.zhoui5.controller.Main", {

            onInit: function () {

            },

            _showCustomerFragment: function (sFragmentName) {
                let oPage = this.getView().byId("page");

                oPage.removeAllContent();

                if (this._fragmentList[sFragmentName]) {
                    oPage.insertContent(this._fragmentList[sFragmentName]);
                } else {
                    Fragment.load({
                        id: this.getView().createId(sFragmentName),
                        name: "at.clouddna.student06.zhoui5.view.fragment." + sFragmentName,
                        controller: this
                    }).then(function (oFragment) {
                        this._fragmentList[sFragmentName] = oFragment;
                        oPage.insertContent(this._fragmentList[sFragmentName]);
                    }.bind(this));
                }
            },

            onCreatePressed: function () {
                let oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("CreateCustomer", null, false);
            },


            onListItemPressed: function (oEvent) {
                let sPath = oEvent.getSource().getBindingContext().getPath();
                let oRouter = this.getOwnerComponent().getRouter();
                debugger;
                oRouter.navTo("Customer", {
                    path: encodeURIComponent(sPath)
                });
            },

            onDeleteButtonPressed: function (oEvent) {
                let oModel = this.getView().getModel();
                let oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

                let oSource = oEvent.getSource();
                let sPath = oSource.getBindingContext().getPath();

                //debugger;

                _delete(sPath);

            },

            _delete: function (sPath) {
                let oModel = this.getView().getModel();

                MessageBox.warning(oResourceBundle.getText("sureToDeleteQuestion"), {
                    title: oResourceBundle.getText("sureToDeleteTitle"),
                    actions: [MessageBox.Action.YES, MessageBox.Action.NO],
                    emphasizedAction: MessageBox.Action.YES,
                    onClose: function (oAction) {

                        if (MessageBox.Action.YES === oAction) {
                            oModel.remove(sPath);
                        }
                    }
                });
            }

        });
    });