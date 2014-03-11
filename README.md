# Discourse Shared Edit Plugin

Adds button to every post to allow the author (and staff) to give the permission to edit this post to other users, too.

## Details

When the plugin got installed and properly added through the `post_menu` site setting, you'll be able to see this new button on the action bar of your posts:

![Button screenshot](https://raw.github.com/ligthyear/discourse-plugin-shared-edit/master/docs/the-new-shared-edit-button.png)

Clicking it brings up a popup showing the other users that editing was explictly shared with:

![Popup](https://raw.github.com/ligthyear/discourse-plugin-shared-edit/master/docs/shared-edit-popup.png)

To add another user, just start typing their username as you'd also do to mention them:

![adding Jatwood](https://raw.github.com/ligthyear/discourse-plugin-shared-edit/master/docs/adding-jatwood.png)

Which of course also works with group-aliases as you'd expect:

![Searching group](https://raw.github.com/ligthyear/discourse-plugin-shared-edit/master/docs/searching-for-group.png)

![With group](https://raw.github.com/ligthyear/discourse-plugin-shared-edit/master/docs/adding-group.png)

Once you are done, press "save changes" to commit this state to the datasbase. The next time any of them visits your post, they'll also have the possibility to edit this specific post (indicated by the pencil-icon-button in the post menu bar).

## Installation

Just three simple steps. From your main discourse do:

    cd plugins
    git clone https://github.com/ligthyear/discourse-plugin-shared-edit.git   # clone the repo here
    cd ..
    RAILS_ENV=production rake assets:precompile

Then restart your discourse.

Now add `sharedEdit` into the `post_menu` setting via the Admin-Interface, save and reload the application. Now under every post you are the author of (or if you are staff), you'll find the new "share edit" button. Please read the _Details_ section to understand how to use it.

Enjoy.

## Changelog:

 * 2014-03-11
   - adding documentation and licence

 * 2014-03-10
   - initial version

## TODO

(in order of importance)

 * the title of the modal doesn't pick up properly all the time
 * there seems to be some i18n problems

### other Limitations:

 (none)

Found a bug? Please report it on github!

## Authors:
Benjamin Kampmann <me @ create-build-execute . com>

## License (BSD):
Copyright (c) 2014, Benjamin Kampmann
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
