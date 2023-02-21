import { TextField, Stack } from "@mui/material";
import { Form, Formik, Field, ErrorMessage, FormikConfig } from "formik";
import React from "react";
import { Contact } from "../types/types";
import { contactSchema } from "./schema/contact";

interface AddFormProps {
  contact?: Contact;
  onSubmit: FormikConfig<Contact>["onSubmit"];
}

export default function AddForm({ contact, onSubmit }: AddFormProps) {
  return (
    <Formik<Contact>
      initialValues={
        contact || { firstName: "", lastName: "", email: "", phone: "" }
      }
      onSubmit={onSubmit}
      validationSchema={contactSchema}
    >
      <Form>
        <Stack spacing={3}>
          <Field
            as={TextField}
            name="firstName"
            id="firstName"
            label="First Name"
            variant="outlined"
          />
          <ErrorMessage name="firstName" />
          <Field
            as={TextField}
            name="lastName"
            id="lastName"
            label="Last Name"
            variant="outlined"
          />
          <ErrorMessage name="lastName" />
          <Field
            as={TextField}
            name="email"
            id="email"
            label="Email"
            variant="outlined"
            type="email"
          />
          <ErrorMessage name="email" />
          <Field
            as={TextField}
            name="phone"
            id="phone"
            label="Phone"
            variant="outlined"
          />
          <ErrorMessage name="phone" />
        </Stack>
      </Form>
    </Formik>
  );
}
