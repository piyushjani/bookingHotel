'use strict';

module.exports = function(Room) {
		    Room.disableRemoteMethod("upsert", true);
    Room.disableRemoteMethod("updateAll", true);
    Room.disableRemoteMethod("updateAttributes", false);
    Room.disableRemoteMethod("find", true);
    Room.disableRemoteMethod("findById", true);
    Room.disableRemoteMethod("findOne", true);
    Room.disableRemoteMethod("deleteById", true);
    Room.disableRemoteMethod("confirm", true);
    Room.disableRemoteMethod("count", true);
    Room.disableRemoteMethod("exists", true);
    Room.disableRemoteMethod("resetPassword", true);
    Room.disableRemoteMethod("createChangeStream", true);
    Room.disableRemoteMethod("upsertWithWhere", true);
    Room.disableRemoteMethod("replaceOrCreate", true);
    Room.disableRemoteMethod("replaceById", true);
    Room.disableRemoteMethod('__count__accessTokens', false);
    Room.disableRemoteMethod('__create__accessTokens', false);
    Room.disableRemoteMethod('__delete__accessTokens', false);
    Room.disableRemoteMethod('__destroyById__accessTokens', false);
    Room.disableRemoteMethod('__findById__accessTokens', false);
    Room.disableRemoteMethod('__get__accessTokens', false);
    Room.disableRemoteMethod('__updateById__accessTokens', false);

};
