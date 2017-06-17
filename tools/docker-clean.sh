#!/usr/bin/env bash

echo Stop all running containers
docker stop $(docker ps -q)
#echo Delete all containers
#docker rm $(docker ps -a -q)
#echo Delete all volumes
#docker volume rm $(docker volume ls -qf dangling=true)
echo Delete all containers with volumes
docker rm -v $(docker ps -a -q)
echo Delete all images
docker rmi -f $(docker images -q)
