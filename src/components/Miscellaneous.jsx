import React from "react";
import Container from "./common/Container";
import YTVideos from "./YTVideos";
import ArticlesIcon from "../Icnons/ArticlesIcon";

const Miscellaneous = () => {
  return (
    <Container>
      <div className="flex flex-col gap-y-12">
        <div className="flex flex-col md:flex-row md:gap-y-0 gap-y-5 justify-between p-4  ">
          <div className="flex-1 flex flex-col gap-8 py-6">
            <h2 className="text-2xl font-semibold text-zinc-900">
              <ArticlesIcon />{" "}
              <span className="ml-3 text-zinc-900">My Articles</span>
            </h2>
            <article className="group relative flex flex-col items-start  ">
              <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition   sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
                <a href="https://medium.com/@kumarvinayak490/do-we-need-third-party-state-managers-in-nextjs-application-7904ff7a7b0b">
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative z-10 text-zinc-600">
                    Do we need third party State Managers in NextJS application?
                  </span>
                </a>
              </h2>
              <time
                className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                dateTime="2022-11-08"
              >
                <span
                  className="absolute inset-y-0 left-0 flex items-center"
                  aria-hidden="true"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                </span>
                November 11, 2022
              </time>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                NextJs is powerful and solves a lot of problem out of the box
                which provides great developer experience. State Management is
                also key concept in managing the data flow with in the
                application and this is what the article covers.
              </p>
              <div
                aria-hidden="true"
                className="relative z-10 mt-4 flex items-center text-sm font-medium text-green-600"
              >
                Read article
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="ml-1 h-4 w-4 stroke-current"
                >
                  <path
                    d="M6.75 5.75 9.25 8l-2.5 2.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </article>
            <article className="group relative flex flex-col items-start  ">
              <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition   sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
                <a href="https://medium.com/@kumarvinayak490/5-important-javascript-concepts-to-know-before-learning-reactjs-822201ab158">
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative z-10 text-zinc-600">
                    5 Important JavaScript Concepts to know before learning
                    ReactJS
                  </span>
                </a>
              </h2>
              <time
                className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                dateTime="2022-04-10"
              >
                <span
                  className="absolute inset-y-0 left-0 flex items-center"
                  aria-hidden="true"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                </span>
                April 10, 2022
              </time>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Before delving into the world of ReactJS, it's crucial to grasp
                five fundamental JavaScript concepts that form the backbone of
                modern web development. These concepts serve as the cornerstone
                for understanding and effectively implementing ReactJS
                components, state management, and other advanced features.
              </p>
              <div
                aria-hidden="true"
                className="relative z-10 mt-4 flex items-center text-sm font-medium text-green-600"
              >
                Read article
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="ml-1 h-4 w-4 stroke-current"
                >
                  <path
                    d="M6.75 5.75 9.25 8l-2.5 2.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </article>
          </div>
          <div className="flex-1 flex justify-end " id="cv">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 flex flex-col justify-between">
              <h2 className="flex text-2xl font-semibold text-zinc-900">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-8 w-8 flex-none animate-bounce"
                >
                  <path
                    d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                    className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                  />
                  <path
                    d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                    className="stroke-zinc-400 dark:stroke-zinc-500"
                  />
                </svg>
                <span className="ml-3 text-zinc-900">Work Experience</span>
              </h2>
              <ol className="mt-6 space-y-4 flex flex-col gap-y-8">
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50  dark:ring-0">
                    <img
                      alt="logo3"
                      loading="lazy"
                      width={28}
                      height={28}
                      decoding="async"
                      data-nimg={1}
                      className="h-7 w-7"
                      style={{ color: "transparent" }}
                      src="/assets/images/ineuron_ai_logo.svg"
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 ">
                      iNeuron (PhysicsWallah)
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                      Software Engineer
                    </dd>
                    <dt className="sr-only">Date</dt>
                    <dd
                      className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                      aria-label="2011 until 2014"
                    >
                      <time dateTime={2023}>2023</time>{" "}
                      <span aria-hidden="true">—</span>{" "}
                      <time dateTime={2024}>Present</time>
                    </dd>
                  </dl>
                </li>
                <li className="flex gap-4">
                  <div className="relative overflow-hidden mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img
                      alt="logo2"
                      loading="lazy"
                      width={28}
                      height={28}
                      decoding="async"
                      data-nimg={1}
                      className="h-full w-full"
                      style={{ color: "transparent" }}
                      src="/assets/images/tcz_logo.png"
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900">
                      TechChefz
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                      Senior Associate - Technology
                    </dd>
                    <dt className="sr-only">Date</dt>
                    <dd
                      className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                      aria-label="2014 until 2019"
                    >
                      <time dateTime={2022}>2022</time>{" "}
                      <span aria-hidden="true">—</span>{" "}
                      <time dateTime={2023}>2023</time>
                    </dd>
                  </dl>
                </li>
                <li className="flex gap-4">
                  <div className="relative overflow-hidden mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img
                      alt="logo1"
                      loading="lazy"
                      width={32}
                      height={32}
                      decoding="async"
                      data-nimg={1}
                      className="h-full w-full"
                      style={{ color: "transparent" }}
                      src="/assets/images/techenutia_logo.jpeg"
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900">
                      Techenutia
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                      React Developer
                    </dd>
                    <dt className="sr-only">Date</dt>
                    <dd
                      className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                      aria-label="2019 until Present"
                    >
                      <time dateTime={2021}>2021</time>{" "}
                      <span aria-hidden="true">—</span>{" "}
                      <time dateTime={2022}>2022</time>
                    </dd>
                  </dl>
                </li>
              </ol>
              <a
                className="  inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-900 font-medium text-white hover:bg-zinc-700  bg-zinc-800/50  group mt-6 w-full"
                href="/assets/files/My Resume.pdf"
                download
              >
                Download CV
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
                >
                  <path
                    d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <YTVideos />
      </div>
    </Container>
  );
};

export default Miscellaneous;
