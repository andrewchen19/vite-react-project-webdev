import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";

const ProjectsCard = ({ img, url, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img src={img} alt={title} className="w-full object-cover rounded-t-lg" />
      <div className="p-8">
        <h4 className="text-xl mt-2 font-bold capitalize">{title}</h4>
        <p className="mt-2 text-slate-600">{text}</p>
        <div className="mt-3 flex gap-x-6">
          <a href={url}>
            <TbWorldWww className="w-6 h-6 text-sky-500 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="w-6 h-6 text-sky-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
