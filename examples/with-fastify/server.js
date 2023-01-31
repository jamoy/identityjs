'use strict';

// const { Identity } = require('../../');
const fastify = require('fastify');

const instance = new fastify();
// const identity = Identity.fastify();

instance.get('/', (req, reply) => {
	reply.send({ hello: 'world' });
});

instance.get('/need-auth', { preHandlers: [] }, (req, reply) => {
	reply.send({ hello: 'world' });
});

instance.get('/auth', { preHandlers: [] }, (req, reply) => {
	reply.send({ hello: 'world' });
});

instance.get('/logout', { preHandlers: [] }, (req, reply) => {
	reply.send({ hello: 'world' });
});

instance.listen({ port: 3005 }, err => {
	if (err) throw err;
})
