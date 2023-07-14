import { FormLogin } from "./components/form-login";

export function Login() {
  return (
    <div className="z-10 mx-auto flex h-screen w-screen flex-col items-center justify-center gap-8">
      <div className="absolute flex h-full w-full ">
        <FormLogin />
      </div>
    </div>
  );
}

export default Login;
