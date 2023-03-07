import Link from 'next/link'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react';

const Header = () => {

    const { data: session, status } = useSession();

    console.log(status)

    if (status === "authenticated") {
        return (
            <div>
                <div className='header-box'>
                    <Link href="/">
                        <Image className='logo' src="/img/common/bbubbulogo-04.png" alt='logo' width={150} height={40} />
                    </Link>
                    <div className='p-test'>
                        <p><Link href="/Mypage">마이페이지</Link></p>
                        <p onClick={() => signOut()}>로그아웃</p>
                    </div>
                </div>
            </div>
        )
    } else {

        return (
            <div>
                <div className='header-box'>
                    <Link href="/">
                        <Image className='logo' src="/img/common/bbubbulogo-04.png" alt='logo' width={150} height={40} />
                    </Link>
                    <div className='p-test'>
                        <p><Link href="/Login">로그인</Link></p>
                        <p><Link href="/Signup">회원가입</Link></p>
                        <p><Link href="/Mypage">마이페이지</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
