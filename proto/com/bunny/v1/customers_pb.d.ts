// package: com.bunny.v1
// file: com/bunny/v1/customers.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetAllRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllRequest): GetAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllRequest;
    static deserializeBinaryFromReader(message: GetAllRequest, reader: jspb.BinaryReader): GetAllRequest;
}

export namespace GetAllRequest {
    export type AsObject = {
    }
}

export class GetRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRequest;
    static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetAllResponse extends jspb.Message { 
    clearCustomersList(): void;
    getCustomersList(): Array<Customer>;
    setCustomersList(value: Array<Customer>): GetAllResponse;
    addCustomers(value?: Customer, index?: number): Customer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllResponse): GetAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllResponse;
    static deserializeBinaryFromReader(message: GetAllResponse, reader: jspb.BinaryReader): GetAllResponse;
}

export namespace GetAllResponse {
    export type AsObject = {
        customersList: Array<Customer.AsObject>,
    }
}

export class GetResponse extends jspb.Message { 

    hasCustomer(): boolean;
    clearCustomer(): void;
    getCustomer(): Customer | undefined;
    setCustomer(value?: Customer): GetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResponse;
    static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
    export type AsObject = {
        customer?: Customer.AsObject,
    }
}

export class Customer extends jspb.Message { 
    getId(): string;
    setId(value: string): Customer;
    getName(): string;
    setName(value: string): Customer;
    getAge(): number;
    setAge(value: number): Customer;
    getAddress(): string;
    setAddress(value: string): Customer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Customer.AsObject;
    static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Customer;
    static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
    export type AsObject = {
        id: string,
        name: string,
        age: number,
        address: string,
    }
}
