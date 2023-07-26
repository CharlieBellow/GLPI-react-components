import React, { useRef } from 'react';
import { Editor } from "@tinymce/tinymce-react";
import { Field, FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";

interface CardLabelTextareaTinyProps extends React.HTMLAttributes<HTMLElement> {
	label: string;
	textareaid?: string;
	register?: any;
	type?: string;
	name: string;
}

function CardLabel(props: CardLabelTextareaTinyProps ) {
	return (
		<label
			{...props}
			htmlFor={props.textareaid}
			className="absolute -top-1 left-1 origin-[0] -translate-y-5 scale-100
      text-base text-light-bg duration-300 peer-placeholder-shown:top-7 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:translate-x-1.5
      peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:bg-white-ice
      peer-focus:px-2 peer-focus:text-blue-ufal peer-focus:peer-placeholder-shown:-translate-x-0"
		>
			{props.label}
		</label>
	);
}

export function CardLabelTextareaTiny(
	props: CardLabelTextareaTinyProps &
		InputHTMLAttributes<HTMLInputElement> &
		ClassAttributes<HTMLInputElement> &
		FieldHookConfig<string>
) {
	const [field, meta] = useField(props);

	const editorRef = useRef(null);
	const log = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
	};
	return (
		<div className="relative">
				 <Field
					
					 name={props.name}
					 id={props.label}
					 
					 className={`peer block h-40 max-h-40 min-h-full w-full appearance-none rounded-lg bg-gray-medium
						 p-2.5 text-base text-light-bg focus:border-2 focus:bg-transparent
						 focus:outline-none focus:ring-0${
							 meta.error ? " border-red-ufal" : "focus:border-blue-ufal"
						 }`}
					
				 >
				{({ field: any, meta }) => (
				<Editor
				
				
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>This is the initial content of the editor.</p>"
         init={{
					 height: 500,
           menubar: false,
           plugins: [
						 'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
						],
						toolbar: 'undo redo | formatselect | ' +
						'bold italic backcolor | alignleft aligncenter ' +
						'alignright alignjustify | bullist numlist outdent indent | ' +
						'removeformat | help',
						content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
				 }}
				 onEditorChange={(content, editor) => {
					console.log(content);
				}}
				textareaName='description'
				onChange={field.onChange}
				onBlur={field.onBlur}
				
					/>			 
					
					)}
			
				</Field>

			<CardLabel
				name={props.name}
				label={props.label}
				textareaid={props.textareaid}
			/>

			{meta.error && meta.touched ? (
				<span className="text-sm text-red-ufal">{meta.error}</span>
			) : null}
		</div>
	);
}
