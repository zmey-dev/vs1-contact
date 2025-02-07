import React from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import ContactForm from "./ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

Meteor.startup(() => {
  const root = createRoot(document.getElementById("app"));
  root.render(<ContactForm />);
});
