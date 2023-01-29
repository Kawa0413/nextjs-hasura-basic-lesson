import { VFC } from "react";
import { todoVar } from "../cache";
import { useReactiveVar } from "@apollo/client";
import Link from "next/dist/client/link";

// 更新されたコンポーネントからtodoVarの中身を読みにいく→reduxのようなことができるようになる

export const LocalStateB: VFC = () => {
    const todos = useReactiveVar(todoVar)
    return (
        <>
            {todos.map((task, index) => {
                return (
                    <p className="mb-3" key={index}>{task.title}</p>
                )
            })}
            <Link href="/local-state-a">
                <a>Back</a>
            </Link>
        </>
    )
}