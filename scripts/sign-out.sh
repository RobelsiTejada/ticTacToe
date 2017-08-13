#!/bin/bash

curl "https://aqueous-atoll-85096.herokuapp.com/games/delete?id=$ID" \
  --include \
  --request DELETE

# data output from curl doesn't have a trailing newline
echo
