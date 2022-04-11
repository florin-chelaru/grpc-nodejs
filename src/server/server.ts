import {sendUnaryData, Server, ServerCredentials, ServerUnaryCall} from "@grpc/grpc-js";
import {Customer, GetAllRequest, GetAllResponse, GetRequest, GetResponse} from "../../proto/com/bunny/v1/customers_pb";
import {CustomerServiceService} from "../../proto/com/bunny/v1/customers_grpc_pb";

const customers = [
  new Customer()
    .setName("Florin")
    .setAddress("Str Nicolae Gane nr. 32A")
    .setAge(37)
    .setId("a68b823c-7ca6-44bc-b721-fb4d5312cafc"),
  new Customer()
    .setName("Suze")
    .setAddress("2224 Shannon Dr")
    .setAge(31)
    .setId("34415c7c-f82d-4e44-88ca-ae2a1aaa92b7"),
];

const server = new Server();

server.addService(CustomerServiceService, {
  getAll: (
    call: ServerUnaryCall<GetAllRequest, GetAllResponse>,
    callback: sendUnaryData<GetAllResponse>
  ) => {
    const response = new GetAllResponse();
    response.setCustomersList(customers);
    callback(null, response);
  },
  get: (call: ServerUnaryCall<GetRequest, GetResponse>, callback: sendUnaryData<GetResponse>) => {
    const response = new GetResponse();
    const customer = customers.find(c => c.getId() === call.request.getId());

    response.setCustomer(customer);
    callback(null, response);
  }
});

server.bindAsync("0.0.0.0:30043", ServerCredentials.createInsecure(), (err) => {
  if (err) {
    console.log(JSON.stringify(err));
    return;
  }

  console.log("Server running at http://127.0.0.1:30043");
  server.start();
});

