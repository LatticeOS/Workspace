#!/bin/sh

echo Run $(basename $0) $* ...

# docker run -d --rm    --volumes-from desktop --link api --net compose_default -e DISPLAY=:0     --name workspace1  gitai/workspace
# curl --unix-socket /var/run/docker.sock -H "Content-Type: application/json" -d '{"Image": "gitai/electron", "Cmd": "'$*'", "Env": ["DISPLAY=:0"], "HostConfig" : {"VolumesFrom": ["desktop"], "AutoRemove": true}}' -X POST http:/v1.24/containers/create?name=electron

curl --unix-socket /var/run/docker.sock -H "Content-Type: application/json" -X POST http:/v1.24/containers/workspace/start

echo Success!