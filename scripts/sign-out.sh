#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/games/delete?id=$ID" \
  --include \
  --request DELETE

# data output from curl doesn't have a trailing newline
echo
