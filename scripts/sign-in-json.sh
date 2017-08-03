#!/bin/bash
curl "http://tic-tac-toe.wdibos.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data "{
    \"credentials\":{
      \"email\": \"${EMAIL}\",
      \"password\": \"${PASSWORD}\"
    }
  }"

# data output from curl doesn't have a trailing newline
echo
