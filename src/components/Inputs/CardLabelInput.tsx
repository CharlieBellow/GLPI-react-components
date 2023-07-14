import * as Icon from "phosphor-react";
import { Field, FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";

interface CardLabelInputProps extends React.HTMLAttributes<HTMLElement> {
  label: string | boolean;
  type: string;
  inputid?: string;
  width: string;
  pattern?: string;
  icon?: Icon.IconProps;
  name: string;
}

function CardLabel(props: CardLabelInputProps) {
  return (
    <label
      {...props}
      htmlFor={props.inputid}
      className="pointer-events-none absolute -top-1 left-1 origin-[0] -translate-y-5
      scale-100 cursor-pointer text-base text-light-bg duration-300 peer-placeholder-shown:top-6
      peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:translate-x-1.5 peer-placeholder-shown:scale-100 peer-focus:top-2
      peer-focus:-translate-y-5 peer-focus:scale-75
      peer-focus:bg-white-ice peer-focus:px-2 peer-focus:text-blue-ufal peer-focus:peer-placeholder-shown:-translate-x-0"
    >
      {props.label}
    </label>
  );
}

export function CardLabelInput(
  props: CardLabelInputProps &
    InputHTMLAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement> &
    FieldHookConfig<string>
) {
  const [field, meta] = useField(props);
  return (
    <div className="relative flex flex-col items-start justify-center">
      <Field
        {...props}
        {...field}
        type={props.type}
        pattern={props.pattern}
        className={`peer block max-h-11 appearance-none rounded-lg bg-gray-medium p-2.5
          text-base text-light-bg focus:border-2 focus:bg-transparent
          focus:outline-none focus:ring-0${
            meta.error ? " border-red-ufal" : "focus:border-blue-ufal"
          } ${props.width}`}
        placeholder=" "
      />
      <>{props.icon}</>

      <CardLabel
        label={props.label}
        name={props.name}
        type={props.type}
        inputid={props.inputid}
        width={props.width}
        pattern={props.pattern}
      />

      {meta.error && meta.touched ? (
        <span className="text-sm text-red-ufal">{meta.error}</span>
      ) : null}
    </div>
  );
}
