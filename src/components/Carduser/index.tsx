import { Formik, Form } from "formik";
import React, { useState } from "react";
import {User, usersList} from './User'
import {
	validationSchema,
	//blocList,
} from "../../Utils/validations";

import * as yup from 'yup'
import { toast } from "react-toastify";
import { Button } from "../Button";
import { CardLabelInput } from "../CardLabelInput";
import { CardTitle } from "../CardTitle";
import { CardLine } from "../CardLine";




const validate = yup.object().shape({
	name: validationSchema.name,

} );




export const BasicForm = () => {

const [name, setName] = useState("")
const [date, setDate] = useState("")
const [time, setTime] = useState("")


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
						date: "",
					}}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
							//setValues( values );
							setName(values.name);
							setDate(
								new Date().toLocaleTimeString("pt-br", {
									day: "2-digit",
									month: "2-digit",
									year: "numeric",
								})
							);
							setTime(
								new Date().toLocaleTimeString("pt-br", {
									hour: "2-digit",
									minute: "2-digit",
									second: "2-digit",
								}),
							);
							usersList.push({
								name: values.name,
								id: new Date().toLocaleTimeString("pt-br", {
									hour: "2-digit",
									minute: "2-digit",
									second: "2-digit",
								}),
								date: new Date().toLocaleTimeString("pt-br", {
									hour: "2-digit",
									minute: "2-digit",
									second: "2-digit",
									
								}),
								time: new Date().toLocaleTimeString("pt-br", {
									hour: "2-digit",
									minute: "2-digit",
									second: "2-digit",
								}),
							});
						

							toast.success("Chamado criado com sucesso!");
							//alert(JSON.stringify(values, null, 2));
							actions.resetForm();
						}, 400);
					}}
				>
					{({ isSubmitting }) => (
						<Form autoComplete="on">
							<div className="flex flex-col gap-9 mx-14">
								<div className="">
									<CardLabelInput
										label="Nome"
										name="name"
										type="text"
										width="w-full"
										inputid="title"
									/>
								</div>
							</div>

							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
								<Button
									title="Solicitar"
									theme="primaryAction"
									type="submit"
									disabled={isSubmitting}
								/>
								<Button title="Cancelar" theme="secondaryAction" />
							</div>
						</Form>
					)}
				</Formik>
			</div>
			<>
			<User nome={ name } date={ date } time={time} />
			{console.log(usersList)}
			</>
		</div>
	);
};
