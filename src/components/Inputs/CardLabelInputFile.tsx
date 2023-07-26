import * as Icon from "@/components/icons";
import { Field, FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";

interface CardLabelInputFileProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  type: string;
  inputid?: string;
  width: string;
  pattern?: string;
  icon?: Icon.IconProps;
  name: string;
}

function CardLabel(props: CardLabelInputFileProps) {
  return (
    <label
      {...props}
      htmlFor={props.inputid}
      className="absolute -top-1 left-1 origin-[0] -translate-y-5 scale-100
      text-base text-light-bg duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:translate-x-1.5
      peer-placeholder-shown:scale-100 peer-focus:top-2
      peer-focus:-translate-y-5 peer-focus:scale-75
      peer-focus:bg-white-ice peer-focus:px-2 peer-focus:text-blue-ufal peer-focus:peer-placeholder-shown:-translate-x-0"
    >
      {props.label}
    </label>
  );
}

export function CardLabelInputFile(
  props: CardLabelInputFileProps &
    InputHTMLAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement> &
    FieldHookConfig<string>
) {
  const [field, meta] = useField(props);
  return (
    <div className="relative flex flex-col items-end justify-center">
      <Field
        {...props}
        {...field}
        type={"text"}
        //name={props.name}
        pattern={props.pattern}
        className={`peer block max-h-11 appearance-none rounded-lg bg-gray-medium p-2.5
          text-base text-light-bg focus:border-2 focus:bg-transparent
          focus:outline-none focus:ring-0${
            meta.error ? " border-red-ufal" : "focus:border-blue-ufal"
          } ${props.width}`}
        placeholder=" "
        //required
      />
      <>{props.icon}</>
      <Field
        {...props}
        {...field}
        type={props.type}
        accept="image/png, image/jpeg, application/pdf, application/msword"
        //name={props.name}
        pattern={props.pattern}
        className={`z-2 absolute inset-0 flex items-center justify-center opacity-0`}
        placeholder=" "
        //required
      />
      <CardLabel
        label={props.label}
        name={props.name}
        type={props.type}
        inputid={props.inputid}
        width={props.width}
        pattern={props.pattern}
      />

      {meta.error && meta.touched ? (
        <span className="self-start text-sm text-red-ufal">{meta.error}</span>
      ) : null}
    </div>
  );
}
