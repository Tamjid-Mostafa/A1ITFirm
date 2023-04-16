import connectMongoose from "@lib/mongoose/mongoose"
import { getUser, postUser } from "database/user/controller"

export default async function users(req, res) {
  await connectMongoose().catch(() =>
    res.status(405).json({ error: 'Error in the connection' })
  )

  // Type of request
  const { method } = req

  switch (method) {
    case 'GET':
      getUser(req, res)
      break
    case 'POST':
      postUser(req, res)
      break
    case 'PUT':
      res.status(200).json({ method, name: 'PUT Request' })
      break
    case 'DELETE':
      res.status(200).json({ method, name: 'DELETE Request' })
      break

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}

// const register = async (req, res) => {
//   try {
//     const { name, email } = req.body

//     const errMsg = valid(name, email)

//     if (errMsg) return res.status(400).json({ err: errMsg })
//   } catch (err) {}
// }
