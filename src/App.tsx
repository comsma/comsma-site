import Biography from "./components/Biography.tsx";
import {
  Card,
  CardContent, CardDescription, CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Button } from "@/components/ui/button.tsx";
import { FolderGit, GlobeIcon } from "lucide-react";

function App() {
  return (
    <div className={"my-0 px-4"}>
      <div className={"max-w-3xl mx-auto"}>
        <Biography />
        <Projects />
      </div>
    </div>
  );
}

const projectData = [
  {
    title: "Yahtzmen Furnishings",
    description:
      "The project is an online store offering product management, catalogue navigation, and a\n" +
      "                          checkout system. It employs the Next.js framework for the frontend and a GoLang-based API,\n" +
      "                          utilizing MongoDB for storage and Stripe for transactions.",
    logo: "/images/projects/yahtzmen.webp",
    site: "https://yahtzmen.com",
    repo: "https://github.com/comsma/yahtzmen",
  },
  {
    title: "Dyer Construction",
    description:
      "I developed a project management portal for Dyer Construction using languages PHP and Typescript with technologies such as Laravel, React, Tailwind, and MySQL. The portal allows employees to manage what accounts can view and manage, create new project objects, and upload files to the projects.",
    logo: "/images/projects/DC-Logo.png",
    repo: "https://github.com/comsma/dyer-construciton",
  },
];
function Projects() {
  return (
    <div className={"mx-auto"}>
      <h1 className={"font-bold tracking-wide text-2xl "}>Projects</h1>
      <div className={"pt-5 flex flex-col gap-4"}>
        {/*Project card*/}
        {projectData.map((project, index) => {
          return (
            <Card key={index}>
              <CardHeader className={"gap-4"}>
                <CardTitle
                  className={
                    "flex flex-row items-end scroll-m-20 text-2xl font-semibold tracking-wide"
                  }
                >
                  {project.title}
                  <div className={"ml-auto pt-2"}>
                    <img
                      alt={""}
                      src={project.logo}
                      className={" object-center h-14 w-auto"}
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Separator />
                <p
                  className={
                    "leading-7 tracking-wide [&:not(:first-child)]:mt-6"
                  }
                >
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className={"gap-4"}>

                {project.site && (
                  <Button size={"sm"} asChild>
                    <a href={project.site} target={"_blank"}>Visit Site <GlobeIcon className={"ml-2 w-4 h-4"} /></a>
                  </Button>
                )}
                {project.repo && (
                  <Button variant={"secondary"} size={"sm"} asChild>
                    <a href={project.repo} target={"_blank"}>Visit Repo <FolderGit className={"ml-2 w-4 h-4"} /></a>
                  </Button>

                )}
              </CardFooter>
            </Card>
          );
        })}
        {/*    <div className={"bg-white rounded-md shadow-lg p-5 justify-center items-center flex flex-col md:flex-row"}>*/}
        {/*        <div className={"w-[40px] pt-2 aspect-square"}>*/}
        {/*            <img alt={""} src={'/images/projects/yahtzmen.webp'} className={" w-64px"}/>*/}

        {/*        </div>*/}
        {/*        <div className={"pl-5 flex-1 md:text-sm pt-2"}>*/}
        {/*            <h1 className={"font-bold text-xl"}>Yahtzmen Furnishings</h1>*/}
        {/*            <p className={"text-lg"}></p>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className={"mt-5 bg-white rounded-md shadow-lg p-5 justify-center items-center flex flex-col md:flex-row"}>*/}
        {/*        <div className={"w-[40px] pt-2 aspect-square"}>*/}
        {/*            <img alt={""} src={'/images/projects/DC-Logo.png'} className={"w-auto filter"}/>*/}

        {/*        </div>*/}
        {/*        <div className={"pl-5 flex-1 text-base md:text-sm pt-2"}>*/}
        {/*            <h1 className={"font-bold"}>Dyer Construction</h1>*/}
        {/*            <p></p>*/}
        {/*        </div>*/}
        {/*    </div>*/}
      </div>
    </div>
  );
}

export default App;
