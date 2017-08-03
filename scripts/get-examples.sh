#!/bin/bash

API="${API_ORIGIN:-https://ga-wdi-boston.herokuapp.com}"
URL_PATH="/examples"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
