#!/bin/bash

API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
URL_PATH="/users"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
