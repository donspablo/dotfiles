<h3 align="center">🖐️ HELLO: How are you? My name is Pablo, I'd like to take this opportunity to introduce myself.</h3>
<p align="center"><i>My passion in open-source software development has developed to the point that I am actively seeking financial aid to assist me in accomplishing both professional and personal goals. The funds will enable me to continue working full-time and developing fantastic applications, in addition to upgrading and maintaining my existing ones. I have created a fundraising page specifically for the purpose of storing my related fundraising materials. Your support would be really helpful and greatly appreciated - Thank you 🙏</i></p>
<p align="center">https://github.com/sponsors/donPablo ] I||I [ https://www.patreon.com/donpablonow</p>
<img src="https://github.com/donPabloNow/donPabloNow/raw/main/assets/Wave_2400.gif"/>
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
