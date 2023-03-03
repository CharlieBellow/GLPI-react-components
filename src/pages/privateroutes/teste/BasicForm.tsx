import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { usersList } from "../../../components/Cards/CardUser/User";

import { Field, FieldHookConfig, useField } from "formik";
import {
	validationSchema,
	//blocList,
} from "../../../Utils/validations";

import * as yup from "yup";
import { toast } from "react-toastify";
import { Button } from "../../../components/Buttons/Button";
import { CardLabelInput, CardLabel } from "../../../components/Inputs/CardLabelInput";
import { CardTitle } from "../../../components/Cards/CardTitle";
import { CardLine } from "../../../components/Cards/CardLine";

const validate = yup.object().shape({
	name: validationSchema.name,
   personType: validationSchema.personType,
   
});

const BasicForm = () => {
	const [users, setUsers] = useState(usersList);

	useEffect(() => {
		const usersStorage = localStorage.getItem("users");

		if (usersStorage) {
			setUsers(JSON.parse(usersStorage));
		}

		console.log("lista:", usersStorage);
	}, []);

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(users));
	}, [users]);

	return (
		<div className="mx-4">
			<div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="title" />
				</div>

				<div className="mx-9 mt-4 mb-10">
					<CardLine />
				</div>

				<Formik
					initialValues={{
						name: "",
						isPatromonyIdRequired: false,
           persontype: [],
					}}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);

							//setUsers([...users, values]);
							console.log("users: ", users);

							toast.success("Chamado criado com sucesso!");
							//alert(JSON.stringify(values, null, 2));
							actions.resetForm();
						}, 400);
					}}
				>
					{({ isSubmitting, isValid, values }) => (
						<Form autoComplete="on">
							<div className="flex flex-col gap-9 mx-14">
								<div className="">
									<CardLabelInput
										label="Nome"
										name="name"
										type="text"
										width="w-full"
										inputid="name"
									/>
								</div>
							

                 <div className="">
									<CardLabelInput
										label={values.isPatromonyIdRequired}
										name="isPatromonyIdRequired"
										type="checkbox"
										width="w-full"
										inputid="isPatromonyIdRequired"
                    value={false}
                   
                   
									/>
                  </div>

                  <label>
            <Field type="checkbox" name="isPatromonyIdRequid" />
            
            
                  {`${values.sPatromonyIdRequired}`}
          </label>


           <div className="">
									<CardLabelInput
										label="Discente"
										name="persontype"
										type="checkbox"
										width="w-full"
										inputid="persontype"
                   
                   
									/>
                  </div>
                  
                <label className={""}>
                    <Field type="checkbox" name="persontype" value="Discente" />
                    Discente
                  </label>
							</div>

							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
								<Button
									title="Solicitar"
									theme="primaryAction"
									type="submit"
									disabled={isSubmitting || !isValid}
								/>
								<Button title="Cancelar" theme="secondaryAction" />
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
export default BasicForm;