import { Field} from "formik";

interface FieldSelectProps {
  listitems: string[]; 
  label: string;
  name: string;
  default: string;
  theme?: string
}

// transformar esse select em um component select do radix ui para aproveitar a acessibilidade 
export default function FieldSelect ( props: FieldSelectProps ) {
  return (
    <div className={ `w-full relative flex items-center ${ props.theme }`} >
			<Field
				{...props}
				as="select"
				placeholder={props.default}
				name={props.name}
				className={`bg-gray-medium text-light-bg text-base px-2.5 py-2.5 rounded-md w-full max-h-11 focus:ring-0 focus:border-4 focus:border-blue-ufal focus:outline-none `}
			>
				<option value="" className="">
					{props.default}
				</option>
				{props.listitems.map(item => {
					return (
						<option key={item} value={item} className="font-bold ">
							{item}
						</option>
					);
				})}
			</Field>
		</div>
	);
}