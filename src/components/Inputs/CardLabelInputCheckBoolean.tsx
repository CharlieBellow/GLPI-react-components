import { Field } from "formik";

interface CardLabelInputCheckBooleanProps {
  name: string;
  label: string;
}

// ${values.props.name.includes(props.value) ? "bg-gray-dark ": "hover:bg-white-strong-ice"}`
export function CardLabelInputCheckBoolean(
  props: CardLabelInputCheckBooleanProps
) {
  return (
    <>
      <label className={`flex gap-1 rounded-lg border-2 bg-gray-medium p-1 `}>
        <Field type="checkbox" name={props.name} />
        {props.label}
      </label>
    </>
  );
}
