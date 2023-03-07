import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='header-box'>
            <Link href="/">
                <div className='logo'>
                    <div className='logoImg'></div>
                </div>
            </Link>
            <div className='p-test'>
                <p><Link href="/Login">로그인</Link></p>
                <p><Link href="/Signup">회원가입</Link></p>
                <p><Link href="/Mypage">마이페이지</Link></p>
            </div>
            
        </div>
    )
}

export default Header