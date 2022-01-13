#!/bin/bash
# var for session name (to avoid repeated occurences)
sn=main

tmux kill-session -t "$sn"
cd /home/donPabloNow
tmux new-session -s "$sn" -n 'start' -d

tmux select-window -t "$sn"

tmux split-window -h

tmux send-keys 'move-to-tag 3' 'C-m'
tmux select-pane -L

tmux split-window -v
tmux select-pane -U
# tmux send-keys 'note' 'C-m'

tmux -2 attach-session -t "$sn"
