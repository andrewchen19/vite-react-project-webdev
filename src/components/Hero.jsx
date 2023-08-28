import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-sky-500 py-24">
      <div className="align-element grid items-center md:grid-cols-2 md:gap-2 ">
        {/* info */}
        <article className="md:text-center">
          <h2 className="text-6xl font-bold">I'm Andrew</h2>
          <p className="mt-4 text-3xl text-slate-700 tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 tracking-wide capitalize">
            turning ideas into interactive reality
          </p>
          <div className="mt-4 flex gap-x-4 md:justify-center">
            <a href="#">
              <FaGithubSquare className="h-6 w-6 text-slate-700 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-6 w-6 text-slate-700 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-6 w-6 text-slate-700 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        {/* image */}
        <article className="hidden md:block md:max-w-sm">
          <img src={heroImg} alt="hero image" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
