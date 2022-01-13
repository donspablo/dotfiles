#!/bin/bash
# var for session name (to avoid repeated occurences)
sn=xyz

tmux kill-session -t "$sn"
cd /home/donPabloNow
tmux new-session -s "$sn" -n etc -d

# Set the default cwd for new windows (optional, otherwise defaults to session cwd)
#tmux set-option default-path /

# Select window #1 and attach to the session
tmux select-window -t "$sn"
tmux split-window -h
tmux send-keys 'htop' 'C-m'
tmux select-pane -L

tmux -2 attach-session -t "$sn"
