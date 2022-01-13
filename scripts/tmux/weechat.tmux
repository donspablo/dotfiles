#!/bin/bash
# var for session name (to avoid repeated occurences)
sn=weechat

tmux kill-session -t "$sn"
cd /home/donPabloNow
tmux new-session -s "$sn" -n etc -d

tmux select-window -t "$sn"

tmux split-window -h

tmux send-keys 'move-to-tag 4' 'C-m'

sleep 5
tmux send-keys '/home/donPabloNow/dotfiles/scripts/weechat-reconnect-loop.sh' 'C-m'

tmux select-pane -L

tmux -2 attach-session -t "$sn"
