import { defineEventHandler, getQuery } from 'h3';
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: '',
  port: 465,
  secure: true,
  auth: {
    user: '',
    pass: '',
  },
});

export default defineEventHandler(async (event) => {
  try {
    const { email } = getQuery(event)

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: email, // sender address
      to: '', // list of receivers
      subject: `New Subscriber for Autonomous Enterprises`, // Subject line
      text: email, // plain text body
      // html: '<b>Hello world?</b>', // html body
    })

    return true
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
