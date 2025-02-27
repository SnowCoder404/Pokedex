#! /usr/bin/sh
#
#   Copyright © 2025, SnowCoder404
#
git submodule update --remote --merge
git pull
git add .
git commit -m "$*"
git push