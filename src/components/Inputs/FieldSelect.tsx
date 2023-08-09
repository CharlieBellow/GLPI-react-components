"use client";
import { ClassAttributes, InputHTMLAttributes } from "react";

import { Field, FieldHookConfig, useField } from "formik";

interface FieldSelectProps {
  listitems: string[];
  label: string;
  name: string;
  default?: string;
  theme?: string;
}
// ! id não existe no tipo 'object', tem que consertar pra poder fazer o build
// transformar esse select em um component select do radix ui para aproveitar a acessibilidade
export default function FieldSelect(
  props: FieldSelectProps &
    InputHTMLAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement> &
    FieldHookConfig<string>
) {
  const [field, meta] = useField(props);

  const getSelect = (item: string) => {
    return item;
  };

  return (
    <div
      className={`relative flex w-full flex-col items-start  ${props.theme}`}
    >
      <Field
        {...props}
        {...field}
        as="select"
        placeholder={props.default}
        name={props.name}
        className={`max-h-11 w-full rounded-md bg-gray-medium p-2.5 text-base text-light-bg focus:border-4 focus:outline-none focus:ring-0${
          meta.touched && meta.error
            ? " border-red-ufal"
            : "focus:border-blue-ufal"
        }
				`}
      >
        {props.default ? (
          <option value="" className="">
            {props.default}
          </option>
        ) : (
          <></>
        )}

        {props.listitems.map((item) => {
          return (
            <option key={item} value={item} className="font-bold ">
              {getSelect(item)}
            </option>
          );
        })}
      </Field>

      {meta.error && meta.touched ? (
        <span className="text-sm text-red-ufal">{meta.error}</span>
      ) : null}
    </div>
  );
}
