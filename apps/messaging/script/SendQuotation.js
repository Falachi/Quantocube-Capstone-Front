import React from "react";
import { View } from "react-native";
import { getCurrentDayAndMonth, getCurrentTime } from "../../../utils/TimeDate";
import users from "../../../utils/UserData";
import { useDispatch } from "react-redux";
import { addMessage } from "../../../store/messagesSlice";

const scripts = [
  {
    type: "text",
    text: "Hi there. Thank you for your message.\n\nThis is an automated responset to let you know I have received your inquiry. \n\nI am currently away from my desk but will be back shortly. I will respond to your message as soon as possible upon my return.\n\nBest regards,\nJackson.",
    time: getCurrentTime(),
    flag: false,
  },
  {
    type: "bar",
    name: "Jackson Hon",
    text: "has accepted your request",
    time: getCurrentTime(),
  },
  {
    type: 'text',
    text: 'Hello. Thank you for approaching us with your project.\n\nI can ensure that the product will be of the highest quality. Attached is the quotation for the project. Please review it carefully and let me know if there are any issues.\n\nThank you.'
  },
  {
    type: 'attachment',
    time: getCurrentTime(),
    attachment: {
      description: "Quotation Created",
      createdAt: getCurrentTime(),
    },
    flag: false,
    attachmentType: 'quotation',
  },
];

export default scripts;