/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/HpTjNQe8PxK
 */
import Link from "next/link";

export function Landing() {
  const Branches = [
    { name: "Computer Science", code: "CSE" },
    { name: "Electrical ", code: "EE" },
    { name: "Mechanical", code: "ME" },
    { name: "Electronics and Communications", code: "ECE" },
    { name: "Civil", code: "CE" },
  ];

  return (
    <div key="1">
      <main className="w-full">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Previous Year Question Papers
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Access previous year question papers for all subjects.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Branches
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose your branch to view question papers.
              </p>
            </div>
            <div className="grid w-full gap-2 grid-cols-2 items-center justify-around md:grid-cols-3 lg:grid-cols-5">
              {Branches.map((b,index) => {
                return (
                  <Link
                    key={index}
                    className="flex w-48 h-28 items-center justify-center p-4 sm:p-8 rounded-md border border-gray-200 border-solid bg-white shadow-sm transition-all hover:translate-y-[-2px] hover:scale-110 hover:shadow-lg dark:border-gray-800 dark:hover:shadow-gray-950 duration-150 dark:text-gray-800 font-semibold"
                    href={`/Branches/${b.code}`}
                  >
                    {b.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t">
        <div className="container grid items-center justify-center gap-4 min-h-[100px] py-4 px-4 text-center md:px-6 md:grid-cols-2 lg:gap-10">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © 2023 College. All rights reserved.
          </div>
          <div className="space-x-4">
            <Link
              className="inline-block text-sm text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="inline-block text-sm text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}