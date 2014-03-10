# name: shared-edit
# about: allow other users to co-edit your post
# version: 0.1
# authors: Benjamin Kampmann

register_asset "javascripts/shared_edit_menu.js", :client_side
register_asset "javascripts/shared_edit_controller.js", :client_side
register_asset "javascripts/shared_edit.js.handlebars", :client_side

register_css <<CSS

nav.post-controls button.shared-edit {
  float: right;
}
CSS

require_dependency 'guardian'

module MyGuardian

  def has_shared_edit(post)
    editors = ::PluginStore.get("shared-edit", "#{post.id}_editors")
    editors and editors.include? @user.id
  end

  def can_edit_post?(post)
    # We override the original Guardian method to figure out our own
    return super(post) || has_shared_edit(post)
  end
end

Guardian.send :include, MyGuardian