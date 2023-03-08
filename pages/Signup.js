import React, { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/signup.module.scss";
import btnStyles from "../styles/buttonTest.module.css";
import Image from 'next/image';
import axios from "axios";

async function createUser(
  name,
  email,
  password,
  passwordChack,
  nickname
) {

  //CREATE ==  POST
  //READ == GET
  //UPDATE == PUT
  //DELETE == DELETE
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, email, password, passwordChack, nickname, }),
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
  const [idchack, setIdchack] = useState();

  const [genderBtn, setGenderBtn] = useState('a');
  const [ddaybtn, setDdayBtn] = useState(false)

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
      // console.log(result);
      setFormStatus(`회원가입 성공: ${result.message}`);
      // window.location.href = "/";
      router.replace("/");
    } catch (error) {
      // console.log(error);
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

  function aaa() {
    alert('aaa')
  }

  async function IDchack() {
    let target = nameInputRef.current.value;

    await axios.get('/api/auth/signup', {
      params: {
        id: target
      }
    }).then((aa) => {
      setIdchack(aa.data.message)
    })
  }

  const toggle = () => {
    setDdayBtn(ddaybtn => !ddaybtn);
  }

  const prorileChangeA = () => {
    console.log('aaa')
  }
  const prorileChangeB = () => {
    console.log('bbb')
  }
  const prorileChangeC = () => {
    console.log('ccc')
  }
  const prorileChangeD = () => {
    console.log('ddd')
  }
  return (
    <div className={styles.SignupPage}>
      <div className={styles.smile}><Image src="/img/edit/smile.png" width={100} height={100} alt='' ></Image></div>
      <div className={styles.Logo}>
        <h1>Sign Up</h1>
      </div>
      <form onSubmit={submitHandler}>
        {/* 이름 */}
        <div className={styles.Name}>
          <label htmlFor="name">
            아이디
          </label><br></br>
          <input
            id="name"
            type="text"
            placeholder="아이디를 입력해 주세요"
            required
            ref={nameInputRef}
          /><button type="button" onClick={IDchack}>중복확인</button>
          <p>{idchack}</p>
        </div>
        {/* 이메일 */}
        <div className={styles.Email}>
          <label htmlFor="email">
            이메일
          </label><br></br>
          <input
            id="email"
            type="text"
            placeholder="이메일"
            required
            ref={emailInputRef}
          />
        </div>
        {/* 비밀번호 */}
        <div className={styles.password}>
          <label htmlFor="password">
            비밀번호
          </label><br></br>
          <input
            id="password"
            type="password"
            required
            ref={passwordInputRef}
          />


        </div>
        {/* 비밀번호 확인 */}
        <div className={styles.passwordChack}>
          <label htmlFor="passwordChack">
            비밀번호 확인
          </label><br></br>
          <input
            id="passwordChack"
            type="password"
            required
            ref={passwordChackInputRef}
          />
        </div>

        {/* 닉네임 */}
        <div className={styles.nickname}>
          <label htmlFor="nickname">
            닉네임
          </label><br></br>
          <input
            id="nickname"
            type="text"
            placeholder="닉네임"
            required
            ref={nicknameInputRef}
          /><button>중복확인</button>
        </div>

        {/* 성별 */}
        <div className={styles.Gender}>
          <p>본인선택</p>
          <div className={styles.genbtn}>
            <button type="button" className={genderBtn === 'a' ? `${styles.btn} ${styles.active}` : `${styles.btn}`} onClick={() => setGenderBtn('a')} >신부님</button>
            <button type="button" className={genderBtn === 'b' ? `${styles.btn} ${styles.active}` : `${styles.btn}`} onClick={() => setGenderBtn('b')} >신부님</button>
          </div>
        </div>

        {/* 예식일 */}
        <div className={styles.d_day}>
          <p>예식일</p>
          <div className={styles.ddaycont}>
            <input type="date" placeholder="2030년 12월31일" ></input>
            <button type="button" onClick={() => toggle()} className={ddaybtn === false ? `${styles.bttn} ${styles.active}` : `${styles.bttn}`}>아직 결정 되지 않았어요</button>
          </div>
        </div>

        {/* 프로필 */}
        <div className={styles.profile}>
          <p>프로필</p>
          <div className={styles.proCont}>
            <div className={styles.left}>
              <div><Image src="/img/signup/Group-1.png" width={50} height={50} alt='' ></Image></div>
            </div>
            <div className={styles.right}>
              <div onClick={() => prorileChangeA()}><Image src="/img/signup/Group.png" width={50} height={50} alt='' ></Image></div>
              <div onClick={() => prorileChangeB()}><Image src="/img/signup/Group-1.png" width={50} height={50} alt='' ></Image></div>
              <div onClick={() => prorileChangeC()}><Image src="/img/signup/Group-2.png" width={50} height={50} alt='' ></Image></div>
              <div onClick={() => prorileChangeD()}><Image src="/img/signup/Group-3.png" width={50} height={50} alt='' ></Image></div>
            </div>
          </div>
        </div>

        <p>
          {/* Please choose a password. */}
          {formStatus}
        </p>

        <div className={btnStyles.wrapper}>
          <div className={btnStyles.container}>
            <button type="submit" className={`${btnStyles.button} ${btnStyles.btnPush} ${btnStyles.btnBlueGreen}`}>SIGN UP
              {/* <style jsx>{`
                a {text-decoration: none;}
                `}</style> */}
            </button>
          </div>
        </div >
      </form>
    </div >
  );
};
