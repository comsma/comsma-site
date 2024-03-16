import Biography from "./components/Biography.tsx";
import {SetTheme} from "./lib/theme.ts";

function App() {
    SetTheme()
  return (

      <>
          <Biography />
          <Projects />
      </>

  );
}
function Projects() {
    return (
      <div className={"p-5 max-w-xl mx-auto"}>
        <h1 className={"font-bold text-xl text-primary-900"}>Projects</h1>
          <div className={"pt-5"}>
              {/*Project card*/}
              <div className={"bg-white rounded-md shadow-lg p-5 justify-center items-center flex flex-col md:flex-row"}>
                  <div className={"w-[40px] pt-2 aspect-square"}>
                      <img alt={""} src={'/images/projects/yahtzmen.webp'} className={" w-64px"}/>

                  </div>
                  <div className={"pl-5 flex-1 text-xs md:text-sm pt-2"}>
                      <h1 className={"font-bold"}>Yahtzmen Furnishings</h1>
                      <p className={""}>The project is an online store offering product management, catalogue navigation, and a
                          checkout system. It employs the Next.js framework for the frontend and a GoLang-based API,
                          utilizing MongoDB for storage and Stripe for transactions.</p>
                  </div>
              </div>
              <div className={"mt-5 bg-white rounded-md shadow-lg p-5 justify-center items-center flex flex-col md:flex-row"}>
                  <div className={"w-[40px] pt-2 aspect-square"}>
                      <img alt={""} src={'/images/projects/DC-Logo.png'} className={"w-auto filter"}/>

                  </div>
                  <div className={"pl-5 flex-1 text-xs md:text-sm pt-2"}>
                      <h1 className={"font-bold"}>Dyer Construction</h1>
                      <p>I developed a project management portal for Dyer Construction using languages PHP and Typescript with technologies such as Laravel, React, Tailwind, and MySQL. The portal allows employees to manage what accounts can view and manage, create new project objects, and upload files to the projects.</p>
                  </div>
              </div>
          </div>

      </div>
    );
}

export default App;


