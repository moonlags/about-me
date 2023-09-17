import { ArrowDown, Atom, Hexagon, Layers, SquareCode } from "lucide-react";
import Project from "./components/ProjectCard";

export default function Home() {
  return (
    <>
      <div className="bg-gray-300 w-screen px-10 py-5 shadow-md">
        <div className="flex flex-row gap-7 items-center">
          <p className="text-gray-950 font-semibold mx-auto text-2xl">
            About Me
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col place-items-center p-10">
        <p className="text-3xl font-bold text-gray-800 m-5">
          Hello, my name is Alexander!
        </p>
        <p className="text-xl font-semibold text-gray-700">
          I am 15 years old developer, with programming expierence
          <br /> using Python, C++, GoLang, JavaScript, TypeScript and Node.js.
        </p>
        <p className="text-lg font-semibold text-gray-600 mt-12">
          But my main tech stack is:
        </p>
        <div className="flex flex-row gap-1 mt-5 cursor-default">
          <p className="text-5xl text-green-400 font-bold hover:scale-110 duration-300">
            M
          </p>
          <p className="text-5xl text-yellow-400 font-bold hover:scale-110 duration-300">
            E
          </p>
          <p className="text-5xl text-blue-400 font-bold hover:scale-110 duration-300">
            R
          </p>
          <p className="text-5xl text-lime-400 font-bold hover:scale-110 duration-300">
            N
          </p>
        </div>
      </div>
      <div className="mt-5 flex justify-center place-items-center mx-5">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-5">
            <a href="https://www.mongodb.com/">
              <div className="hover:scale-110 duration-500 hover:shadow-xl rounded-lg flex flex-row bg-green-100">
                <div className="flex flex-col gap-1  px-10 py-5">
                  <p className="text-3xl font-bold text-gray-800">MongoDB</p>
                  <p className="font-semibold text-gray-700 max-w-md">
                    <strong>MongoDB</strong> is a source-available
                    cross-platform document-oriented database program.
                  </p>
                </div>
                <Layers color="#000000" className="ml-auto mt-5 mr-5" />
              </div>
            </a>
            <a href="https://expressjs.com/">
              <div className="hover:scale-110 duration-500 hover:shadow-xl rounded-lg flex flex-row bg-yellow-100">
                <div className="flex flex-col gap-1  px-10 py-5">
                  <p className="text-3xl font-bold text-gray-800">Express</p>
                  <p className="font-semibold text-gray-700 max-w-md">
                    <strong>Express</strong> is a minimal and flexible Node.js
                    web application framework that provides a robust set of
                    features for web and mobile applications.
                  </p>
                </div>
                <SquareCode color="#000000" className="ml-auto mt-5 mr-5" />
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <a href="https://react.dev/">
              <div className="hover:scale-110 duration-500 hover:shadow-xl rounded-lg flex flex-row bg-blue-100">
                <div className="flex flex-col gap-1  px-10 py-5">
                  <p className="text-3xl font-bold text-gray-800">React</p>
                  <p className="font-semibold text-gray-700 max-w-sm">
                    <strong>React</strong> is a free and open-source front-end
                    JavaScript library for building user interfaces based on
                    components.
                  </p>
                </div>
                <Atom color="#000000" className="ml-auto mt-5 mr-5" />
              </div>
            </a>
            <a href="https://nodejs.org/">
              <div className="hover:scale-110 duration-500 hover:shadow-xl flex flex-row bg-lime-100 rounded-lg">
                <div className="flex flex-col gap-1  px-10 py-5">
                  <p className="text-3xl font-bold text-gray-800">Node.js</p>
                  <p className="font-semibold text-gray-700 max-w-md">
                    <strong>Node.js</strong> is an open-source, cross-platform
                    JavaScript runtime environment.
                  </p>
                </div>
                <Hexagon color="#000000" className="ml-auto mt-5 mr-5" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 mx-auto w-10 h-10 animate-bounce flex items-center rounded-full mt-14">
        <ArrowDown color="#000000" className="m-auto" />
      </div>
      <div className="flex justify-center flex-col items-center mb-10 max-w-6xl mx-5 xl:mx-auto mt-10 border-2 pt-5 px-5 pb-20 border-gray-300 rounded-xl hover:border-gray-400 duration-1000">
        <p className="text-gray-700 font-semibold text-3xl">My Projects:</p>
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
