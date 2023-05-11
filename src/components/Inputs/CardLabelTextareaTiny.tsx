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
			className="absolute text-base peer-focus:bg-white-ice text-light-bg duration-300 transform
      -translate-y-5 scale-100 -top-1 origin-[0] peer-focus:px-2 peer-focus:text-blue-ufal
      peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:translate-x-1.5 peer-placeholder-shown:top-7
      peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
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
					 
					 className={`block px-2.5 pb-2.5 pt-2.5 h-40 min-h-full max-h-40 w-full text-base
						 text-light-bg bg-gray-medium focus:bg-transparent rounded-lg appearance-none
						 focus:outline-none focus:ring-0 focus:border-2 peer ${
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
				<span className="text-red-ufal text-sm">{meta.error}</span>
			) : null}
		</div>
	);
}
