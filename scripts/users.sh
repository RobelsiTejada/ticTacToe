#!/bin/bash

curl "https://aqueous-atoll-85096.herokuapp.com/games/users" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
