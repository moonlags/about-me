"use client";

import { Separator } from "@/components/ui/separator";
import { Cake, Code2, Locate, Users } from "lucide-react";
import Image from "next/image";
import NavMenu from "./components/NavMenu";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex flex-row justify-end px-20 py-3">
        <NavMenu />
      </div>
      <Separator />
      <div className="mt-[250px] flex flex-row justify-center gap-6 text-end ">
        <div className="flex flex-col">
          <p className="font-bold text-gray-700 text-3xl">
            Aleksandrs Klimanovs
          </p>
          <p className="text-gray-500">@moonlags</p>
          <p className="break-words max-w-md mt-4">
            Healthily addicted to programming. I really like programming and
            every day I improving myself through learning. Currently interested
            in Typescript and GoLang.
          </p>
        </div>
        <Image
          src={"/photo.png"}
          alt="my photo"
          width={200}
          height={200}
          className="rounded-full border-2 border-black"
        />
      </div>
      <div className="flex flex-col mt-4 gap-3 justify-center">
        <Separator className="w-[620px] mx-auto" />
        <div className="flex flex-row gap-10 w-[620px] mx-auto justify-between">
          <div className="flex flex-row gap-2 text-gray-500">
            <Code2 />
            <p>Full Stack</p>
          </div>
          <div className="flex flex-row gap-2 text-gray-500">
            <Locate />
            <p>Riga - Latvia</p>
          </div>
          <div className="flex flex-row gap-2 text-gray-500">
            <Cake />
            <p>May 1st</p>
          </div>
          <div className="flex flex-row gap-2 text-gray-500">
            <Users />
            <p>Sociable</p>
          </div>
        </div>
        <Separator className="w-[620px] mx-auto" />
        <div className="flex flex-row gap-16 justify-between mx-auto">
          <Image src={"/next.png"} alt="next-js" width={28} height={28} />
          <Image
            src={"/typescript.png"}
            alt="typescript"
            width={28}
            height={28}
            className="rounded-md"
          />
          <Image src={"/trpc.png"} alt="trpc" width={28} height={28} />
          <Image
            src={"/prisma.png"}
            alt="prisma"
            width={28}
            height={28}
            className="h-7"
          />
          <Image src={"/nextauth.png"} alt="nextAuth" width={28} height={28} />
          <Image
            src={"/tailwind.png"}
            alt="tailwind"
            width={24}
            height={24}
            className="w-10"
          />
          <Image src={"/postgres.svg"} alt="postgres" width={28} height={28} />
        </div>
      </div>
    </div>
  );
}
