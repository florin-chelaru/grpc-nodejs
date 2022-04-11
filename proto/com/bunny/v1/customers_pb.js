// source: com/bunny/v1/customers.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.com.bunny.v1.Customer', null, global);
goog.exportSymbol('proto.com.bunny.v1.GetAllRequest', null, global);
goog.exportSymbol('proto.com.bunny.v1.GetAllResponse', null, global);
goog.exportSymbol('proto.com.bunny.v1.GetRequest', null, global);
goog.exportSymbol('proto.com.bunny.v1.GetResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.bunny.v1.GetAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.bunny.v1.GetAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.bunny.v1.GetAllRequest.displayName = 'proto.com.bunny.v1.GetAllRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.bunny.v1.GetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.bunny.v1.GetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.bunny.v1.GetRequest.displayName = 'proto.com.bunny.v1.GetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.bunny.v1.GetAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.bunny.v1.GetAllResponse.repeatedFields_, null);
};
goog.inherits(proto.com.bunny.v1.GetAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.bunny.v1.GetAllResponse.displayName = 'proto.com.bunny.v1.GetAllResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.bunny.v1.GetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.bunny.v1.GetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.bunny.v1.GetResponse.displayName = 'proto.com.bunny.v1.GetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.bunny.v1.Customer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.bunny.v1.Customer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.bunny.v1.Customer.displayName = 'proto.com.bunny.v1.Customer';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.bunny.v1.GetAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.bunny.v1.GetAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.bunny.v1.GetAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.bunny.v1.GetAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.bunny.v1.GetAllRequest}
 */
proto.com.bunny.v1.GetAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.bunny.v1.GetAllRequest;
  return proto.com.bunny.v1.GetAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.bunny.v1.GetAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.bunny.v1.GetAllRequest}
 */
proto.com.bunny.v1.GetAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.bunny.v1.GetAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.bunny.v1.GetAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.bunny.v1.GetAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.bunny.v1.GetAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.bunny.v1.GetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.bunny.v1.GetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.bunny.v1.GetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.bunny.v1.GetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.bunny.v1.GetRequest}
 */
proto.com.bunny.v1.GetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.bunny.v1.GetRequest;
  return proto.com.bunny.v1.GetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.bunny.v1.GetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.bunny.v1.GetRequest}
 */
proto.com.bunny.v1.GetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.bunny.v1.GetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.bunny.v1.GetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.bunny.v1.GetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.bunny.v1.GetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.com.bunny.v1.GetRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.bunny.v1.GetRequest} returns this
 */
proto.com.bunny.v1.GetRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.bunny.v1.GetAllResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.bunny.v1.GetAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.com.bunny.v1.GetAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.bunny.v1.GetAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.bunny.v1.GetAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    customersList: jspb.Message.toObjectList(msg.getCustomersList(),
    proto.com.bunny.v1.Customer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.bunny.v1.GetAllResponse}
 */
proto.com.bunny.v1.GetAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.bunny.v1.GetAllResponse;
  return proto.com.bunny.v1.GetAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.bunny.v1.GetAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.bunny.v1.GetAllResponse}
 */
proto.com.bunny.v1.GetAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.bunny.v1.Customer;
      reader.readMessage(value,proto.com.bunny.v1.Customer.deserializeBinaryFromReader);
      msg.addCustomers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.bunny.v1.GetAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.bunny.v1.GetAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.bunny.v1.GetAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.bunny.v1.GetAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.com.bunny.v1.Customer.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Customer customers = 1;
 * @return {!Array<!proto.com.bunny.v1.Customer>}
 */
proto.com.bunny.v1.GetAllResponse.prototype.getCustomersList = function() {
  return /** @type{!Array<!proto.com.bunny.v1.Customer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.bunny.v1.Customer, 1));
};


/**
 * @param {!Array<!proto.com.bunny.v1.Customer>} value
 * @return {!proto.com.bunny.v1.GetAllResponse} returns this
*/
proto.com.bunny.v1.GetAllResponse.prototype.setCustomersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.com.bunny.v1.Customer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.bunny.v1.Customer}
 */
proto.com.bunny.v1.GetAllResponse.prototype.addCustomers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.bunny.v1.Customer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.bunny.v1.GetAllResponse} returns this
 */
proto.com.bunny.v1.GetAllResponse.prototype.clearCustomersList = function() {
  return this.setCustomersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.bunny.v1.GetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.com.bunny.v1.GetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.bunny.v1.GetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.bunny.v1.GetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    customer: (f = msg.getCustomer()) && proto.com.bunny.v1.Customer.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.bunny.v1.GetResponse}
 */
proto.com.bunny.v1.GetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.bunny.v1.GetResponse;
  return proto.com.bunny.v1.GetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.bunny.v1.GetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.bunny.v1.GetResponse}
 */
proto.com.bunny.v1.GetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.bunny.v1.Customer;
      reader.readMessage(value,proto.com.bunny.v1.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.bunny.v1.GetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.bunny.v1.GetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.bunny.v1.GetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.bunny.v1.GetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.bunny.v1.Customer.serializeBinaryToWriter
    );
  }
};


/**
 * optional Customer customer = 1;
 * @return {?proto.com.bunny.v1.Customer}
 */
proto.com.bunny.v1.GetResponse.prototype.getCustomer = function() {
  return /** @type{?proto.com.bunny.v1.Customer} */ (
    jspb.Message.getWrapperField(this, proto.com.bunny.v1.Customer, 1));
};


/**
 * @param {?proto.com.bunny.v1.Customer|undefined} value
 * @return {!proto.com.bunny.v1.GetResponse} returns this
*/
proto.com.bunny.v1.GetResponse.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.bunny.v1.GetResponse} returns this
 */
proto.com.bunny.v1.GetResponse.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.bunny.v1.GetResponse.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.bunny.v1.Customer.prototype.toObject = function(opt_includeInstance) {
  return proto.com.bunny.v1.Customer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.bunny.v1.Customer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.bunny.v1.Customer.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    age: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.bunny.v1.Customer}
 */
proto.com.bunny.v1.Customer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.bunny.v1.Customer;
  return proto.com.bunny.v1.Customer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.bunny.v1.Customer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.bunny.v1.Customer}
 */
proto.com.bunny.v1.Customer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAge(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.bunny.v1.Customer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.bunny.v1.Customer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.bunny.v1.Customer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.bunny.v1.Customer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAge();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.com.bunny.v1.Customer.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.bunny.v1.Customer} returns this
 */
proto.com.bunny.v1.Customer.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.com.bunny.v1.Customer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.bunny.v1.Customer} returns this
 */
proto.com.bunny.v1.Customer.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 age = 3;
 * @return {number}
 */
proto.com.bunny.v1.Customer.prototype.getAge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.com.bunny.v1.Customer} returns this
 */
proto.com.bunny.v1.Customer.prototype.setAge = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.com.bunny.v1.Customer.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.bunny.v1.Customer} returns this
 */
proto.com.bunny.v1.Customer.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.com.bunny.v1);