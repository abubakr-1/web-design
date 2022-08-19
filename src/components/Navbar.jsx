import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = ({}) => {
  return (
    <main
      className={`flex justify-evenly items-center h-16 text-white font-mono sticky top-0 z-20 bg-neutral-900`}
    >
      <Link to="/" className="font-bold">
        SuperAnimate
      </Link>
      <div className="flex w-1/2 justify-around">
        <Link to="/about">About</Link>
        <Link to="/workstation">workstation</Link>
        <Link to="/samples">Samples</Link>
      </div>
    </main>
  );
};
export default Navbar;
