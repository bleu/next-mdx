"use client";

export default function Button({children, joana}) {
    return <button onClick={()=> console.log("LOL")}>{joana}: {children}</button>
}