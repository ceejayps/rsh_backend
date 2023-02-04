#!/bin/bash
# do shit
echo "\033[4;32m setting up server \033[0m"
echo "Run docker compose down"
docker compose down
echo "Check for images."
docker images -a
echo "Forceing all image to dangle"
docker images -f dangling=true
echo "Removing all images"
docker rmi $(docker images -a -q)
echo "Check for images."
docker images -a
echo "prune all docker trash"
docker system prune -a
echo "Run docker compose up - d"
docker compose up -d