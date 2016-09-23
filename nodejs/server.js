'use strict'

const grpc = require('grpc');
const proto = grpc.load(`${__dirname}/../sample.proto`)
const PORT = 50051 || process.env.PORT

const server = new grpc.Server()
server.addProtoService(proto.SearchService.service, {
  search(call, cb) {
    console.log(call.request)

    const res = {
      memo: `Hi, ${call.request.requester}. Here you go!`,
      candidates: [
        {name: 'Taro', rate: 'GOOD'},
        {name: 'Jiro', rate: 'BAD'}
      ]
    }

    cb(null, res)
  }
})

server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure())
server.start()
console.log(`GRPC server is running on ${PORT}`)
