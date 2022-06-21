<p align="center">📢<sub><sup> <i><b> YOUR SUPPORT IS GREATLY APPRECIATED / </b> <a href="https://www.patreon.com/donPabloNow">PATREON.COM/DONPABLONOW</a> / <b>BTC</b>  3HVNOVVMLHVEWQLSCCQX9DUA26P5PRCTNQ / <b>ETH</b> 0X3D288C7A673501294C9289C6FC42480A2EA61417 </i>🙏 </sub></sup></p><blockquote><p> ⛔️ <sub><b>ARCHIVE PENDING</b>: This endeavour is likely to fail owing to a lack of support. If you find this project interesting, please support it by smashing the "star" button. If the project receives at some interest work on the project will continue.</sub></p></blockquote></br><a href="https://www.donPabloNow.com/#notice"><img src="https://www.donPabloNow.com/notice.wepd"/></a></br></br>
# dotfiles

awesome-wm, atom, gnome-terminal, vim, tmux, zsh

![screen](/screen.png?raw=true)

## Overview

### Terminal

`gnome-terminal` with [Atom's One Dark theme](https://github.com/denysdovhan/one-gnome-terminal)

### Vim

plugin manager [pathogen](https://github.com/tpope/vim-pathogen)

### Window Manager

awesome wm 4.x.x with `xcompmgr` composition

## Install

### Preparation

```sh
$ sudo apt update
$ sudo apt upgrade
$ sudo apt install git vim neovim make
```

```sh
$ git clone https://github.com/donPabloNow/dotfiles.git
$ ./init.sh
```

- manual-install: [google-chrome](https://www.google.ru/chrome/browser/desktop/)

- manual-install: [dropbox](https://www.dropbox.com)

- manual-install: `arc-theme`
  - Open `gnome-tweaks`
    - Themes -> `Arc-Dark`
    - Icons -> `Ubuntu-mono-dark`

- manual setup: zsh

```sh
$ chsh -s $(which zsh)
```

- manual-install: [gnome-terminal atom dark one theme](https://github.com/denysdovhan/one-gnome-terminal)

```sh
$ wget https://raw.githubusercontent.com/denysdovhan/gnome-terminal-one/master/one-dark.sh && . one-dark.sh
```

`Edit -> Profiles -> Select as default`

## Credits

- [`config/awesome-4.0/theme/mountains.jpg`](https://wallpaperscraft.com/download/mountains_paraglider_top_121654/1920x1200)

## Temporary Chrome Extensions

- [Octo Tree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc?hl=ru)
- [Full Page Screen Capture](https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl)
- [Apollo Client Developer Tools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [SurfingKeys](https://github.com/brookhong/Surfingkeys)
- [HabitLab](https://chrome.google.com/webstore/detail/habitlab/obghclocpdgcekcognpkblghkedcpdgd?hl=en)

## Xtra

```sh
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
