import mongoose from 'mongoose'
import urlSchema from '../database/urls.schema'

const Url = mongoose.model('Url', urlSchema)

export default Url
