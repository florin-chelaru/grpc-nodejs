import {credentials} from "@grpc/grpc-js";
import {CustomerServiceClient} from "../../proto/com/bunny/v1/customers_grpc_pb";
import {GetRequest} from "../../proto/com/bunny/v1/customers_pb";

const client = new CustomerServiceClient('localhost:30043', credentials.createInsecure());
const request = new GetRequest();
request.setId("34415c7c-f82d-4e44-88ca-ae2a1aaa92b7");

client.get(request, (error, response) => {
  if (error) {
    console.log(error);
    return;
  }
  console.info(response.getCustomer().toObject());
});
