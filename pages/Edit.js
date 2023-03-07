import React from "react";
import styles from '@/styles/edit.module.scss';

const Edit = () => {
    function create(e) { 
        // e.preventDefault(e);
    }
    return(
        <main className={styles.main}>
            <h2 className={styles.title}>EDIT</h2>
            <div className={styles.container}>
                <img className={styles.smile} src="/img/edit/smile.png" />
                <form onSubmit={create}>
                    <div className={styles.nickname}>
                        <label for="nickname">닉네임</label> <br />
                        <input type="text" placeholder="닉네임을 입력해주세요" name="nickname" />
                        <input type="submit" value="중복확인" />
                    </div>
                    <div className={styles.gender}>
                        <label for="gender" className={styles.title}>본인선택</label> <br />
                        <input type="radio" id="female" name="gender" value="female" />
                        <label for="female">신부</label>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label for="male">신랑</label>
                    </div>
                    <div className={styles.weddingday}>
                        <label for="weddingday">예식일</label> <br />
                        <input type="date" name="weddingday" placeholder="YYYY-MM-DD" />
                        <input type="button" value="아직 결정되지 않았어요" />
                    </div>
                    <div className={styles.profile}>
                        <label for="profile">프로필</label>
                        <div>
                            <input type="image" id="profile" />
                            <input type="radio" id="face01" name="profile" value="face01" />
                            <label for="face01">face01</label>
                            <input type="radio" id="face02" name="profile" value="face02" />
                            <label for="face02">face02</label>
                            <input type="radio" id="face03" name="profile" value="face03" />
                            <label for="face03">face03</label>
                            <input type="radio" id="face04" name="profile" value="face04" />
                            <label for="face04">face04</label>
                        </div>
                    </div>
                    <div className={styles.submit}>
                        <input type="submit" value="EDIT" />
                        <img src="/img/edit/btn_bottom.png" />
                    </div>
                </form>
            </div>
        </main>
    )

}

export default Edit