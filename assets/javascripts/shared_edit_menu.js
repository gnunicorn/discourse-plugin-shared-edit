(function() {

  Discourse.PostMenuView.reopen({

    shouldRerenderSharedEditButton: Discourse.View.renderIfChanged("post.cooked"),

    renderSharedEdit: function(post, buffer) {
      var current_user = Discourse.User.current();
      if (!current_user || !current_user.staff || current_user.id != post.user_id) return;
      // we only display the feature to the original author and admins
      buffer.push("<button data-action=\"sharedEdit\" class='shared-edit'><i class=\"fa fa-users\"></i> <i class=\"fa fa-pencil\"></i></button>");
    },

    clickSharedEdit: function() {
      this.get('controller').send('showSharedEdit', this.get('post'));
    }

  });

})();
