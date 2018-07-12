'use strict';

module.exports = function(Consumer) {

 //Consumer.disableRemoteMethod("create", true);
    Consumer.disableRemoteMethod("upsert", true);
    Consumer.disableRemoteMethod("updateAll", true);
    Consumer.disableRemoteMethod("updateAttributes", false);
    Consumer.disableRemoteMethod("find", true);
    Consumer.disableRemoteMethod("findById", true);
    Consumer.disableRemoteMethod("findOne", true);
    Consumer.disableRemoteMethod("deleteById", true);
    Consumer.disableRemoteMethod("confirm", true);
    Consumer.disableRemoteMethod("count", true);
    Consumer.disableRemoteMethod("exists", true);
    Consumer.disableRemoteMethod("resetPassword", true);
    Consumer.disableRemoteMethod("createChangeStream", true);
    Consumer.disableRemoteMethod("upsertWithWhere", true);
    Consumer.disableRemoteMethod("replaceOrCreate", true);
    Consumer.disableRemoteMethod("replaceById", true);
    Consumer.disableRemoteMethod('__count__accessTokens', false);
    Consumer.disableRemoteMethod('__create__accessTokens', false);
    Consumer.disableRemoteMethod('__delete__accessTokens', false);
    Consumer.disableRemoteMethod('__destroyById__accessTokens', false);
    Consumer.disableRemoteMethod('__findById__accessTokens', false);
    Consumer.disableRemoteMethod('__get__accessTokens', false);
    Consumer.disableRemoteMethod('__updateById__accessTokens', false);

};
