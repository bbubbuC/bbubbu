import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='header-box'>
            <Link href="/">
                <Image className='logo' src="/img/bbubbulogo-04.png" alt='logo' width={150} height={40}/>
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