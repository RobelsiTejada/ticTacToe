#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/games/post" \
  --include \
  --request POST \
  --data-urlencode ""

# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo
