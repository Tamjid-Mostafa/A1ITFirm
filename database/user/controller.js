/*  Controller  */

import Proposal from "@models/Proposal"
import User from "@models/User"
import { sendEmail } from "helper/emailHelper"




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


// _______________________________________

export async function getProposals(req, res) {
  try {
    const result = await Proposal.find({})
    if (!result) return res.status(404).json({ error: 'Data not found' })
    res.status(200).json(result)
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}

export async function postProposal(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: 'Form Data not Provided...!' });

    const result = await Proposal.create(formData);

    // Send an email to the user
    const userEmail = formData.email;
    const emailSubject = 'Your Proposal Has Been Submitted';
    const emailContent = `
      <h1>Proposal Submitted</h1>
      <p>Hi ${formData.firstName},</p>
      <p>Your proposal has been submitted successfully.</p>
      <p>Thank you for choosing our service!</p>
    `;

    await sendEmail(userEmail, emailSubject, emailContent);

    res.status(200).json({ message: 'Proposal submitted successfully. We will contact you ASAP' });
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}