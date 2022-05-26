import mongoose from 'mongoose'

function runDb() {
  mongoose
    .connect('mongodb://127.0.0.1:27017/dio', {
      user: 'root',
      pass: 'admin',
      authSource: 'admin'

    })
  .then(() => { console.log('MongoDB: success') })
  .catch(() => { console.log('MongoDB: fail') })
}

export default runDb
