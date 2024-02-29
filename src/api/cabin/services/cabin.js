'use strict';

/**
 * cabin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cabin.cabin');
