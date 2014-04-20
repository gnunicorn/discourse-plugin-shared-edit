
Discourse.SharedEditView = Discourse.ModalBodyView.extend({

});

Discourse.SharedEditController = Discourse.ObjectController.extend(Discourse.ModalFunctionality, {

  trustLevelOptions: [
    { name: I18n.t("shared_edit.trust_level_options.mods_and_admins"), value: 99},
    { name: I18n.t("shared_edit.trust_level_options.trust_level_4"), value: 4},
    { name: I18n.t("shared_edit.trust_level_options.trust_level_3"), value: 3},
    { name: I18n.t("shared_edit.trust_level_options.trust_level_2"), value: 2},
    { name: I18n.t("shared_edit.trust_level_options.trust_level_1"), value: 1},
    { name: I18n.t("shared_edit.trust_level_options.everyone"), value: 0}
  ],

  actions: {
    save: function(){
      var usernames = this.get('usernames'),
          trust_level = this.get('trust_level');
      this.set("loading", true);
      return Discourse.ajax("/shared_edit", {
        type: "PUT",
        data: {post_id: this.get('model.id'),
               usernames: usernames,
               trust_level: trust_level}
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
      console.log(newJSON);
      this.set("usernames", newJSON.usernames || []);
      this.set("trust_level", newJSON.trust_level || -1);
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

