#!/bin/sh

echo "#!/bin/sh

echo Run \$(basename \$0) $* ...

curl --unix-socket /var/run/docker.sock -H \"Content-Type: application/json\" -X POST http:/v1.24/containers/workspace/start

echo Success!" > /opt/lattice/bin/lattice

chmod 777 /opt/lattice/bin/lattice

echo "#!/bin/sh

echo Run \$(basename \$0) $* ...

curl --unix-socket /var/run/docker.sock -H \"Content-Type: application/json\" -X POST http:/v1.24/containers/workspace/start

echo Success!" > /opt/lattice/bin/wm

chmod 777 /opt/lattice/bin/wm

/opt/electron/electron /home/user