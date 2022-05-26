import { Request, Response } from 'express';
import { v4 } from 'uuid';
import Url from '../models/urls.model';

interface urlSuccess {
  url: string,
  token: string,
  _id: string,
  __v: number
}

async function short(req: Request, res: Response) {
  const { url } = req.body
  const token = v4().split('-')[0]
  const isUnavailable = await Url.findOne({ url: url }) as urlSuccess
  if (isUnavailable) {
    const { token } = isUnavailable
    res.status(409).send(`URL already exists, please use this token ${token}`)
    return
  }

  const data = new Url({ url, token })
  const response = await data.save() as urlSuccess
  try {
    res.status(201).send(response)
  } catch {
    res.status(500).send('We could not create your short url, please try again later')
  }
}

async function find(req: Request, res: Response) {
  const { token } = req.params
  try {
    const { url } = await Url.findOne({ token }) as urlSuccess
    res.redirect(url)
  } catch {
    res.status(404).send('Token not found')
  }
}
export {
  short,
  find
}