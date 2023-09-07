import * as Yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
export const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
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
  file: Yup.mixed()
    .nullable()

    .test(
      "FILE_FORMAT",
      "Please select an image format jpg, jpeg or png",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
});
export const SignInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Please enter an email")
    .max(254, "Max 254"),
  password: Yup.string().required("Password is required"),
});
