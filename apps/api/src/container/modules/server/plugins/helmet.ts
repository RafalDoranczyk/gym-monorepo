import HELMET from '@fastify/helmet';
import { FastifyInstance } from 'fastify';

/** @param {import('fastify').FastifyInstance} app */
export default function helmetPlugin(app: FastifyInstance) {
  return app.register(HELMET);
}
