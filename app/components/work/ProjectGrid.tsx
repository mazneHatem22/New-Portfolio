import ProjectCard from "./ProjectCard";
import { ProjectProps } from "../../types/project";
import React, { useEffect, useState } from "react";
import getProjects from "../../service/GetProjectDetails";
import { lex } from "../../helper/lex";
import AnimatedTitle from "../../animations/AnimatedTitle";

const ProjectGrid = () => {
  const [projects, setProjects] = useState<any>([
    {
  "available": true,
  "demo": "https://we-book-task.vercel.app/",
  "description": "A high-performance web application built with Next.js, TypeScript, Tailwind CSS, and PWA support.",
  "github": "https://github.com/mazneHatem22",
  "id": 1,
  "image": "https://firebasestorage.googleapis.com/v0/b/ahmedmagraby-app.appspot.com/o/Screenshot%202024-08-04%20at%2011.16.07%E2%80%AFAM.png?alt=media&token=b9c3995d-4e56-40d9-ac35-12a00f7df1ce",
  "name": "E-Commerce Starter Template",
  "sortId": "1",
  "techNames": [
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "PWA",
    "Vercel", 
  ]
},
    {
  "available": true,
  "demo": "https://we-book-task.vercel.app/",
  "description": "A high-performance web application built with Next.js, TypeScript, Tailwind CSS, and PWA support.",
  "github": "https://github.com/mazneHatem22",
  "id": 2,
  "image": "https://firebasestorage.googleapis.com/v0/b/ahmedmagraby-app.appspot.com/o/Screenshot%202024-08-04%20at%2011.16.07%E2%80%AFAM.png?alt=media&token=b9c3995d-4e56-40d9-ac35-12a00f7df1ce",
  "name": "E-Commerce Starter Template",
  "sortId": "2",
  "techNames": [
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "PWA",
    "Vercel"
  ]
}
  ]);
 

  return (
    <>
      <div className="flex gap-16 mb-10 md:mb-16 lg:mb-20 ">
        <AnimatedTitle
          text={"Selected Work!"}
          className={` ${lex.className} text-t-color text-lg font-light md:text-xl lg:text-2xl`}
          wordSpace={"mr-[8px]"}
          charSpace={"mr-[0.001em]"}
        />
      </div>

      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-7xl lg:grid-cols-1">
        {projects.map((project: ProjectProps, index: number) => (
          <ProjectCard
            id={index}
            key={project.id}
            name={project.name}
            description={project.description}
            techNames={project.techNames}
            github={project.github}
            demo={project.demo}
            image={project.image}
            available={project.available}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;
