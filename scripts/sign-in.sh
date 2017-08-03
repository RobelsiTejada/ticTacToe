#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/games" \
  --include \
  --request POST \
  --data-urlencode ""

echo
