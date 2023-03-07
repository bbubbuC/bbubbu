import React, { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/signup.module.scss";

async function createUser(
  name,
  email,
  password,
  passwordChack,
  nickname
) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, email, password, passwordChack, nickname }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}


export default function Signup(props) {
  const [formStatus, setFormStatus] = useState();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordChackInputRef = useRef();
  const nicknameInputRef = useRef();

  const { status } = useSession();
  const router = useRouter();

  async function submitHandler(e) {
    e.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;
    const enteredPasswordChack = passwordChackInputRef.current?.value;
    const enteredNickname = nicknameInputRef.current?.value;

    // optional: Add validation

    try {
      const result = await createUser(
        enteredName,
        enteredEmail,
        enteredPassword,
        enteredPasswordChack,
        enteredNickname,
      );
      console.log(result);
      setFormStatus(`회원가입 성공: ${result.message}`);
      // window.location.href = "/";
      router.replace("/");
    } catch (error) {
      console.log(error);
      setFormStatus(`${error.message}`);
    }
  } // end of submitHandler function


  //로그인 되어있는데 회원가입을 누르면
  if (status === "authenticated") {
    router.replace("/");
    // return (
    //   <div>
    //     <h1>Sign Up</h1>
    //     <div>You are already signed up.</div>
    //     <div>Now redirect to main page.</div>
    //   </div>
    // );
  }

  return (
    <div>
      <div className={styles.Logo}>
        <h1>Sign Up</h1>
      </div>
      <form onSubmit={submitHandler}>
        {/* 이름 */}
        <div>
          <label htmlFor="name">
            이름 :
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            required
            ref={nameInputRef}
          />
        </div>
        {/* 이메일 */}
        <div>
          <label htmlFor="email">
            E-mail :
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            required
            ref={emailInputRef}
          />
        </div>
        {/* 비밀번호 */}
        <div>
          <label htmlFor="password">
            비밀번호 :
          </label>
          <input
            id="password"
            type="password"
            required
            ref={passwordInputRef}
          />


        </div>
        {/* 비밀번호 확인 */}
        <div>
          <label htmlFor="passwordChack">
            비밀번호 확인 :
          </label>
          <input
            id="passwordChack"
            type="password"
            required
            ref={passwordChackInputRef}
          />
        </div>

        {/* 닉네임 */}
        <div>
          <label htmlFor="nickname">
            닉네임 :
          </label>
          <input
            id="nickname"
            type="text"
            placeholder="닉네임"
            required
            ref={nicknameInputRef}
          />
        </div>

        <p>
          {/* Please choose a password. */}
          {formStatus}
        </p>


        <div>
          <button type="submit">
            회원가입 하기
          </button>
        </div>
      </form>
    </div >
  );
};
