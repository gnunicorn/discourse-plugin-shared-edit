(function() {

  Discourse.PostMenuView.reopen({

    shouldRerenderShareEditButton: Discourse.View.renderIfChanged("post.cooked"),

    renderShareEdit: function(post, buffer) {
      var current_user = Discourse.User.current();
      if (!current_user || !current_user.staff || current_user.id != post.user_id) return;
      // we only display the feature to the original author and admins
      buffer.push("<button data-action=\"shareEdit\" class='share-edit'><i class=\"fa fa-users\"></i> <i class=\"fa fa-pencil\"></i></button>");
    },

    clickShareEdit: function() {
      Discourse.Route.showModal(this, 'shareEdit'), this.modelFor('topic'));
    }

  });

})();
