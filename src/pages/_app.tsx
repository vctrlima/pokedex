import { ThemeProvider } from "next-themes";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
