import { Metadata } from "next";
import { FormSignUp } from "./components/FormSignUp";

export const metadata: Metadata = {
  title: "Cadastro",
};

export default function SignUpPage() {
  return (
    <div className="z-10 mx-auto flex h-screen w-screen flex-col items-center justify-center gap-8">
      <div className="absolute flex h-full w-full">
        <FormSignUp />
      </div>
    </div>
  );
}
