import Head from "next/head";
import Services from "../ServicesOrder";
import { Layout } from "../../../components/Layout";

export default function ServicesOrder() {
  return (
		<Layout>
			<Head>
				<title>{"Services"}</title>
			</Head>
			<Services />
		</Layout>
	);
}