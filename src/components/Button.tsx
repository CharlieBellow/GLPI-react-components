
interface ButtonProps {
	title: string;
	style: string;
	//type: ;
	//value: string;
}

export function Button(props: ButtonProps) {
  return (
		<button
			
			//type={props.type}
			//value={props.value}
			className={`hover:bg-opacity-80 font-bold rounded-md
        focus:outline-blue-ufal
        ${props.style}`}
		
		>
			{props.title}
		</button>
	);
}
