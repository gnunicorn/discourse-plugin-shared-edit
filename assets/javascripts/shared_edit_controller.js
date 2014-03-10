/**
  The modal for sharing edit control with other users

  @class ShareEditsController
  @extends Discourse.Controller
  @namespace Discourse
  @uses Discourse.ModalFunctionality
  @module Discourse
**/

Discourse.SharedEditView = Discourse.ModalBodyView.extend({

});

Discourse.SharedEditController = Discourse.ObjectController.extend(Discourse.ModalFunctionality, {

  onShow: function() {
    this.set("loading", true);
    alert("Posting:" + this.get("model").id);
  }

});


Discourse.TopicRoute.reopen({
  actions: {
    showSharedEdit: function(post){
      Discourse.Route.showModal(this, 'sharedEdit', post);
    }
  }
});

