export default function Biography() {
  return (
    <div className={"bg-primary-700  pt-10"}>
      <div
        className={
          "mx-auto max-w-5xl place-items-center min-h-screen justify-center grid grid-cols-1 md:grid-cols-2 gap-4 "
        }
      >
        <div
          className={
            "col-span-1 flex flex-col justify-around p-5 text-primary-200"
          }
        >
          <div className={"text-3xl leading-relaxed text-primary-200"}>
            <h1>Hello I'm</h1>
            <p className={"font-bold"}>Collin Smallegan</p>
          </div>
          <div className={"flex flex-row justify-between pt-10"}>
            <div className={"w-6 h-6"}>
              <a href={"https://www.linkedin.com/in/comsma/"} target={"_blank"}>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    clip-rule="evenodd"
                  />
                  <path d="M3 5.012H0V15h3V5.012Z" />
                </svg>
              </a>
            </div>
            <div className={"w-6 h-6 hover:text-slate-300"}>
              <a href={"https://github.com/comsma"} target={"_blank"}>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className={"w-6 h-6 hover:text-slate-300"}>
              <a href={"mailto:hello@comsma.com"} target={"_blank"}>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={"col-span-1 p-5 md:col-start-2 max-w-md"}>
          <div
            className={
              "max-w-lg aspect-[4/3]  rounded-md overflow-clip shadow-md"
            }
          >
            <img
              className={"h-full w-full object-cover"}
              src={"/images/collin-portrait.jpg"}
              alt={"A photo of Collin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
