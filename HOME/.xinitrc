#!/bin/sh

# statusbar
while true; do
    xsetroot -name "$(${HOME}/bin/get full_status)"
    sleep 1m
done &

# autostart
st &

exec dwm
