import Link from "next/link";

export default function SelectCountry() {
  return (
    <>
      <Link href="/itineraries">
        <a>England</a>
      </Link>
      <Link href="/itineraries">
        <a>Wales</a>
      </Link>
      <Link href="/itineraries">
        <a>Scotland</a>
      </Link>
      <Link href="/itineraries">
        <a>Northern Ireland</a>
      </Link>
    </>
  );
}
