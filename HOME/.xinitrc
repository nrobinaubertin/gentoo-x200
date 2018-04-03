#!/bin/sh

# PATH
. "${HOME}/.config/pathrc"

# statusbar
while true; do
    xsetroot -name "$(get status '|')"
    sleep 1m
done &

# autostart
st &

exec dwm
