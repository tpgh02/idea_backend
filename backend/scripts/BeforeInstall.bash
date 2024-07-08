#!/bin/bash

# I want to make sure that the directory is clean and has nothing left over from
# previous deployments. The servers auto scale so the directory may or may not
# exist.
if [ -d /home/ubuntu/idea_backend/ ]; then
    rm -rf /home/ubuntu/idea_backend/
fi
mkdir -vp /home/ubuntu/idea_backend/