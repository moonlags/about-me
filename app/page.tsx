import {
  ArrowDown,
  Atom,
  GanttChartSquare,
  Hand,
  Hexagon,
  Layers,
  SquareCode,
} from "lucide-react";
import Project from "./components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-blue-50 w-screen px-10 py-5 shadow-md">
        <div className="flex flex-row gap-7 items-center">
          <p className="text-gray-800 font-bold mx-auto text-2xl">About Me</p>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center p-10">
        <p className="text-3xl font-bold text-gray-800 m-5 flex flex-row gap-3 items-center">
          <Hand className="w-10 h-10" />
          Hello, my name is Alexander!
        </p>
        <p className="text-xl font-semibold text-gray-700 max-w-xl text-center">
          I am 15 years old developer, with programming expierence using C++,
          GoLang, JavaScript, TypeScript, Node.js, MySQL and MongoDB.
        </p>
        <p className="text-lg font-semibold text-gray-600 mt-12">
          But my main tech stack is:
        </p>
      </div>
      <div className="mt-4 flex justify-center place-items-center mx-5">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-5">
            <a href="https://go.dev/">
              <div className="hover:scale-110 duration-500 hover:shadow-xl rounded-lg items-center flex flex-row bg-cyan-100 max-w-xl">
                <div className="flex flex-col gap-1 pl-10 py-5">
                  <p className="text-3xl font-bold text-gray-800">GoLang</p>
                  <p className="font-semibold text-gray-700 max-w-md">
                    <strong>GoLang</strong> is a statically typed, compiled
                    high-level programming language designed at Google.
                  </p>
                </div>
                <Image
                  src={"/gopherIcon.png"}
                  alt="gopher icon"
                  width={96}
                  height={1}
                  className="ml-auto h-30 mt-5 mr-5 mb-5"
                />
              </div>
            </a>
            <a href="https://www.typescriptlang.org/">
              <div className="hover:scale-110 duration-500 hover:shadow-xl rounded-lg items-center max-w-xl flex flex-row bg-blue-200">
                <div className="flex flex-col gap-1 pl-10 py-5">
                  <p className="text-3xl font-bold text-gray-800">TypeScript</p>
                  <p className="font-semibold text-gray-700 max-w-md">
                    <strong>TypeScript</strong> is a free and open-source
                    high-level programming language developed by Microsoft.
                  </p>
                </div>
                <Image
                  src={"/typescriptIcon.png"}
                  alt="typescript icon"
                  width={75}
                  height={1}
                  className="ml-auto mt-5 mr-8 mb-5 rounded-md h-20"
                />
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <a href="https://react.dev/">
              <div className="hover:scale-110 duration-500 hover:shadow-xl items-center rounded-lg flex flex-row max-w-xl bg-blue-100">
                <div className="flex flex-col gap-1 pl-10 py-5">
                  <p className="text-3xl font-bold text-gray-800">React</p>
                  <p className="font-semibold text-gray-700 max-w-sm">
                    <strong>React</strong> is a free and open-source front-end
                    JavaScript library for building user interfaces based on
                    components.
                  </p>
                </div>
                <Image
                  src={"/React-icon.svg"}
                  alt="react icon"
                  width={90}
                  height={1}
                  className="ml-auto h-20 mt-5 mr-5 mb-5"
                />
              </div>
            </a>
            <a href="https://www.mysql.com/">
              <div className="hover:scale-110 duration-500 hover:shadow-xl flex flex-row max-w-xl items-center bg-cyan-200 rounded-lg">
                <div className="flex flex-col gap-1 pl-10 py-5">
                  <p className="text-3xl font-bold text-gray-800">MySQL</p>
                  <p className="font-semibold text-gray-700 max-w-md">
                    <strong>MySQL</strong> is an open-source relational database
                    management system.
                  </p>
                </div>
                <Image
                  src={"/mysqlIcon.png"}
                  alt="mysql icon"
                  width={90}
                  height={1}
                  className="ml-auto h-20 mt-5 mr-5 mb-5"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 mx-auto w-10 h-10 animate-bounce flex items-center rounded-full mt-14">
        <ArrowDown color="#000000" className="m-auto" />
      </div>
      <div className="flex justify-center flex-col items-center mb-10 max-w-6xl mx-5 xl:mx-auto mt-10 border-2 pt-5 px-5 pb-20 bg-gray-50 border-blue-100 rounded-xl hover:border-blue-200 duration-1000">
        <p className="text-gray-700 font-semibold text-3xl flex flex-row gap-3 items-center">
          <GanttChartSquare className="w-10 h-10" />
          My Projects:
        </p>
        <div className="flex md:flex-row flex-col gap-7 justify-center flex-wrap items-center mt-10">
          <Project
            name="GoTodos"
            link="https://github.com/moonlags/GoTodos"
            imgpath="/gotodos.png"
            smdesc="Todo web app created using React + Express"
            desc="GoTodos is a simple web application I created using Node.js with its framework Express and React on frontend. For this project I used MongoDB. In this project I implemented custom JWT auth and cookie based sessions."
            tech={["Express", "React", "MongoDB", "Node.js", "JWT"]}
          />
          <Project
            name="Telegram Bot"
            link="https://github.com/moonlags/CameraTGBot"
            imgpath="/tgbot.png"
            smdesc="Bot for taking photos from camera"
            desc="This is Telegram bot created using GoLang and Python. While GoLang is used to fully write Telegram bot, with Python my dad created scripts to connect to camera and take photos from it."
            tech={["GoLang", "Python"]}
          />
          <Project
            name="Daily Cats"
            link="https://github.com/moonlags/daily-cats"
            imgpath="/cats.png"
            smdesc="Get random cats photos and gifs"
            desc="This is a simple web app used to get random images and gifs of cats. I created this mini project using JavaScript and React. I used cataas.com for API."
            tech={["JavaScript", "React"]}
          />
        </div>
      </div>
    </>
  );
}
