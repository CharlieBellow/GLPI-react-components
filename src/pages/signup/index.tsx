
import { CardSignUp } from '../../components/Cards/CardSignUp';
import Head from "next/head"

// * tela de cadastro '/signup'

function SignUp() {

  return (
		<>
    <Head>
      <title>Cadastro - GLPI</title>
    </Head>
		<div className="flex items-center  flex-col w-screen h-screen mx-auto justify-center bg-gradient  gap-8">
        <div className="w-full h-screen relative right-128">
          <img className=" fixed -bottom-118 h-auto" src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png" width="1300" height="500"/>
        </div>
				<div className="w-full h-full absolute flex">
					<CardSignUp />
				</div>

			</div>
		</>
	);
}

export default SignUp;

