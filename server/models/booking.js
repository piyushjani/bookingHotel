'use strict';

module.exports = function(Booking) {


    Booking.disableRemoteMethod("create", true);
    Booking.disableRemoteMethod("upsert", true);
    Booking.disableRemoteMethod("updateAll", true);
    Booking.disableRemoteMethod("updateAttributes", false);
    Booking.disableRemoteMethod("find", true);
    Booking.disableRemoteMethod("findById", true);
    Booking.disableRemoteMethod("findOne", true);
    Booking.disableRemoteMethod("deleteById", true);
    Booking.disableRemoteMethod("confirm", true);
    Booking.disableRemoteMethod("count", true);
    Booking.disableRemoteMethod("exists", true);
    Booking.disableRemoteMethod("resetPassword", true);
    Booking.disableRemoteMethod("createChangeStream", true);
    Booking.disableRemoteMethod("upsertWithWhere", true);
    Booking.disableRemoteMethod("replaceOrCreate", true);
    Booking.disableRemoteMethod("replaceById", true);
    Booking.disableRemoteMethod('__count__accessTokens', false);
    Booking.disableRemoteMethod('__create__accessTokens', false);
    Booking.disableRemoteMethod('__delete__accessTokens', false);
    Booking.disableRemoteMethod('__destroyById__accessTokens', false);
    Booking.disableRemoteMethod('__findById__accessTokens', false);
    Booking.disableRemoteMethod('__get__accessTokens', false);
    Booking.disableRemoteMethod('__updateById__accessTokens', false);

    




};
