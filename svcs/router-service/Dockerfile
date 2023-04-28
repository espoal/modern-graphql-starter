FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y curl

WORKDIR /home/app

RUN curl -sSL https://router.apollo.dev/download/nix/v1.15.1 | sh

RUN curl -sSL https://github.com/apollographql/rover/releases/download/v0.14.0/rover-v0.14.0-x86_64-unknown-linux-gnu.tar.gz > rover.tar.gz
RUN tar -xzf rover.tar.gz




FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y ca-certificates
RUN update-ca-certificates

WORKDIR /home/app
COPY --from=0 /home/app/router .
COPY --from=0 /home/app/dist/rover .


# CMD ["ls", "-la"]
ENTRYPOINT ["./router", "--dev", "--config", "src/router.dev.yaml", "--supergraph", "src/supergraph.graphql"]
