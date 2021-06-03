import Link from "next/link";
import Burger from "../Burger/burger";
import Menu from "../Menu/menu.jsx";

export default function Nav({ open, setOpen }) {
  return (
    <>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Link href="/">
        <a>UK TRAVEL GUIDE</a>
      </Link>
    </>
  );
}
