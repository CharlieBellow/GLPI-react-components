import Image from "next/image";
import { FormLogin } from "./components/form-login";

export function Login() {
  return (
    <div className="mx-auto flex h-screen w-screen flex-col items-center justify-center gap-8">
      <div className="relative -left-57 -ml-22 h-screen w-full sm:right-100 sm:mr-0 md:right-68 md:mr-68  lg:left-0 lg:right-202 lg:ml-0 lg:mr-202 lg:w-auto tv:right-118 ">
        <Image
          className=" fixed bottom-28 h-auto sm:-bottom-32 lg:-bottom-118 tv:-bottom-118"
          src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"
          width="1300"
          height="500"
          alt="brasão da UFAL com fundo transparente"
        />
      </div>

      <div className="absolute flex h-full w-full ">
        <FormLogin />
      </div>
    </div>
  );
}

export default Login;
