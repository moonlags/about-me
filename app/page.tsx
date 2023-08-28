import { ArrowDown, Atom, FileCode, Layers, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-gray-300 w-screen px-10 py-5 shadow-md">
        <div className="flex flex-row gap-7 content-center">
          <Image
            alt=""
            className=""
            src={"/vercel.svg"}
            width={120}
            height={120}
          />
          <p className="text-gray-950 font-semibold ml-auto text-2xl">
            About Me
          </p>
        </div>
      </div>
      <div className="w-screen flex justify-center flex-col place-items-center">
        <p className="text-3xl font-bold text-gray-800 m-5">
          Hello, my name is Alexander!
        </p>
        <p className="text-xl font-semibold text-gray-700">
          I am 15 years old developer, with programming expierence
          <br /> using Python, C++, GoLang and JavaScript.
        </p>
        <p className="text-lg font-semibold text-gray-600 mt-12">
          But my main tech stack is:
        </p>
      </div>
      <div className="w-screen mt-10 flex justify-center place-items-center">
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-5">
            <a href="https://www.w3schools.com/html/html_css.asp">
              <div className="hover:scale-110 duration-500 hover:shadow-xl hover:border-2 border-0 border-gray-50 flex flex-row gap-0">
                <div className="flex flex-col gap-1  px-10 py-5">
                  <p className="text-3xl font-bold text-gray-800">HTML/CSS</p>
                  <p className="font-semibold text-gray-700">
                    HTML and CSS are two scripting languages
                    <br /> used to create web pages and web applications
                  </p>
                </div>
                <FileCode color="#000000" className="m-3 " />
              </div>
            </a>
            <a href="https://go.dev/">
              <div className="hover:scale-110 duration-500 hover:shadow-xl hover:border-2 border-0 border-gray-50 flex flex-row gap-0">
                <div className="flex flex-col gap-1  px-10 py-5">
                  <p className="text-3xl font-bold text-gray-800">GoLang</p>
                  <p className="font-semibold text-gray-700">
                    Go is a statically typed, compiled <br />
                    high-level programming language designed at Google
                  </p>
                </div>
                <ThumbsUp color="#000000" className="m-3" />
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <a href="https://react.dev/">
              <div className="hover:scale-110 duration-500 hover:shadow-xl hover:border-2 border-0 border-gray-50 flex flex-row gap-0">
                <div className="flex flex-col gap-1  px-10 py-5">
                  <p className="text-3xl font-bold text-gray-800">React</p>
                  <p className="font-semibold text-gray-700">
                    React lets you build user interfaces out of
                    <br /> individual pieces called components. <br />
                    Create your own React components like <br />
                    Thumbnail, LikeButton, and Video.
                    <br />
                    Then combine them into entire screens, pages, and apps
                  </p>
                </div>
                <Atom color="#000000" className="m-3" />
              </div>
            </a>
            <a href="https://www.mysql.com/">
              <div className="hover:scale-110 duration-500 hover:shadow-xl hover:border-2 border-0 border-gray-50 flex flex-row gap-0">
                <div className="flex flex-col gap-1  px-10 py-5">
                  <p className="text-3xl font-bold text-gray-800">MySQL</p>
                  <p className="font-semibold text-gray-700">
                    MySQL is an open-source relational database management
                    system
                  </p>
                </div>
                <Layers color="#000000" className="m-3" />
              </div>
            </a>
            <div className="bg-gray-200 mt-5 place-self-start animate-bounce rounded-full p-1 border-gray-300 border-2">
              <ArrowDown color="#000000" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mb-10 max-w-7xl mx-auto mt-10 border-2 pt-5 pb-20 border-gray-300 rounded-xl hover:border-gray-400 duration-1000">
        <p className="text-gray-800 font-semibold text-3xl">My Projects:</p>
        <div className="flex flex-row gap-5 justify-center items-center mt-10">
          <a href="https://github.com/moonlags/GoTodos">
            <div className="flex justify-center items-center hover:scale-110 flex-col gap-1 bg-gray-200 border-2 border-gray-400 shadow-md rounded-md p-1 hover:border-gray-500 duration-1000">
              <Image alt="" src={"/gotodos.png"} width={300} height={300} />
              <p className="font-semibold text-lg text-gray-700">GoTodos</p>
              <p className="text-gray-600 text-sm">
                Todo web app created using React + Go
              </p>
            </div>
          </a>
          <a href="https://github.com/moonlags/CameraTGBot">
            <div className="flex justify-center items-center hover:scale-110 flex-col gap-1 bg-gray-200 border-2 border-gray-400 shadow-md rounded-md p-1 hover:border-gray-500 duration-1000">
              <Image alt="" src={"/tgbot.png"} width={300} height={300} />
              <p className="font-semibold text-lg text-gray-700">
                Telegram Bot
              </p>
              <p className="text-gray-600 text-sm">
                Bot for taking photos from camera
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
