import Biography from "./components/Biography.tsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

function App() {
  return (
    <div className={"bg-secondary text-secondary-foreground"}>
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
  },
  {
    title: "Dyer Construction",
    description:
      "I developed a project management portal for Dyer Construction using languages PHP and Typescript with technologies such as Laravel, React, Tailwind, and MySQL. The portal allows employees to manage what accounts can view and manage, create new project objects, and upload files to the projects.",
    logo: "/images/projects/DC-Logo.png",
  },
];
function Projects() {
  return (
    <div className={"mx-auto"}>
      <h1 className={"font-bold text-2xl "}>Projects</h1>
      <div className={"pt-5 flex flex-col gap-4"}>
        {/*Project card*/}
        {projectData.map((project, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={"w-[60px] pt-2 aspect-square"}>
                  <img alt={""} src={project.logo} className={" w-64px"} />
                </div>
                {project.description}
              </CardContent>
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
