#!/bin/sh

mkdir -p HOME portage cargo kernel pip

# kernel
cp /usr/src/linux/.config kernel/

# grub
cp /etc/default/grub grub/

# world
cp /var/lib/portage/world world

# HOME
cp ${HOME}/.xinitrc HOME/
cp ${HOME}/.bash_profile HOME/

# cargo
cargo install --list > cargo/list.txt

# portage
cp -r /etc/portage/repos.conf portage
cp /etc/portage/make.conf portage
cp /etc/portage/package.* portage

# etc
cp /etc/hosts etc

# custom ebuilds
cp -r /usr/local/portage/ ebuilds/

# save pip installs
pip freeze --user > pip/requirements.txt

# firefox
for profile in $(find $HOME/.mozilla/firefox -maxdepth 1 -mindepth 1 -type d); do
    profile_name="$(basename $profile)"
    mkdir -p "firefox/$profile_name"
    [ -d "$profile/chrome" ] && cp -r "$profile/chrome" "firefox/$profile_name/chrome"
    [ -f "$profile/user.js" ] && cp "$profile/user.js" "firefox/$profile_name/user.js"
done
