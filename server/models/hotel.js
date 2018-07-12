'use strict';

module.exports = function(Hotel) {

	    Hotel.disableRemoteMethod("upsert", true);
    Hotel.disableRemoteMethod("updateAll", true);
    Hotel.disableRemoteMethod("updateAttributes", false);
    Hotel.disableRemoteMethod("find", true);
    Hotel.disableRemoteMethod("findById", true);
    Hotel.disableRemoteMethod("findOne", true);
    Hotel.disableRemoteMethod("deleteById", true);
    Hotel.disableRemoteMethod("confirm", true);
    Hotel.disableRemoteMethod("count", true);
    Hotel.disableRemoteMethod("exists", true);
    Hotel.disableRemoteMethod("resetPassword", true);
    Hotel.disableRemoteMethod("createChangeStream", true);
    Hotel.disableRemoteMethod("upsertWithWhere", true);
    Hotel.disableRemoteMethod("replaceOrCreate", true);
    Hotel.disableRemoteMethod("replaceById", true);
    Hotel.disableRemoteMethod('__count__accessTokens', false);
    Hotel.disableRemoteMethod('__create__accessTokens', false);
    Hotel.disableRemoteMethod('__delete__accessTokens', false);
    Hotel.disableRemoteMethod('__destroyById__accessTokens', false);
    Hotel.disableRemoteMethod('__findById__accessTokens', false);
    Hotel.disableRemoteMethod('__get__accessTokens', false);
    Hotel.disableRemoteMethod('__updateById__accessTokens', false);

};
