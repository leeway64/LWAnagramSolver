# Note: Python 3 should already come installed with Manjaro.
sudo pacman -Syu
sudo pacman -S git
sudo pacman -S python-pip
sudo pacman -Sy vim
sudo pacman -S neovim
sudo pacman -Sy gcc
sudo pip install conan
# After installation, conan might not be in the PATH. conan is installed in `/home/<username>/.local/bin`.
# Add this to the path by editing the bashrc file at ~/.bashrc and adding
# export PATH=/home/<username>/.local/bin:$PATH to the end.
