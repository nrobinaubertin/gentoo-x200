#!/bin/sh

mkdir -p HOME portage cargo kernel

cp /usr/src/linux/.config kernel/
cp /var/lib/portage/world world
cp ${HOME}/.xinitrc HOME/
cp ${HOME}/.bash_profile HOME/
cargo install --list > cargo/list.txt
cp -r /etc/portage/savedconfig portage
cp -r /etc/portage/repos.conf portage
cp /etc/portage/make.conf portage
cp /etc/portage/package.use portage
cp /etc/portage/package.accept_keywords portage
