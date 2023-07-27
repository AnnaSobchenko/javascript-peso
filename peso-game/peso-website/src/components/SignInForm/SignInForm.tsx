'use client'
import { ErrorMessage, Formik, FormikValues, FormikHelpers } from "formik";
import localFont from "next/font/local";
import Link from "next/link";

// Define an interface for the form values
interface FormValues {
  email: string;
  password: string;
}

// Define an interface for the form submission function
interface FormSubmissionFunction {
  onSubmit: (values: FormValues, helpers: FormikHelpers<FormValues>) => void | Promise<any>;
}
const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});
const SignInForm = () => {
  return (
    <div className="layout" >
      <div className="bg-accent-background">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
            await resetForm();
          }}
        >
				  {({
				 values,
				 handleSubmit,
				 handleChange,
				 handleBlur,
            // other Formik props
          }) => (
            <div className='px-5 py-14'>
              <form onSubmit={handleSubmit}>
					 <h2 className={`${myFont.className} text-3xl`}>Sing In Form</h2>
					<label  htmlFor="email">
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email.."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />

                  <ErrorMessage
                    component="div"
                    name="email"
                    
                  />
                </label>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInForm;