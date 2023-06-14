# Miscellaneous Useful Linux Information


## Useful Linux Commands
A collection of useful Linux terminal commands. Refer to the link attached to each entry for more
information on each command.

- [`ls`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-ls-command):
  Displays contents of directory

- [`cd <directory>`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command): Change directory to <directory>
  - `cd ..`: Go up one level in the directory hierarchy.
  - `cd /`: Change directory to system root. The system root is where folders such as `bin` and
    `boot` are found.
  - [`cd ~`](https://linuxize.com/post/linux-cd-command/#navigate-to-the-home-directory):
    Change directory to user account's home folder.

- [`pwd`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-pwd-command):
  Print working directory.
- [`tree`](https://www.tecmint.com/linux-tree-command-examples/): Show directories and subdirectories
  in a tree-like form. You might have to get `tree` with `sudo apt install tree`.

- [`sudo`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-sudo-command):
  Run a command as root, or as any other user.
- [`sudo apt install <package_name>`](https://embeddedinventor.com/sudo-apt-install-command-explained-for-beginners/):
  Install <package_name>.
  - [`apt`](https://www.techradar.com/how-to/computing/everything-you-need-to-know-about-linux-commands-1321955/2):
    Advanced Packaging Tool, a package manager.
- [`sudo apt update`](https://linoxide.com/apt-update-and-apt-upgrade-commands-whats-the-difference/):
  Updates package index of Linux machine.
- [`sudo apt upgrade`](https://linoxide.com/apt-update-and-apt-upgrade-commands-whats-the-difference/):
  Upgrades all packages.

- [`clear`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-clear-command):
  Clears console screen.
- [`history`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-history-command):
  Shows the previous commands entered.
- [`cat <file_name>`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cat-command):
  Display the contents of <file_name>.
- [`tail`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-tail-command):
  Prints the end of the file to the console.
- [`touch <file_name>`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-touch-command):
  Create a file with a name of <file_name>.
- [`grep`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-grep-command):
- [`du`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-du-command): 
  Disk usage. Calculate the size of a directory.
- [`mkdir`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-mkdir-command):
  Make a new directory.
- [`rmdir`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-rmdir-command):
  Delete an empty directory.
- [`mv`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-mv-command):
  Move a file into a new directory.
- [`cp`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cp-command):
  Copy file or folder.
- [`which`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-which-command):
  Finds where the binary lives in the file system.
- [`man`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-man-command):
  Displays the manual for a given command.
- [`echo`](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-echo-command):
  "Prints to the output the argument passed to it".
  - For example, `echo $PATH` prints out the $PATH environment variable, which tells the OS where to find the binaries.
- curl
- wget
- whoami
- more and less
- du -h -d 1
- cat proc mem info and cpu info
- cat /etc/image_info
- kill
- ping
- uname
- command to change localhost name (hostnamectl set-hostname)
- top
- man
- htop
- nohup
- watch
- locate
- tar
- cmp
- diff
- bc
- command -v
- yq
- http
- sponge


## Linux Directories Explained

Information in this section is taken from
[this video](https://www.youtube.com/watch?v=42iQKuQodW4).

Check out the [Fireship channel](https://www.youtube.com/c/Fireship) for similar content.

- `bin`: Binaries (AKA executables) vital to the operating system.
- `sbin`: System binaries. These should only be executed by the super user.
- `lib`: Contains libraries that are "shared... between binaries".
- `usr`: This directory also contains `bin` and `sbin` directories. These binaries are for the user,
  not for the OS. Inside `usr` is a `local` directory, which contains binaries the user compiled themselves.
- `etc`: Et cetera, or editable text config. Contains configuration files.
- `home`: Contains a directory for every on for the system.
- `boot`: Contains files necessary to boot (starting) the machine, such as the Linux kernel.
- `dev`: Device files. Can interact with hardware drivers as if they were files.
- `opt`: Optional software.
- `var`: Variable files. Contains files that will change as the OS is run.
- `tmp`: Temporary files. Will be deleted between reboots.
- `proc`: Doesn't actually exist on the disk. Created in-memory "to keep track of running processes".


## Symlinks

A symlink (symbolic link) is a file that links (AKA points) to another file or folder. They are
basically shortcuts.

To create a symlink, you can use: `ln -s <path to object to be linked> <path of link>`

Refer to
[this freeCodeCamp article](https://www.freecodecamp.org/news/symlink-tutorial-in-linux-how-to-create-and-remove-a-symbolic-link/)
for the source, along with further information.


## Text Editor Usage

### How to use Vim

Information for this section is taken from
[this freeCodeCamp video](https://www.freecodecamp.org/news/learn-vim-beginners-tutorial/).
Refer to that video for more information.

#### Helpful Commands

- `:q` or `:q!`: Quit Vim.
- `i`: Enter insert mode.
- `a` or `o`: Also enter insert mode. Appends and opens a new line, respectively. Can be used with the shift key.
- `:w`: Save changes.
- `:wq`: Write and quit.
- `:set number` or `:set relativenumber`: Turn on line numbers.
- `h`, `j`, `k`, `l`: Left, down, up, right.
- `u` and `ctrl + R`: Undo and redo.
- `v`: Enter visual mode.
- `d`: Delete. `dd` deletes the whole line.
- `D`: Delete rest of line.
- `y`: Yank, AKA copy. `yy` copies the whole line.
- `p`: Paste.
- `c`: Change. `cc` changes the whole line.
- `C`: Change rest of line.
- `r`: Replace.
- `w`: Jump to next word.
- `v`: Jump to previous word.
- `dw`: Delete word.
- `0`, `$`: Go to beginning and end of line.
- `yiw`: Yank inner word.
- `ciw`: Change inner word. Another alternative is to use `ci<char>`, which changes everything
  between `<char>`.
- `%`: Go to bracket or parenthesis.
- `f<symbol>` or `t<symbol>`: Jump to position at or before symbol specified.
- `gg` or `shift + g`: Jump to beginning or end of file.
- `<<` or `>>`: Indent left or right
- `shift + v` or `ctrl + v`: Visual line and block modes.
- `zz`: Center file.


## Bash Shell and Scripts

Information for this section is taken primarily from [this Fireship video](https://www.youtube.com/watch?v=I4EWvMFj37g).
Check out that video for more information.

### How to Create a Bash Script

Bash is also an interpreted programming language.

Here is an example of a Bash script:

```shell
#!/bin/bash

echo "A Song of Ice and Fire"
TWOW="The Winds of Winter"
echo $TWOW
```

You can find this script [here](asoiaf_example_script.sh). Run the script by entering `chmod +x
asoiaf_example_script.sh`, then `./asoiaf_example_script.sh` into the terminal.

The previous script will print the following to the terminal:

```
A Song of Ice and Fire
The Winds of Winter
```

## Permissions


## Bash aliases


## Input and output redirection


## Standard streams


## Initial setup

When you first start using a new machine, there are useful commands you can run and software to
install to get up to speed faster.

## General

[synth-shell](https://github.com/andresgongora/synth-shell) greatly improves the appearance of the
terminal. Check out [this video](https://www.youtube.com/watch?v=jS-QZKjAd-U) for more installation
information.

Remember to move the [.vimrc](.vimrc) file into the home (`~`) folder; the Vim configuration file
is usually at `~/.vimrc`.

## Ubuntu

Run [ubuntu_setup.sh](debian_setup.sh) when setting up an Ubuntu machine.

## Manjaro

Run [manjaro_setup.sh](arch_setup.sh) when setting up a Manjaro machine.
