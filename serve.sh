#!/usr/bin/env bash
nix --offline shell nixpkgs#nodejs -c npx marp -s src
