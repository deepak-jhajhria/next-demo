
import Link from 'next/link'

const page = () => {
    return (
        <div className="container max-w-[800px] mx-auto pt-20">
            <ul className="flex flex-col gap-10">
                <li>
                    <Link className="font-sans text-4xl underline" href={"./topics/array"}>Array Examples --</Link>
                </li>
                <li>
                    <Link className="font-sans text-4xl underline" href={"./topics/map"}>Map Examples --</Link>
                </li>
            </ul>
        </div>
    )
}

export default page
