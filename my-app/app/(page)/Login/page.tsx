
"use client";

import { useState } from "react";
import "./login.css";
import { useRouter } from "next/navigation";

/**
 * TODO メモ
 * - min-h-screen
 * - flex items-center justify-center
 * - bg-cover bg-center
 * - bg-black/80
 * - flex-col
 * - useRouterとは？
 */

/**
 * ログイン画面
 */
function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter()

    const handleLogin = () => {
        if (email === "test" && password === "test") {
            router.push("/Top")
        } else {
            alert("メールアドレスまたはパスワードが違います");
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url(/backGround.jpg)" }}
        >
            <div className="w-[400px] bg-black/80 p-6 rounded flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold text-white">Login</h2>

                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full text-white border border-gray-600 px-3 py-2 rounded placeholder-gray-400"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full text-white border border-gray-600 px-3 py-2 rounded placeholder-gray-400"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full bg-red-600 text-white py-2 font-bold" onClick={handleLogin}>
                    Login
                </button>

                <p className="text-gray-400 text-sm text-center">
                    初めてご利用ですか？&emsp;
                    <a href="#" className="underline text-white">
                        新規登録はこちら
                    </a>
                </p>
            </div>
        </div>
    );
}


export default LoginPage;
