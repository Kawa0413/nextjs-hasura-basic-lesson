// 入力フォームなどを設置して、ユーザーが新たにタスクを追加することができるようにする
import { ChangeEvent, FormEvent, useState, VFC } from "react";
import { todoVar } from "../cache";
import { useReactiveVar } from "@apollo/client";
import Link from "next/dist/client/link";

export const LocalStateA: VFC = () => {
    const [input, setInput] = useState('')
    const todos = useReactiveVar(todoVar)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // 現在の配列の中身を取得、それに現在入力されているinputを追加する
        todoVar([...todoVar(), {title: input}])
        setInput('')
    }
    return(
        <>
            <p className="mb-3 font-bold">makeVar</p>
            {todos?.map((task, index) => {
                return (
                    <p className="mb-3 y-1" key={index}>{task.title}</p>
                )
            })}
            {/* 新たにユーザーを追加するためのフォーム */}
            <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                {/* inputフォームとsubmitボタン */}
                <input 
                className="mb-3 px-3 border border-gray-300" 
                placeholder="New task ?" 
                value={input}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInput(e.target.value)
                }
                />
                <button
                disabled={!input}
                className="disabled:opacity-40 mb-3 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl focus:outline-none"
                type="submit"
                >Add new state</button>
            </form>
            <Link href="/local-state-b">
                <a>Next</a>
            </Link>
        </>
    )
}