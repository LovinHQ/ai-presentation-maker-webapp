import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <div className="mb-2 tracking-[-.01em]">
            To purchase this domain, please contact us at{" "}
            <a href="mailto:support@aipresentationmaker.app">
              <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                support@aipresentationmaker.app
              </code>
            </a>
            .
          </div>
        </div>
      </main>
    </div>
  );
}
