import { Schema } from 'mongoose'

const urlSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  }
})

export default urlSchema
