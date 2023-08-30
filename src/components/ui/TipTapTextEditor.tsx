"use client";

import { CharacterCount } from "@tiptapTextEditor/extension-character-count";
import { Placeholder } from "@tiptapTextEditor/extension-placeholder";
import { Subscript } from "@tiptapTextEditor/extension-subscript";
import { Superscript } from "@tiptapTextEditor/extension-superscript";
import { TextAlign } from "@tiptapTextEditor/extension-text-align";
import { Underline } from "@tiptapTextEditor/extension-underline";
import {
  EditorContent,
  EditorOptions,
  useEditor,
} from "@tiptapTextEditor/react";
import StarterKit from "@tiptapTextEditor/starter-kit";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Redo,
  Strikethrough,
  SubscriptIcon,
  SuperscriptIcon,
  UnderlineIcon,
  Undo,
} from "lucide-react";

import { Button } from "@/components/ui";

import { cn } from "@/Utils/cn";

type TipTapTextEditorProps = Partial<EditorOptions> & {
  limitCharacters?: number;
  placeholder?: string;
};

export function TipTapTextEditor({
  placeholder,
  limitCharacters,
  ...props
}: TipTapTextEditorProps) {
  const editor = useEditor({
    ...props,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      CharacterCount.configure({
        limit: limitCharacters,
      }),
      Superscript,
      Subscript,
      Placeholder.configure({
        placeholder: placeholder ?? "Comece a escrever...",
      }),
    ],
    editorProps: {
      attributes: {
        class: "prose-sm prose-neutral md:prose-base",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="w-full rounded-lg border border-zinc-300 text-zinc-900 shadow-md">
      <div className="border-b border-zinc-300">
        <div className="flex flex-wrap items-center gap-4 px-2 py-3">
          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive("bold"),
            })}
            onClick={() => {
              editor.chain().focus().toggleBold().run();
            }}
          >
            <Bold size={20} />
          </Button>
          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive("italic"),
            })}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <Italic size={20} />
          </Button>

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive("underline"),
            })}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            <UnderlineIcon size={20} />
          </Button>

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive("strike"),
            })}
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <Strikethrough size={20} />
          </Button>

          <hr aria-orientation="vertical" className="h-6 w-px bg-zinc-300" />

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive("superscript"),
            })}
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
          >
            <SuperscriptIcon size={20} />
          </Button>

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive("subscript"),
            })}
            onClick={() => editor.chain().focus().toggleSubscript().run()}
          >
            <SubscriptIcon size={20} />
          </Button>

          <hr aria-orientation="vertical" className="h-6 w-px bg-zinc-300" />

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive("heading", {
                level: 1,
              }),
            })}
            onClick={() =>
              editor.chain().focus().setHeading({ level: 1 }).run()
            }
          >
            <Heading1 size={20} />
          </Button>

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive("heading", {
                level: 2,
              }),
            })}
            onClick={() =>
              editor.chain().focus().setHeading({ level: 2 }).run()
            }
          >
            <Heading2 size={20} />
          </Button>

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive("heading", {
                level: 3,
              }),
            })}
            onClick={() =>
              editor.chain().focus().setHeading({ level: 3 }).run()
            }
          >
            <Heading3 size={20} />
          </Button>

          <hr aria-orientation="vertical" className="h-6 w-px bg-zinc-300" />

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive("bulletList"),
            })}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <List size={20} />
          </Button>

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive("orderedList"),
            })}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            <ListOrdered size={20} />
          </Button>

          <hr aria-orientation="vertical" className="h-6 w-px bg-zinc-300" />

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive({
                textAlign: "left",
              }),
            })}
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
          >
            <AlignLeft size={20} />
          </Button>

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive({
                textAlign: "center",
              }),
            })}
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
          >
            <AlignCenter size={20} />
          </Button>

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive({
                textAlign: "right",
              }),
            })}
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
          >
            <AlignRight size={20} />
          </Button>

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md", {
              "bg-tertiary-1/50": editor.isActive({
                textAlign: "justify",
              }),
            })}
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          >
            <AlignJustify size={20} />
          </Button>

          <hr aria-orientation="vertical" className="h-6 w-px bg-zinc-300" />

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md")}
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
          >
            <Undo size={20} />
          </Button>

          <Button
            theme="secondary"
            className={cn("w-fit h-fit p-2 rounded-md")}
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
          >
            <Redo size={20} />
          </Button>
        </div>
      </div>

      <div className="grid min-h-[150px] px-2 py-4">
        <EditorContent
          editor={editor}
          className="rounded border border-zinc-300 px-4 py-2"
        />

        {limitCharacters && (
          <div className="pt-2 text-xs text-zinc-500">
            {editor.storage.characterCount.characters()}/{limitCharacters}{" "}
            carácteres
            <br />
            {editor.storage.characterCount.words()} palavras
          </div>
        )}
      </div>
    </div>
  );
}
