import Head from "next/head";
import { PageLanding } from "../components/PageLanding";

export default function Home() {
    return (
        <div className="font-sans">
            <Head>
                <title>Pokédex | Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageLanding />
        </div>
    );
}
