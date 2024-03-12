import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'


export default function Home({ posts }) {
  return (
    <div className="container mx-auto flex flex-col">
      <div
        className="my-auto mb-8 mt-12 w-full grid-cols-1 justify-center md:flex md:gap-5 lg:grid lg:grid-cols-2"
      >
        <div
          className="col-span-1 flex flex-col justify-center text-center md:w-3/5 lg:w-full lg:justify-center lg:text-left"
        >
          <div className="mb-4 flex items-center justify-center lg:justify-start">
            <h4 className="ml-2 text-sm font-bold tracking-widest text-primary">
              Next-Langchain-Tauri
            </h4>
          </div>
          <h1
            className="title mb-8 text-4xl font-extrabold leading-tight text-dark-grey-900 lg:text-5xl xl:w-11/12 xl:text-6xl"
          >
            Langchain.js desktop app @Multi-Agent
          </h1>
          <p
            className="mb-10 text-base font-medium leading-7 text-dark-grey-600 xl:w-3/4"
          >
            combines the power of Next.js for frontend development, Langchain.js for AI processing, and Tauri for packaging the application as the desktop app.
          </p>
        </div>
        <div className="col-span-1 items-center justify-end lg:flex">
          <img
            className="rounded-2xl"
            src="https://img2.imgtp.com/2024/03/11/VPCHAmu4.png"
            alt="header image"
          />
        </div>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://github.com/etrobot/next-langchain-tauri/releases"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Download{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Download released packages for free.
          </p>
        </a>

        <a
          href="https://github.com/etrobot/next-langchain-tauri"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Source Code{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Learn about the source code on github.
          </p>
        </a>

        <a
          href="https://github.com/songquanpeng/one-api"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Free Key{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Find out how to get free gpt api keys.
          </p>
        </a>

        <a
          href="https://nextjs.org/docs/pages/building-your-application/deploying"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site.
          </p>
        </a>
      </div>
    </div>
  )
}
