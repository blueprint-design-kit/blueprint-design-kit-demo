import Image from "next/image";
import Link from "next/link";
import UserSummary from "./components/Server/Molecules/UserSummary";
import { LOCALES } from "./constants/locales";
import { notFound } from "next/navigation";

export default async function Home({ params }) {
    const urlParams = await params;
    const locale = decodeURIComponent(urlParams.locale || '');
    if (!LOCALES.includes(locale)) {
        notFound();
    }

    return (
        <main style={{ maxWidth: 500, margin: "0 auto", padding: "2rem" }}>
            <div
                style={{
                    backgroundColor: "#1b272f",
                    color: "#eae0cf",
                    padding: "4rem 3rem",
                    borderRadius: "8px",
                    textAlign: "center",
                }}
            >
                <h2 style={{ color: "#c6a870", fontWeight: "bold" }}>
                    This is a Next.js Demo App
                </h2>
                <p>
                    Navigate to /blueprint or click here to see this app&apos;s
                    <br />
                    <Link href={`${locale}/blueprint`} style={{ color: "#c7dbe4" }} prefetch={false}>
                        Gallery of UI Components &raquo;
                    </Link>
                </p>
            </div>
            <div
                style={{
                    backgroundColor: "#cdd5d9",
                    padding: "1rem",
                    borderRadius: "8px",
                    textAlign: "center",
                    marginTop: "1rem",
                }}
            >
                <p>
                    Powered by <br />
                    <Link
                        href="https://github.com/blueprint-design-kit/blueprint-design-kit"
                        style={{ color: "#438cc0" }}
                        prefetch={false}
                    >
                        Blueprint Design Kit
                    </Link>
                    &nbsp;
                    <Link href="https://github.com/blueprint-design-kit/blueprint-design-kit" prefetch={false}>
                        <Image
                            src="/blueprint-logo.png"
                            alt="Blueprint Logo"
                            width="28"
                            height="28"
                            style={{
                                verticalAlign: "middle",
                                borderRadius: 6,
                                border: "1px solid #1b272f",
                            }}
                        />
                    </Link>
                </p>
            </div>

            <UserSummary />
        </main>
    );
}
