
//import { CardLogin } from '../../components/CardLogin'
import { CardSignUp } from '../../components/CardSignUp';

function SignUp() {
	document.title = "Cadastro - GLPI";
  return (
		<>
			<div className="bg-gradient w-screen h-screen relative bg:fixed">
				<div className="bg-ufalBackground w-auto opacity-30 h-[96.625rem] lg:bg-cover bg-[length:1159.36px] left-[-33rem] absolute top-[-17rem] right-0 bg-no-repeat lg:w-full lg:h-[108.625rem] lg:left-[-31rem] lg:fixed lg:top-[-40.83%] lg:right-[21.39%]"></div>
			<div className="w-full h-full fixed flex">
				<CardSignUp />
			</div>
			</div>
		</>
	);
}

export default SignUp;

