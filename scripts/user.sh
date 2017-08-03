#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/games/users/{email}"
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
