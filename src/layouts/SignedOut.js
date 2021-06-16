import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Menu, Modal, Form, Input } from "semantic-ui-react";

export default function SignedOut(props) {
  const [open, setOpen] = useState(false);
// validation obj
const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("This field is required")
      .min(1, "Must be at least 1 characters")
      .max(30, "Must be a maximum of 30 characters"),
    lastName: yup
      .string()
      .required("This field is required")
      .min(1, "Must be at least 1 characters")
      .max(30, "Must be a maximum of 30 characters"),
    email: yup
      .string()
      .required("This field is required")
      .email("Invalid e-mail")
      .min(4, "Must be at least 4 characters")
      .max(30, "Must be a maximum of 30 characters"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 6 characters, one uppercase, one number and one special case character"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
      identityNumber: yup
      .string()
      .required("This field is required")
      .matches(
        /^[1-9]{1}[0-9]{9}[02468]{1}$/,
        "identityNumber must contain at least 11 characters, Please enter valid id!"
      ),
    
  });

  // initial values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    identityNumber: "",
    birthDate: "",
    
  };

  // handleSubmit
  const onSubmit = (values) => {
   console.log(values)
   setOpen(false)
  };

  // formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });




  return (
    <div>
      <Modal
        dimmer="blurring"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="mini"
      >
        <Modal.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field
              id="form-input-control-first_name"
              control={Input}
              label="First name"
              placeholder="First name"
              {...formik.getFieldProps("firstName")}
              error={formik.touched.firstName && formik.errors.firstName}
            />
            <Form.Field
              id="form-input-control-last_name"
              control={Input}
              label="Last name"
              placeholder="Last name"
              {...formik.getFieldProps("lastName")}
              error={formik.touched.lastName && formik.errors.lastName}
            />
            <Form.Field
              id="form-input-control-identity_number"
              control={Input}
              label="Identity Number"
              placeholder="Identity Number"
              {...formik.getFieldProps("identityNumber")}
              error={formik.touched.identityNumber && formik.errors.identityNumber}
            />

            <Form.Field
              id="form-input-control-birth_date"
              control={Input}
              label="Birth Date"
              type="date"
              placeholder="YYYY-MM-DD"
              {...formik.getFieldProps("birthDate")}
              error={formik.touched.birthDate && formik.errors.birthDate}
            />
            <Form.Field
              id="form-input-control-error-email"
              control={Input}
              label="Email"
              placeholder="joe@schmoe.com"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && formik.errors.email}
            />
            <Form.Field
              id="form-input-control-password"
              control={Input}
              label="Password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
              error={formik.touched.password && formik.errors.password}
            />
            <Form.Field
              id="form-input-control-password"
              control={Input}
              label="Password Again"
              placeholder="Password Again"
              {...formik.getFieldProps("passwordConfirm")}
              error={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
            />
            <Form.Field
              primary
              
              id="form-button-control-public"
              control={Button}
              content="Submit"
              type="submit"
            />
          </Form>
        </Modal.Content>
      </Modal>
      <Menu.Item>
        <Button secondary onClick={props.SignIn} white>
          SignIn
        </Button>

        <Button
          secondary
          style={{ marginLeft: "0.5em" }}
          onClick={() => setOpen(true)}
        >
          SignUp
        </Button>
      </Menu.Item>
    </div>
  );
}
{
  /* <Button type="submit" onClick={() => setOpen(false)}>Submit</Button> */
}
