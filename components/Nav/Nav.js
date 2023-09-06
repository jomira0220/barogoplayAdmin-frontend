import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.scss'
import { LineBasicArrow } from '@/components/Icon/Icon'
import { useRouter } from 'next/router'

export default function Nav() {

  const router = useRouter();
  // console.log(router)

  const toggleSubNav = (e) => {
    e.currentTarget.classList.toggle(styles.active);
    e.currentTarget.nextElementSibling.classList.toggle(styles.active);
  }

  const subNavList = {
    member: [
      { name: '대시보드', path: '/member/dashboard' },
      { name: '회원리스트', path: '/member/memberList' },
      { name: '푸시메시지 & 선물', path: '/member/message&gift' },
      { name: '차단 관리', path: '/member/blockManagement' },
    ],
    activity: [
      { name: '배지 관리', path: '/activity/badge' },
      { name: '챌린지 관리', path: '/activity/challenge' },
      { name: '랭킹 관리', path: '/activity/rank' },
    ],
    board: [
      { name: '커뮤니티', path: '/board/community' },
      { name: '제휴 & 이벤트', path: '/board/event' },
      { name: '미처리 신고', path: '/board/declaration' },
      { name: '숨김처리 게시글 & 댓글', path: '/board/hiding' },
    ],
  }


  const SubNavEl = ({ title }) => {
    const titleKo = title === 'member' ? '회원 관리' : title === 'activity' ? '활동 관리' : '게시판 관리';
    const active = title === router.pathname.split("/")[1] ? ` ${styles.active}` : ""
    return (
      <>
        <div className={styles.toggleItem + active} onClick={(e) => toggleSubNav(e)}>{titleKo} <span className={styles.toggleIcon}><LineBasicArrow /></span></div>
        <ul className={styles.subNav + active}>
          {
            subNavList[title].map((item, index) => {
              return (
                <li key={index}><Link className={router.pathname === item.path ? styles.active : ''} href={item.path}>{item.name}</Link></li>
              )
            })
          }
        </ul>
      </>
    )
  };

  return (
    <>
      <h1 className={styles.mainLogo}><Image src="/images/logo.png" alt="barogo" width={170} height={25.5} /></h1>
      <nav className={styles.mainNav}>
        <li>
          <SubNavEl title="member" />
        </li>
        <li>
          <SubNavEl title="activity" />
        </li>
        <li>
          <SubNavEl title="board" />
        </li>
        {/* <li>
          <Link href="">고객센터</Link>
        </li> */}
        <li>
          <Link href="">광고 관리</Link>
        </li>
        <li>
          <Link href="">시스템 공지</Link>
        </li>
      </nav>
    </>

  )
}