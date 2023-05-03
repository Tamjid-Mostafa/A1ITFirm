import mongoose from 'mongoose'

const connectMongoose = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    if (connection.readyState === 1) {
      console.log('Database Connected')
    }
  } catch (error) {
    return Promise.reject(error)
  }
}

export default connectMongoose
