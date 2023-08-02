import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="flex justify-between p-2">
      <div className="flex gap-2 p-2">
        <Link className="p-2 text-white bg-teal-800 rounded-xl" href="/">
          Menu
        </Link>
        <Link className="p-2 text-white bg-teal-800 rounded-xl" href="/">
          News
        </Link>
        <Link className="p-2 text-white bg-teal-800 rounded-xl" href="/">
          Weather
        </Link>
        <Link className="p-2 text-white bg-teal-800 rounded-xl" href="/">
          Events
        </Link>
      </div>
      <div className="flex gap-2 p-2">
        <Link className="p-2 text-white bg-teal-800 rounded-xl" href="/">
          Log In
        </Link>
        <Link className="p-2 text-white bg-teal-800 rounded-xl" href="/">
          Sign In
        </Link>
      </div>
    </nav>
  );
}
