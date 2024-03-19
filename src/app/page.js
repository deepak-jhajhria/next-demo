import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="container max-w-[800px] mx-auto">
        <ul className="flex flex-col gap-10">
          <li>
            <Link className="font-sans text-4xl underline" href={"./topics"}>Click here</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
