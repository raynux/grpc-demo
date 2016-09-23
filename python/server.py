from concurrent import futures
import grpc
import sample_pb2
import time
from pprint import pprint

class SampleServicer(sample_pb2.BetaSearchServiceServicer):
    def Search(self, request, context):
        return sample_pb2.CandidateResponse(
            memo="hi %s" % request.requester,
            candidates=[
                {'name': 'Taro', 'rate': 'GOOD'},
                {'name': 'Jiro', 'rate': 'BAD'}
            ]
        )

server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
sample_pb2.add_SearchServiceServicer_to_server(SampleServicer(), server)
server.add_insecure_port('[::]:50051')
server.start()
print 'server started'

while True:
  time.sleep(100000)
