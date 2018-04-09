#!/bin/sh

mkdir -p HOME portage cargo kernel

# kernel
cp /usr/src/linux/.config kernel/

# world
cp /var/lib/portage/world world

# HOME
cp ${HOME}/.xinitrc HOME/
cp ${HOME}/.bash_profile HOME/

# cargo
cargo install --list > cargo/list.txt

# portage
cp -r /etc/portage/savedconfig portage
cp -r /etc/portage/repos.conf portage
cp /etc/portage/make.conf portage
cp /etc/portage/package.* portage

# etc
cp /etc/hosts etc

# custom ebuilds
cp -r /usr/local/portage/ ebuilds/
