// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var com_bunny_v1_customers_pb = require('../../../com/bunny/v1/customers_pb.js');

function serialize_com_bunny_v1_GetAllRequest(arg) {
  if (!(arg instanceof com_bunny_v1_customers_pb.GetAllRequest)) {
    throw new Error('Expected argument of type com.bunny.v1.GetAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_bunny_v1_GetAllRequest(buffer_arg) {
  return com_bunny_v1_customers_pb.GetAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_bunny_v1_GetAllResponse(arg) {
  if (!(arg instanceof com_bunny_v1_customers_pb.GetAllResponse)) {
    throw new Error('Expected argument of type com.bunny.v1.GetAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_bunny_v1_GetAllResponse(buffer_arg) {
  return com_bunny_v1_customers_pb.GetAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_bunny_v1_GetRequest(arg) {
  if (!(arg instanceof com_bunny_v1_customers_pb.GetRequest)) {
    throw new Error('Expected argument of type com.bunny.v1.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_bunny_v1_GetRequest(buffer_arg) {
  return com_bunny_v1_customers_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_bunny_v1_GetResponse(arg) {
  if (!(arg instanceof com_bunny_v1_customers_pb.GetResponse)) {
    throw new Error('Expected argument of type com.bunny.v1.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_bunny_v1_GetResponse(buffer_arg) {
  return com_bunny_v1_customers_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustomerServiceService = exports.CustomerServiceService = {
  getAll: {
    path: '/com.bunny.v1.CustomerService/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: com_bunny_v1_customers_pb.GetAllRequest,
    responseType: com_bunny_v1_customers_pb.GetAllResponse,
    requestSerialize: serialize_com_bunny_v1_GetAllRequest,
    requestDeserialize: deserialize_com_bunny_v1_GetAllRequest,
    responseSerialize: serialize_com_bunny_v1_GetAllResponse,
    responseDeserialize: deserialize_com_bunny_v1_GetAllResponse,
  },
  get: {
    path: '/com.bunny.v1.CustomerService/Get',
    requestStream: false,
    responseStream: false,
    requestType: com_bunny_v1_customers_pb.GetRequest,
    responseType: com_bunny_v1_customers_pb.GetResponse,
    requestSerialize: serialize_com_bunny_v1_GetRequest,
    requestDeserialize: deserialize_com_bunny_v1_GetRequest,
    responseSerialize: serialize_com_bunny_v1_GetResponse,
    responseDeserialize: deserialize_com_bunny_v1_GetResponse,
  },
};

exports.CustomerServiceClient = grpc.makeGenericClientConstructor(CustomerServiceService);
