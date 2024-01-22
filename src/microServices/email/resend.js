// const nodemailer = require("nodemailer");
const { getDocument } = require("./emailBody");
const dotenv = require("dotenv");
const { getDailySurvey } = require("./emailBody/document");
dotenv.config();

services = {};


const generateLink = ({ token, team_id }) => {
  return `${process.env.CLIENT_URL}/members/survey?token=${token}&team_id=${team_id}`;
};

const sendExternalEmail = async (
  recipientEmail,
  subject,
  { token, team_id, first_name, team_name }
) => {
  const body = await createBody(
    "dailySurvey",
    generateLink({ token, team_id }),
    first_name,
    team_name
  );

  return await sendEmail(recipientEmail, subject, body);
};

const createBody = async (taskName, link, firsName, team_name) => {
  let body = "";
  switch (taskName) {
    case "dailySurvey":
      return getDailySurvey(link, firsName, team_name);
    case "retro":
      return ` <div>
          <h1>Welcome ${firsName} to Sprint 1 Retro!</h1>
          <a href=${link}>Join the Retro of ${team_name} Here.</a>
        </div>`;

      break;
  }
  return body;
};

const { Resend } = require("resend");
const resend = new Resend("re_BPin5jZi_BTe1pGzUmGgUNJAbwAwE1uW4");

const sendEmail = async (recipientEmail, subject = "", body) => {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: recipientEmail,
    subject,
    text: "",
    html: body,
  });
};

const sendRetro = async (
  recipientEmail,
  subject,
  { team_id, first_name, team_name }
) => {
  const body = await createBody(
    "retro",
    `${process.env.CLIENT_RETRO}?team_id=${team_id}`,
    first_name,
    team_name
  );

  return await sendEmail(recipientEmail, subject, body);
};

module.exports = { sendExternalEmail, sendRetro };
