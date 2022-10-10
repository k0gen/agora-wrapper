FROM alpine:latest

RUN apk add --no-cache tini yq && \
    rm -f /var/cache/apk/*

ADD ./agora/target/aarch64-unknown-linux-musl/release/agora /usr/local/bin/agora
RUN chmod +x /usr/local/bin/agora
ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
RUN chmod +x /usr/local/bin/docker_entrypoint.sh
