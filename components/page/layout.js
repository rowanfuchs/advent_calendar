import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>GraphCMS Advent Calendar</title>
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}
