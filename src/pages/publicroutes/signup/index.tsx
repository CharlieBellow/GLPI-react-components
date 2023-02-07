
import { CardSignUp } from '../../../components/Cards/CardSignUp';
import {Head} from "next/head"

function SignUp() {

  return (
		<>
    <Head>
      <title>Cadastro - GLPI</title>
    </Head>
			<div className="bg-gradient w-screen h-screen relative bg:fixed">
				<div className="bg-ufalBackground w-auto opacity-30 h-[67rem] lg:bg-cover bg-[length:1159.36px] left-[-33rem] absolute top-[-17rem] right-0 bg-no-repeat lg:w-full lg:h-[200.625%] lg:left-[-33rem] lg:fixed lg:top-[-42.83%] lg:right-[21.39%]"></div>
				<div className="w-full h-full absolute flex">
					<CardSignUp />
				</div>

			</div>
		</>
	);
}

export default SignUp;

