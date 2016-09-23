import grpc
import sample_pb2

channel = grpc.insecure_channel('localhost:50051')
stub = sample_pb2.SearchServiceStub(channel)

req = sample_pb2.CandidateRequest(requester='Ray')
print stub.Search(req)
