import { Metadata } from "next";

import { FormSignUp } from "./components/FormSignUp";

export const metadata: Metadata = {
  title: "Cadastro",
};

export default function SignUpPage() {
  return <FormSignUp />;
}
