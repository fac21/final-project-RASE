import Head from "next/head";
import Link from "next/link";
import Nav from "../Nav/Nav.jsx";

export const siteTitle = "UK Travel Guide";

export default function Layout({ children, home, open, setOpen }) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="an app allowing users to search and contribute itineraries for UK-based trips"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
        <Nav open={open} setOpen={setOpen} />
      </header>
      <main>{children}</main>
      {!home && (
        <div className="homeLink">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
