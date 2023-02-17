"use client";

import React, { useEffect, useState } from "react";
import {useRouter} from "next/router"
import { Button } from "../Buttons/Button";
import { CardTitle } from "./CardTitle";
import { CardLine } from "./CardLine";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardLabelTextarea } from "../Inputs/CardLabelTextarea";
import { servicesList } from "../ServicesComponent/Service";
import {
	blocList,
	validationSchema,
	
} from "../../Utils/validations";

import Link from "next/link"

import fetchApiData from "../../Utils/fetchApiData";

import { useServiceContext } from "../../Contexts/ServiceContext";
import { useServiceLetterContext } from "../../Contexts/ServiceLetterContext";
import * as yup from "yup";

import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import FieldSelect from "../Inputs/FieldSelect";
import { categoryModel, serviceOrderModel, subcategoryModel, serviceModel } from "../../Utils/ServiceModels";



export const lettersOnly = /[^a-zA-Z]/g;

const validate = yup.object().shape({
	aplicantsName: validationSchema.name,
	title: validationSchema.title,
	description: validationSchema.description,
	serviceLocal: validationSchema.serviceLocal,
});

export const CardCreateService = () => {
	
//	const { addInfoService, infoService } = useServiceContext()
//	
//	const { addInfoServiceLetter, infoServiceLetter } = useServiceLetterContext()
//	
//	const [ services, setServices ] = useState( serviceOrderModel );
//
//	useEffect(() => {
//		const servicesStorage = localStorage.getItem("services");
//
//		if (servicesStorage) {
//			setServices(JSON.parse(servicesStorage));
//		}
//		console.log("lista: ", servicesStorage);
//	}, []);
//
//	useEffect(() => {
//		localStorage.setItem("services", JSON.stringify(services));
//	}, [services]);



const router = useRouter()


var myIndex;
  const indexService = () => {
    serviceModel.map( ( service, index ) => {

      if ( service.id == router.query.serviceorder ) {

        myIndex = index
        return myIndex;
      }
    } );

  };

  indexService();




	return (
		<div className="mx-4">
			<div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="Solicitar Serviço" />
				</div>
				<div className="mx-9 mt-4 mb-10">
					<CardLine />
				</div>
				<Formik
					initialValues={ {
            updatedAt: new Date()
            .toLocaleTimeString("pt-br", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "numeric",
            })
            .toString()
            .replace(":", "")
            .replace(":", "")
            .replace("/", "")
            .replace("/", "")
            .replace(" ", ""),
            createdAt: new Date()
            .toLocaleTimeString("pt-br", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "numeric",
            })
            .toString()
            .replace(":", "")
            .replace(":", "")
            .replace("/", "")
            .replace("/", "")
            .replace(" ", ""),
            id: new Date()
            .toLocaleTimeString("pt-br", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "numeric",
            })
            .toString()
            .replace(":", "")
            .replace(":", "")
            .replace("/", "")
            .replace("/", "")
            .replace(" ", ""),
            serviceLocal: "",
            description: "",
            aplicantsName: "",
            serviceSubGroupId: serviceModel[myIndex].id,
            title: serviceModel[myIndex].title,
            patrimony: "",
            personType: 0,
					}}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
							//setServices([...services, values]);
							//console.log("services:", services);
              //addInfoService( [ values  ] )
							
							//console.log( "infos:", infoServiceLetter )

							toast.success("Serviço criado com sucesso!");
						
							actions.resetForm();
							
						}, 400);
					}}
				>
					{({ isSubmitting, isValid }) => (
						<Form autoComplete="on">
							<div className="flex flex-col gap-9 mx-14">
								<div className="">
									<CardLabelInput
										label="Nome"
										name="aplicantsName"
										type="text"
										width="w-full"
										inputid="title"
									
									/>
								</div>

								<div className="">
									<CardLabelInput
										label="Título"
										name="title"
										type="text"
										width="w-full"
										inputid="title"
									/>
								</div>

								<div className="">
									<CardLabelTextarea
										label="Descrição"
										type="textarea"
										name="description"
										textareaid="description"
                    />
								</div>
                  <div>
                    { serviceModel[ myIndex ].isPatromonyIdRequired ? 
                    <CardLabelInput
                      label="Patrimônio"
                      name="patrimony"
                      type="text"
                      width="w-full"
                      inputid="patrimony"
                    />
                    : <></>}
                  </div>
								<div className="">
									<FieldSelect
										label="serviceLocal"
										name="serviceLocal"
										default="Selecione"
										listitems={blocList}
									/>
								</div>
							</div>
							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
								<Button
									isSubmitting={isSubmitting}
									title="Solicitar"
									theme="primaryAction"
									type="submit"
									disabled={isSubmitting || !isValid}
								/>
                {/*<Link href={"/"}>*/}
                  <Button title="Cancelar" theme="secondaryAction" type="button" onClick={fetchApiData()} />
                {/*</Link>*/}
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default CardCreateService;
