Adapted from: https://blog.logrocket.com/creating-a-crud-api-with-node-express-and-grpc/
And from: https://dev.to/devaddict/use-grpc-with-node-js-and-typescript-3c58

```shell
brew install bufbuild/buf/buf
```

... Doesn't work on Mac M1 (arm64)

This is on an amd64 arch:

```shell
brew install protobuf

cd proto
buf generate

cd ..
tsc && node build/server/server.js
tsc && node build/client/client.js
```
