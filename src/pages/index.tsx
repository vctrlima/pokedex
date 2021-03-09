import Head from "next/head";
import { LandingPage } from "../components/LandingPage";

export default function Home() {
    return (
        <div className="font-sans text-ebony-clay">
            <Head>
                <title>Pokédex | Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LandingPage />
        </div>
    );
}
