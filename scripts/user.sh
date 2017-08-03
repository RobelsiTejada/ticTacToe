#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/users/{email}"
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
