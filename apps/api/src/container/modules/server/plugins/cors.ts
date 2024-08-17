import CORS from '@fastify/cors';
import { FastifyInstance } from 'fastify';

/** @param {import('fastify').FastifyInstance} app */
export default function corsPlugin(app: FastifyInstance) {
  return app.register(CORS, {
    credentials: true,
    exposedHeaders: ['Content-Type', 'Authorization'],
  });
}
