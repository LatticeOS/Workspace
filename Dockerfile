FROM jess/vscode
LABEL maintainer "Gitai <i@gitai.me>"

ENV HOME /home/user


RUN apt-get update
RUN apt-get install -y git curl

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

COPY . $HOME/Workspaces

WORKDIR $HOME

COPY start.sh /usr/local/bin/start.sh

ENTRYPOINT [ "/usr/local/bin/start.sh"]