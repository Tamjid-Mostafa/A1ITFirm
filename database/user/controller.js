/*  Controller  */

import User from "@models/User"




export async function getUser(req, res) {
  try {
    const result = await User.find({})
    if (!result) return res.status(404).json({ error: 'Data not found' })
    res.status(200).json(result)
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}
export async function postUser(req, res) {
  try {
    const formData = req.body
    if (!formData)
      return res.status(404).json({ error: 'Form Data not Provided...!' })
    const result = await User.create(formData)
    res.status(200).json(result)
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}
export async function putUser(req, res) {
  try {
    res.status(200).json({ user: 'GET Request' })
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}
export async function deleteUser(req, res) {
  try {
    res.status(200).json({ user: 'GET Request' })
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}
