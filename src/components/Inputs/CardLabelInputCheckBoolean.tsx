import * as Icon from "phosphor-react";
import { Field } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";

interface CardLabelInputCheckBooleanProps {

  name: string;
  label: string;

}

// ${values.props.name.includes(props.value) ? "bg-gray-dark ": "hover:bg-white-strong-ice"}`
export function CardLabelInputCheckBoolean ( props: CardLabelInputCheckBooleanProps) {

	return (
    <>
		<label className={`flex gap-1 border-2 p-1 bg-gray-medium rounded-lg `}>
                    <Field type="checkbox" name={props.name} />
                   {props.label}
                  </label>
		</>
    );
}
