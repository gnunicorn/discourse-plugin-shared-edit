
Discourse.SharedEditView = Discourse.ModalBodyView.extend({

});

Discourse.SharedEditController = Discourse.ObjectController.extend(Discourse.ModalFunctionality, {

  actions: {
    save: function(){
      var usernames = this.get('usernames');
      this.set("loading", true);
      return Discourse.ajax("/shared_edit", {
        type: "PUT",
        data: {post_id: this.get('model.id'), usernames: usernames}
      }).then(function(newJSON) {
        this.set("loading", false);
        this.send('closeModal');
      }.bind(this));
    }
  },

  onShow: function() {
    this.set("loading", true);
    Discourse.ajax("/shared_edit", {
      type: "GET",
      data: {post_id: this.get('model.id')}
    }).then(function(newJSON) {
      this.set("usernames", newJSON.shared_edit || []);
      this.set("loading", false);
    }.bind(this));
  }
});


Discourse.TopicRoute.reopen({
  actions: {
    showSharedEdit: function(post){
      Discourse.Route.showModal(this, 'sharedEdit', post);
    }
  }
});

