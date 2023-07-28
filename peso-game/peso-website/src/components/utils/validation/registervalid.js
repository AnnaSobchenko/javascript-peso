import * as Yup from "yup";

export const RegisterValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Fill the gap")
    .email("Please enter an email")
    .max(254, "Max 254"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[0-9])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter and one special character"
    ),
  birthday: Yup.string()
    .max(
      new Date().setFullYear(new Date().getFullYear() - 12),
      "You must be at least 12 years old to register"
    )
    .required("Please enter your birthday"),
  name: Yup.string().required("Please enter your name"),
  surname: Yup.string().required("Please enter your name"),
  country: Yup.string().required("Please enter your name"),
});
export const SignInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Please enter an email")
    .max(254, "Max 254"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[0-9])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter and one special character"
    ),
});
