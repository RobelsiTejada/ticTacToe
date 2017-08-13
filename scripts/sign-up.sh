#!/bin/bash

curl "https://aqueous-atoll-85096.herokuapp.com/games/post" \
  --include \
  --request POST \
  --data-urlencode ""

# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo
