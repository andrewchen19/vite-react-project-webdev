import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-2xl">
      <div className="align-element py-4 flex flex-col gap-y-3 sm:flex-row sm:gap-x-16 sm:items-center sm:py-4">
        <h2 className="text-3xl font-bold">
          Web<span className="text-sky-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-sky-500 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
