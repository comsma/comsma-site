import {Button} from "@/components/ui/button.tsx";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx";

export default function Biography() {
  return (
    <div className={"flex flex-row items-end my-20"}>

      <div className={"flex flex-col gap-8 flex-1"}>
        <div className={"scroll-m-20 text-2xl tracking-wide lg:text-4xl"}>
          <p>
            Hello I'm <br /><b>Collin Smallegan</b>
          </p>
        </div>
        <div
          className={"flex flex-row gap-8 items-stretch"}
        >
          <Button className={"text-foreground"} variant={"link"} size={"icon"} asChild>
            <a href={"https://www.linkedin.com/in/comsma/"} target={"_blank"}>
              <LinkedInLogoIcon className={"w-6 h-6"} />
            </a>
          </Button>
          <Button className={"text-foreground"} variant={"link"} size={"icon"} asChild>
            <a href={"https://github.com/comsma"} target={"_blank"}>
              <GitHubLogoIcon className={"w-6 h-6"} />
            </a>
          </Button>
          <Button className={"text-foreground"} variant={"link"} size={"icon"} asChild>
            <a href={"mailto:hello@comsma.com"} target={"_blank"}>
              <EnvelopeClosedIcon className={"w-6 h-6"} />
            </a>
          </Button>
        </div>
      </div>
      <Avatar className={'h-32 w-32'}>
        <AvatarImage
          src={"/images/collin-portrait.jpg"}
          alt={"A photo of Collin"}
        />
      </Avatar>

    </div>
  );
}
