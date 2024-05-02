import Image from "next/image";
import { Commits } from "@/components/commits";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="lg:max-w-2xl lg:w-full bg-white p-6 ">
          <h1 className="text-4xl font-bold mb-2 text-black">Akos Madarasz</h1>
          <h2 className="text-2xl text-gray-600">Software Engineer</h2>
          <a
            href="https://github.com/projectaki"
            target="_blank"
            className="mt-4 px-6 py-3 bg-slate-800 text-white rounded hover:bg-slate-900 transition duration-300 ease-in-out inline-block"
          >
            GitHub
          </a>

          {/* <Commits /> */}
        </div>
      </div>
    </main>
  );
}
