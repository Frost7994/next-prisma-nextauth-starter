// AUth
import { SessionProvider } from "next-auth/react";

// Styling
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <ThemeProvider attribute="class" enableSystem={false}>
                <Component {...pageProps} />
            </ThemeProvider>
        </SessionProvider>
    );
}

export default MyApp;
