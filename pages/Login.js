import React, { useState, useRef } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/login.module.scss";
import Image from 'next/image';

export default function Login(props) {
    const [formStatus, setFormStatus] = useState();

    const nameInputRef = useRef();
    const passwordInputRef = useRef();

    async function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current?.value;
        const enteredPassword = passwordInputRef.current?.value;

        const result = await signIn("credentials", {
            redirect: false,
            name: enteredName,
            password: enteredPassword,
        });

        if (!result.error) {
            console.log('성공')
            setFormStatus(`로그인 성공!`);
            // router.replace("/");
        } else {
            setFormStatus(result.error);
        }
    } // end of submitHandler function

    const { data: session, status } = useSession();
    const router = useRouter();


    //로그인이 되어있으면 index페이지로
    if (status === "authenticated") {
        // router.replace("/");
        // return (
        //     <div>
        //         <h1>Log in</h1>
        //         <div>You are already logged in.</div>
        //         <div>Now redirect to main page.</div>
        //     </div>
        // );
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.smile}><Image src="/img/edit/smile.png" width={100} height={100} alt='' ></Image></div>
            <div className={styles.Logo}>
                <h1>
                    LOGIN
                </h1>
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <input
                        id="text"
                        type="text"
                        required
                        ref={nameInputRef}
                        placeholder="아이디를 입력해 주세요"
                    />
                </div>


                <div>
                    <input
                        id="password"
                        type="password"
                        required
                        ref={passwordInputRef}
                        placeholder="비밀번호를 입력해 주세요"
                    />

                    <p>
                        {/* Please choose a password. */}
                        {formStatus}
                    </p>
                </div>
                <div className={styles.loginbtn}>
                    <button type="submit">
                        <p>LOGIN</p>
                    </button>
                </div>
            </form>

            <div className={styles.toSignup}>
                <Link href="/Signup">회원가입하러가기</Link>
            </div>
        </div>
    );
};
