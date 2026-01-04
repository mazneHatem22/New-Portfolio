import ProjectCard from "./ProjectCard";
import { ProjectProps } from "../../types/project";
import React, { useEffect, useState } from "react";
// import getProjects from "../../service/GetProjectDetails";
import { lex } from "../../helper/lex";
import AnimatedTitle from "../../animations/AnimatedTitle";

const ProjectGrid = () => {
  const [projects, setProjects] = useState<any>([
    {
  "available": true,
  "demo": "https://stoturee.vercel.app/",
  "description": "Stoture is a marketing and visual content production company that helps you achieve your ambitions",
  "github": "https://github.com/mazneHatem22",
  "id": 1,
  "image": "Stoture.png",
  "name": "Stoture Portfolio",
  "sortId": "1",
  "techNames": [
    "JavaScript",
    "React",
    "Css3",
    "Bootstrap 5",
    "Vercel", 
  ]
},
    {
  "available": true,
  "demo": "https://movies-app-five-psi.vercel.app/",
  "description": "A high-performance movie streaming web application",
  "github": "https://github.com/mazneHatem22",
  "id": 2,
  "image": "MovieApp.png",
  "name": "Movies App",
  "sortId": "2",
  "techNames": [
    "JavaScript",
    "React",
    "Css3",
    "Bootstrap 5",
    "Redux",
    "Vercel"
  ]
},
    {
  "available": true,
  "demo": "https://bio-medic.vercel.app/",
  "description": "A high-performance biomedical web application",
  "github": "https://github.com/mazneHatem22",
  "id": 3,
  "image": "BioMedic.png",
  "name": "Bio Medic portfolio",
  "sortId": "3",
  "techNames": [
    "Html5",
    "JavaScript",
    "Css3",
    "Bootstrap 5",
    "Vercel"
  ]
},
    {
  "available": true,
  "demo": "https://econnect-africa.com/",
  "description": "A high-performance biomedical company website for Econnect Africa",
  "github": "https://github.com/mazneHatem22",
  "id": 4,
  "image": "Econnect.png",
  "name": "Econnect Africa",
  "sortId": "4",
  "techNames": [
    "Html5",
    "JavaScript",
    "Css3",
    "Bootstrap 5",
    "Vercel"
  ]
},
    {
  "available": true,
  "demo": "https://portal-sudan.azurewebsites.net/Econnect",
  "description": "A high-performance biomedical company dashboard for Econnect Africa",
  "github": "https://github.com/mazneHatem22",
  "id": 5,
  "image": "Econnect-dashboard.png",
  "name": "Econnect Africa Dashboard",
  "sortId": "5",
  "techNames": [
    "Html5",
    "JavaScript",
    "Css3",
    "Bootstrap 5"
  ]
},
    {
  "available": true,
  "demo": "https://mighty-portal.azurewebsites.net//Mighty",
  "description": "A high-performance dashboard for Mighty, a nursery management company",
  "github": "https://github.com/mazneHatem22",
  "id": 6,
  "image": "Mighty.png",
  "name": "Mighty Dashboard",
  "sortId": "6",
  "techNames": [
    "Html5",
    "JavaScript",
    "Css3",
    "Bootstrap 5"
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
