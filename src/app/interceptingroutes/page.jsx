import Link from "next/link";

export default function F1() {
    return (

        <>
            <h1>Intercepting F1 page </h1>
            <div>
                <Link href="/interceptingroutes/subintercepting"> F2 page</Link>
            </div>
        </>
    );
}