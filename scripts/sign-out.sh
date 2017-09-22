#!/bin/bash

API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com}" \
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/${ID}" \
--include \
--request DELETE \
--header "Content-Type: application/json" \
--header "Authorization: Token token=$TOKEN"

echo
