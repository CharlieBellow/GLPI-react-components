import AccordionMenu from "../../components/Acordeon";
//import {CardLabel} from "../../components/CardLabel";
import CardLabelInput from "../../components/CardLabelInput";

//ver como criar esse card de login, entender como estão organizados os cards
function Login() {
  return (
		<>
			<div className="bg-gradiente w-screen h-screen fixed">
				<div className="bg-backgroundUfal w-[39.961rem] opacity-30 h-[108.625rem] left-[-15.98%] fixed   top-[-44.83%] bottom-[-64.06%] right-[21.39%] bg-no-repeat"></div>
			</div>
			{/*<AccordionMenu/>*/}
      <div className="font-roboto mt-44  w-[400px] h-[474px] top-[]179px]  bg-branco-gelo rounded-lg shadow-sombra-card">
        <div>

				<CardLabelInput label="email" inputId="email" width="320"/>
        </div>
			</div>
		</>
	);
}

export default Login



//position: absolute;
//left: -15.98%;
//right: 21.39%;
//top: -44.83%;
//bottom: -64.06%;
