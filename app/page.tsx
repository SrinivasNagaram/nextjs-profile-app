export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center">
        <h1 className="text-5xl font-extrabold pb-3">Srinivas Nagaram</h1>
        <h2 className="pb-3 text-xl font-thin">Sr. Software Engineer</h2>
      </header>
      <main className="flex flex-col gap-8 row-start-2 sm:items-start text-center">
        <ul>
          <li className="pb-1">
            <a
              className="text-sm underline text-indigo-600"
              href="https://www.linkedin.com/in/srinivasnagaram/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn/SrinivasNagaram
            </a>
          </li>
          <li className="pb-1">
            <a
              className="text-sm underline text-indigo-600"
              href="https://github.com/SrinivasNagaram"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub/SrinivasNagaram
            </a>
          </li>
          <li className="pb-1">
            <a
              className="text-sm underline text-indigo-600"
              href="https://x.com/SrinivasNagaram"
              target="_blank"
              rel="noopener noreferrer"
            >
              X/SrinivasNagaram
            </a>
          </li>
          <li className="pb-1">
            <a
              className="text-sm underline text-indigo-600"
              href="https://www.instagram.com/srinivas.nagaram/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram/SrinivasNagaram
            </a>
          </li>
        </ul>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-left">
        <p className="font-thin text-sm">
          © 2024 SrinivasNagaram. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
