// package: com.bunny.v1
// file: com/bunny/v1/customers.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as com_bunny_v1_customers_pb from "../../../com/bunny/v1/customers_pb";

interface ICustomerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAll: ICustomerServiceService_IGetAll;
    get: ICustomerServiceService_IGet;
}

interface ICustomerServiceService_IGetAll extends grpc.MethodDefinition<com_bunny_v1_customers_pb.GetAllRequest, com_bunny_v1_customers_pb.GetAllResponse> {
    path: "/com.bunny.v1.CustomerService/GetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<com_bunny_v1_customers_pb.GetAllRequest>;
    requestDeserialize: grpc.deserialize<com_bunny_v1_customers_pb.GetAllRequest>;
    responseSerialize: grpc.serialize<com_bunny_v1_customers_pb.GetAllResponse>;
    responseDeserialize: grpc.deserialize<com_bunny_v1_customers_pb.GetAllResponse>;
}
interface ICustomerServiceService_IGet extends grpc.MethodDefinition<com_bunny_v1_customers_pb.GetRequest, com_bunny_v1_customers_pb.GetResponse> {
    path: "/com.bunny.v1.CustomerService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<com_bunny_v1_customers_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<com_bunny_v1_customers_pb.GetRequest>;
    responseSerialize: grpc.serialize<com_bunny_v1_customers_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<com_bunny_v1_customers_pb.GetResponse>;
}

export const CustomerServiceService: ICustomerServiceService;

export interface ICustomerServiceServer extends grpc.UntypedServiceImplementation {
    getAll: grpc.handleUnaryCall<com_bunny_v1_customers_pb.GetAllRequest, com_bunny_v1_customers_pb.GetAllResponse>;
    get: grpc.handleUnaryCall<com_bunny_v1_customers_pb.GetRequest, com_bunny_v1_customers_pb.GetResponse>;
}

export interface ICustomerServiceClient {
    getAll(request: com_bunny_v1_customers_pb.GetAllRequest, callback: (error: grpc.ServiceError | null, response: com_bunny_v1_customers_pb.GetAllResponse) => void): grpc.ClientUnaryCall;
    getAll(request: com_bunny_v1_customers_pb.GetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: com_bunny_v1_customers_pb.GetAllResponse) => void): grpc.ClientUnaryCall;
    getAll(request: com_bunny_v1_customers_pb.GetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: com_bunny_v1_customers_pb.GetAllResponse) => void): grpc.ClientUnaryCall;
    get(request: com_bunny_v1_customers_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: com_bunny_v1_customers_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: com_bunny_v1_customers_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: com_bunny_v1_customers_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: com_bunny_v1_customers_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: com_bunny_v1_customers_pb.GetResponse) => void): grpc.ClientUnaryCall;
}

export class CustomerServiceClient extends grpc.Client implements ICustomerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAll(request: com_bunny_v1_customers_pb.GetAllRequest, callback: (error: grpc.ServiceError | null, response: com_bunny_v1_customers_pb.GetAllResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: com_bunny_v1_customers_pb.GetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: com_bunny_v1_customers_pb.GetAllResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: com_bunny_v1_customers_pb.GetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: com_bunny_v1_customers_pb.GetAllResponse) => void): grpc.ClientUnaryCall;
    public get(request: com_bunny_v1_customers_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: com_bunny_v1_customers_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: com_bunny_v1_customers_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: com_bunny_v1_customers_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: com_bunny_v1_customers_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: com_bunny_v1_customers_pb.GetResponse) => void): grpc.ClientUnaryCall;
}
