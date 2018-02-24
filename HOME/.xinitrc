#!/bin/sh

# statusbar
while true; do
    xsetroot -name "$( date +"%F %R" )"
    sleep 1m
done &

# autostart
st &

exec dwm
