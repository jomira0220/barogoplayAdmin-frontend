import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.scss'
import { LineBasicArrow } from '@/components/Icon/Icon'
import { useRouter } from 'next/router'

export default function Nav({ subNavList }) {

  const router = useRouter();

  const toggleSubNav = (e) => {
    e.currentTarget.classList.toggle(styles.active);
    e.currentTarget.nextElementSibling.classList.toggle(styles.active);
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
                <li key={index}><Link className={router.pathname.includes(item.path) ? styles.active : ''} href={`/${title}/${item.path}`}>{item.title}</Link></li>
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