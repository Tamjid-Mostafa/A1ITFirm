import connectMongoose from "@lib/mongoose/mongoose"
import { getProposals, postProposal } from "database/user/controller"

export default async function proposals(req, res) {
  await connectMongoose().catch(() =>
    res.status(405).json({ error: 'Error in the connection' })
  )

  // Type of request
  const { method } = req

  switch (method) {
    case 'GET':
      getProposals(req, res)
      break
    case 'POST':
      postProposal(req, res)
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
