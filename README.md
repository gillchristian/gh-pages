# gh-pages

## developing

run using docker-compose:

```bash
sudo docker-compose up
```

## production

build the Docker :whale: container and run it:

```bash
sudo docker build -t <image-name> .
sudo docker run -p <host-port>:3000 -d <image-name> npm run build && npm run serve
```
