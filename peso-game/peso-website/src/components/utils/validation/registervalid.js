import * as Yup from "yup";

export const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .email("Please enter a valid name")
    .max(254, "Max 254 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email")
    .max(254, "Max 254 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),

  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please repeat your password"),
});
export const SignInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Please enter an email")
    .max(254, "Max 254"),
  password: Yup.string().required("Password is required"),
});
