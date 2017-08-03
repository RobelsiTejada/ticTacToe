#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/games/users" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
