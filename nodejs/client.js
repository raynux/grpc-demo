'use strict'

const grpc = require('grpc');
const proto = grpc.load(`${__dirname}/../sample.proto`)
const client = new proto.SearchService('localhost:50051', grpc.credentials.createInsecure())

const req = {
  requester: 'Ray'
}

client.search(req, (err, res) => {
  if(err) { return console.error(err) }
  console.log(res)
})
