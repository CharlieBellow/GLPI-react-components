import Head from "next/head";
import Services from "../ServicesOrder";


export default function ServicesOrder() {
  return (
		<>
			<Head>
				<title>{"Services"}</title>
			</Head>
			<Services />
		</>
	);
}