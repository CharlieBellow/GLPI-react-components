import { MagnifyingGlass } from "@/components/icons";

interface SearchProps extends React.HTMLAttributes<HTMLElement> {
  placeholder: string;
  theme?: "outline-gray" | "";
}

export default function Search(props: SearchProps) {
  return (
    <div
      className={`flex rounded-xl bg-white-strong-ice shadow-card ring-blue-ufal focus-within:ring-2 ${
        props.theme === "outline-gray" ? "ring-light-bg" : ""
      } items-center gap-1 px-2`}
      {...props}
    >
      <MagnifyingGlass size={20} className=" text-gray-text" />
      <label {...props} htmlFor="search" />
      <input
        {...props}
        type="text"
        name="search"
        placeholder={props.placeholder}
        className="max-w-[20rem] border-none bg-white-strong-ice py-2  text-base font-normal text-gray-text outline-none lg:w-[20rem] lg:max-w-full"
      />
    </div>
  );
}
