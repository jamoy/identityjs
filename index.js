'use strict';

const fp = require('fastify-plugin');

exports.fastify = fp(require('./lib/fastify'));

exports.user = require('./lib/user');
