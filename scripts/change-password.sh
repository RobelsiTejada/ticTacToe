#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/games/patch?id=${ID}" \
  --include \
  --request PATCH \
  --data-urlencode ""

# data output from curl doesn't have a trailing newline
echo