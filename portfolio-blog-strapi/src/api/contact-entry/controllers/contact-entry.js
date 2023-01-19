"use strict";

/**
 * contact-entry controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::contact-entry.contact-entry",
  ({ strapi }) => ({
    async create(ctx) {
      strapi.log.info(JSON.stringify(ctx.request.body.data));

      const response = await super.create(ctx);

      return response;
    },
  })
);
