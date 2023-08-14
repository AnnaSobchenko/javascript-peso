import SignUpForm from "@/components/SignUpForm/SignUpForm";
const SignUp = ({ params: { lng } }: { params: { lng: string } }) => {
  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
