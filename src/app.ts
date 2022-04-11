import fastify, { FastifyInstance } from 'fastify';

export function createApp(): FastifyInstance {
    const app = fastify();

    app.get('/ping', async (req, res) => {
        res.send('pong\n');
    });

    return app;
}
