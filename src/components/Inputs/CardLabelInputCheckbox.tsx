import { Field } from "formik";

interface CardLabelInputCheckboxProps {
  name: string;
  value: string;
  checkArray?: string[];
}

// ${values.props.name.includes(props.value) ? "bg-gray-dark ": "hover:bg-white-strong-ice"}`
export function CardLabelInputCheckbox(props: CardLabelInputCheckboxProps) {
  return (
    <>
      <label
        className={`flex gap-1 rounded-lg border-2 p-2 ${
          props.checkArray?.includes(props.value)
            ? "bg-gray-medium"
            : "hover:bg-white-strong-ice"
        }`}
      >
        <Field type="checkbox" name={props.name} value={props.value} />
        {props.value}
      </label>
    </>
  );
}
