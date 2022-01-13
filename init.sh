#!/bin/sh

set -ex

cd ~
rm -rf Desktop Music Public Videos Documents examples.desktop Templates

# sudo apt-get update && sudo apt-get upgrade
# sudo apt-get install -y git vim-gtk

curl https://get.volta.sh | bash
volta install node@14
volta install yarn
npm config set prefix $HOME/.npm-packages

# git clone https://github.com/donPabloNow/dotfiles.git
cd ~/dotfiles

sudo apt-add-repository ppa:neovim-ppa/stable
sudo apt-get update -qq
sudo apt-get install -y -qq neovim

yarn install
yarn global add @belt/cli
~/.config/yarn/global/node_modules/.bin/belt link packages/belt-donPabloNow

~/.config/yarn/global/node_modules/.bin/belt donPabloNow:provision --setup apt
~/.config/yarn/global/node_modules/.bin/belt donPabloNow:provision --setup symlinks
~/.config/yarn/global/node_modules/.bin/belt donPabloNow:provision --setup submodules
~/.config/yarn/global/node_modules/.bin/belt donPabloNow:provision --setup npm
~/.config/yarn/global/node_modules/.bin/belt donPabloNow:provision --setup code

# firecode
mkdir -p  ~/.local/share/fonts
for type in Bold Light Medium Regular Retina; do
  wget -O ~/.local/share/fonts/FiraCode-${type}.ttf \
    "https://github.com/tonsky/FiraCode/blob/master/distr/ttf/FiraCode-${type}.ttf?raw=true";
done
fc-cache -f

# change default shell to zsh
chsh -s /bin/zsh

# install gnome-terminal theme, needed to applied after install (`Edit -> Profiles -> Select as default`)
./scripts/gnome-terminal-themes/one-dark.sh
gsettings set org.gnome.settings-daemon.plugins.keyboard active false # https://askubuntu.com/questions/451945/permanently-set-keyboard-layout-options-with-setxkbmap-in-gnome-unity
