#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/games/change-password/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data "{
      \"passwords\": {
      \"old\": \"${OLD}\",
      \"new\": \"${NEW}\"
    }
  }"

# data output from curl doesn't have a trailing newline
echo
