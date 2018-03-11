#!/bin/sh

# statusbar
while true; do
    xsetroot -name "$(${HOME}/bin/get status '|')"
    sleep 1m
done &

# autostart
st &

exec dwm
