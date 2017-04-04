FROM gitai/electron
LABEL maintainer "Gitai <i@gitai.me>"

ENV HOME /home/user

COPY static $HOME/static
COPY index.html $HOME/index.html
COPY main.js $HOME/main.js
COPY package.json $HOME/package.json

WORKDIR $HOME

ENTRYPOINT [ "/opt/electron/electron",  $HOME]