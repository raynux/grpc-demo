# gRPC samples

Super simple gRPC samples in Node.js and Python. Both version are compatible to each other. More about gRPC, see http://www.grpc.io/

## Node.js

### Setup
```sh
npm install
```

### Server
```sh
node nodejs/server.js
```

### Client
```sh
node nodejs/client.js
```

## Python

### Setup
```sh
pip install -r requirements.txt
python -m grpc.tools.protoc -I=. --python_out=./python --grpc_python_out=./python sample.proto
```

### Server
```sh
python python/server.js
```

### Client
```sh
python python/client.py
```
