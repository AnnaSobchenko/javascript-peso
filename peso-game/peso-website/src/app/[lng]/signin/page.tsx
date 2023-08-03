import SignInForm from "@/components/SignInForm/SignInForm";
import Header from "@/components/header/Header";

const Signin = ({ params: { lng } }: { params: { lng: string } }) => {
  return (
    <div>
      <Header lng={lng} />
      <SignInForm lng={lng} />
    </div>
  );
};

export default Signin;
