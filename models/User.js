import { model, models, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    photoURL: {
      type: String,
    },
    role: {
      type: String,
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
)

const User = models?.users || model('users', UserSchema)

export default User
