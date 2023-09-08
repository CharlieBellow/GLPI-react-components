import { Metadata } from "next";

import { FormLogin } from "./components/FormLogin";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return <FormLogin />;
}
