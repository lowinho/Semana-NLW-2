import { Request, Response } from 'express'
import db from '../database/connections';

export default class ConnectionsController {
  async index(req: Request, res: Response) {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    res.json({ total });
  }


  async store(req: Request, res: Response) {
    const { user_id } = req.body;

    await db('connections').insert({
      user_id
    })

    res.status(201).send();
  }
}