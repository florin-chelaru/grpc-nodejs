import grpc, {GrpcObject, loadPackageDefinition, Server, ServerCredentials} from "@grpc/grpc-js";
import {loadSync} from "@grpc/proto-loader";

const PROTO_PATH = "./customers.proto";

interface ServerDefinition extends GrpcObject {
  new(host: string, credentials: grpc.ChannelCredentials): ServerDefinition;
  // getAll() : any;
}

interface ServerPackage extends GrpcObject {
  [name: string]: ServerDefinition
}

const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true
});

const proto = loadPackageDefinition(packageDefinition) as ServerPackage;
const client = new proto.CustomerService(
  "localhost:30043",
  grpc.credentials.createInsecure()
);

export default client;