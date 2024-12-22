#!/bin/bash#!/bin/bash

# Untrack images from Git LFS
git lfs untrack "*.jpg" "*.png"

# Remove cached images
find . -type f \( -iname "*.jpg" -o -iname "*.png" \) -exec git rm --cached {} +

# Add images as regular files
git add .
git commit -m "Removed all images from LFS and re-added as regular files"
git push

