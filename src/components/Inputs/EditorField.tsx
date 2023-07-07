import { Editor, IAllProps } from "@tinymce/tinymce-react";
import { useField } from "formik";
import { Editor as TinyMCEEditor } from 'tinymce';
// import { TinyAPIKEY, TinySCRIPT } from "config";
interface EditorFieldProps extends IAllProps {
    label?: string;
    name: string;
  }
  
  const EditorField = (props: EditorFieldProps) => {
    const {label, name, ...otherProps} = props;
    const [field, meta] = useField(name);
    const type = 'text';
    const handleEditorChange = (value: string, _editor: TinyMCEEditor) => {
      field.onChange({ target: { type, name, value } });
    };
  
    const handleBlur = (e: unknown, editor: TinyMCEEditor) => {
      field.onBlur({ target: { name } });
    };
    return (
      <div className="flex flex-col w-full">
        {label && <label>{label}</label>}
        <div className="bg-gray-medium rounded-lg">
        <Editor 
        apiKey="3enajksx9oylqgylfxulwceq3qb751gxke444j4ld79w9rz1"
        tinymceScriptSrc="https://cdn.tiny.cloud/1/3enajksx9oylqgylfxulwceq3qb751gxke444j4ld79w9rz1/tinymce/6/tinymce.min.js"
        init={{
            skin: "snow",
            icons: "thin",
            browser_spellcheck: true,
            placeholder: "Descreva o serviço...",
            statusbar: false,
            height: 350,  
            schema: 'html5',
            menubar: false,
                plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table contextmenu paste"
                  ],
                  textcolor_rows: "4",
                  toolbar:
                    "undo redo | bold italic strikethrough underline | fontsizeselect | bullist numlist | alignleft aligncenter alignright alignjustify | outdent indent | code"
        }}{...otherProps} value={field.value} onEditorChange={handleEditorChange} onBlur={handleBlur}></Editor>


        </div>
        {meta.touched && meta.error ? (
          <div className="text-red-500 pl-4 pb-4">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  export default EditorField;