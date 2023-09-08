import Nav from '@/components/Nav/Nav'
import styles from './Layout.module.scss'
import { useRouter } from 'next/router';

export default function Layout({ children }) {

  const router = useRouter();
  const parentLink = router.pathname.split("/")[1] ? router.pathname.split("/")[1] : false;
  const depth_1 = router.pathname.split("/")[2];
  const depth_2 = router.pathname.split("/")[3];
  const pageInfo = {
    member: [
      { path: 'dashboard', title: '대시보드' },
      { path: 'memberList', title: '회원리스트' },
      { path: 'message&gift', title: '푸시메시지 & 선물' },
      { path: 'blockManagement', title: '차단 관리' },
    ],
    activity: [
      { path: 'badge', title: '배지 관리' },
      { path: 'challenge', title: '챌린지 관리' },
      { path: 'rank', title: '랭킹 관리' },
    ],
    board: [
      { path: 'community', title: '커뮤니티' },
      { path: 'event', title: '제휴 & 이벤트' },
      { path: 'declaration', title: '미처리 신고' },
      { path: 'hiding', title: '숨김처리 게시글 & 댓글' },
    ]
  }

  const pageDepthTitle = {
    "message&gift": {
      "newMessage&Gift": '새 메시지 & 선물',
    },
    badge: {
      newbadge: '배지 신규 등록',
      detail: '배지 상세 정보',
      statistics: '배지 달성 현황',
    },
    challenge: {
      newchallenge: '챌린지 신규 등록',
      detail: '챌린지 상세 정보',
      statistics: '챌린지 통계',
    }
  }


  const pageTitleBox = () => {
    const parentName = parentLink === 'member' ? '회원 관리' : parentLink === 'activity' ? '활동 관리' : '게시판 관리';
    const depth_1_title = pageInfo[parentLink].filter((item) => item.path === depth_1)[0].title
    const depth_2_title = depth_2 ? pageDepthTitle[depth_1][depth_2] : "";
    const pageTitle = !depth_2 ? depth_1_title : depth_2_title;
    const pageDepth = `${parentName} / ${depth_1_title}` + (depth_2 ? ` / ${depth_2_title}` : ``);

    return (
      <>
        <div className={styles.pageDepth}>{pageDepth}</div>
        <h2 className={styles.pageTitle}>{pageTitle !== "대시보드" ? pageTitle : new Date().toLocaleDateString()}</h2>
      </>
    )
  }




  return (
    <div className={styles.layoutBox}>
      <div className={styles.navWrap}><Nav subNavList={pageInfo} /></div>
      <div className={styles.content}>
        {parentLink && pageTitleBox()}
        {children}
      </div>
    </div>
  )
}