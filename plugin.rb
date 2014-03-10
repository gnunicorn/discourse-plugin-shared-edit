# name: shared-edit
# about: allow other users to co-edit your post
# version: 0.1
# authors: Benjamin Kampmann

register_asset "javascripts/share_edits_menu.js", :client_side

register_css <<CSS

nav.post-controls button.share-edit {
  float: right;
}
CSS

require_dependency 'guardian'

module MyGuardian

  def can_share_edit(post)
    editors = ::PluginStore.get("shared-edit", "#{post.id}_editors")
    editors and editors.include? @user.id
  end

  def can_edit_post?(post)
    # We override the original Guardian method to figure out our own
    return super(post) || can_shared_edit(post)
  end
end

Guardian.send :include, MyGuardian