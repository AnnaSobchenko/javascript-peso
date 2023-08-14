import SignInForm from "@/components/SignInForm/SignInForm";
import Header from "@/components/header/Header";

const SignIn = ({ params: { lng } }: { params: { lng: string } }) => {
  return (
    <div>
      <SignInForm lng={lng} />
    </div>
  );
};

export default SignIn;
