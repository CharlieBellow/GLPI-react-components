import axios from "axios";
import { useEffect } from "react";
//import { AuthContext } from "../../Contexts/AuthContext";
import { useAuth } from '../../Contexts/AuthContext';
import { Button } from "../Buttons/Button";
import { CardTitle } from "./CardTitle";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { Eye } from "phosphor-react";
import { Form, Formik } from "formik";
import { validationSchema } from "../../Utils/validations";
import * as yup from "yup";
import Link from "next/link";
import {useRouter} from "next/router"
import { useMessage } from "../../Contexts/MessageContext";
import { getUser } from "../../Utils/server/getInfo";
import { usePreviousPage } from "../../Contexts/PreviousPageContext";

const validate = yup.object().shape({
	email: validationSchema.email,
	//password: validationSchema.password,
});

export function CardLogin () {
	

  const { auth, changeAuth, changeToken, token } = useAuth()
  const {errorMessage, successMessage} = useMessage()
  const {page, changePage, changeLogged} = usePreviousPage()
	const router = useRouter();

        async function getToken( values: object) {
                const token = await axios.post( "http://172.27.12.171:3333/sessions", values )
                .then(response => {
                  changeToken(response.data.token)
                  console.log(response.data.token)
                })
  }

  
    useEffect( () => {
    const tokenAuth = localStorage.getItem( "token" );

    if ( tokenAuth !== null && tokenAuth !== "null" ) {
      changeToken(  tokenAuth as string);
      console.log( "tokenAuth: ", tokenAuth );
    }
  } );

	
	return (
		<div className="container w-100 h-128 my-auto mx-auto bg-white-ice rounded-lg shadow-card">
			<div className="pt-16 pb-9 text-center">
				<CardTitle title="Fazer Login" />
			</div>
			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={validate}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						console.log( "submit:", values );
            if ( values.email === "ud@arapiraca.ufal.br" && values.password === "admin" ) {
             	console.log( "auth login 2", auth );
              	changeAuth( auth )
              	console.log( "auth login 3", auth );
        		getToken( values);

				changeLogged(true);
			  if(page !== ""){
				// * se tiver remove
				console.log("redirecting by context")
				changePage("")
				router.push(page)
			  }else{
				// * se não, redireciona pra dashboard
				router.push("/Dashboard")
			  }
			  successMessage("Login realizado com sucesso!");

			  // * checar se tem alguma página anterior

							
						} else {
						errorMessage("Usuário não cadastrado. Clique no botão \"Novo Cadastro\" para criar uma conta.");

						}
						actions.resetForm();
					}, 400);
				}}
			>
				{({ isSubmitting, isValid }) => (
					<Form>
						<div className="mb-6 px-10">
							<CardLabelInput
								label="Email"
								name="email"
								width="w-full"
								type="email"
							/>
						</div>
						<div className="mb-6 px-10">
							<CardLabelInput
								label="Senha"
								name="password"
								width="w-full"
								type="password"
								icon={<Eye className="absolute flex ml-72" weight="bold" />}
							/>
						</div>

						<div className="flex flex-col justify-center mt-13 mx-11">
							
							<Button
								title="Entrar"
								theme="primary"
								type="submit"
								disabled={ isSubmitting || !isValid }
								
							/>
							
						
								
							<Button title="Esqueci a senha" theme="textOnly" />
							<Link href="/signup" className="text-blue-ufal text-center font-semibold text-base">Novo Cadastro</Link>
							
						</div>
					</Form>
				)}
			</Formik>
    
		</div>
	);
}