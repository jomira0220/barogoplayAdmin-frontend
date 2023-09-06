import styles from './memberList.module.scss'
const memberDetailData = {
  basicInfo: {
    memberCode: 'P12345',
    email: "ksdkfjsfl@gmail.com",
    nickName: "닉네임",
    joinDate: "2021-01-01",
    secessionDate: "2021-01-01",
    memberState: "Y",
  },
  riderInfo: {
    brand: "브랜드",
    riderId: "W12345",
    hubId: "B2538",
    hubAddress1: "서울",
    hubAddress2: "성동구",
  },
  activityInfo: {
    tier: "B1",
    accumulatedPoints: 1212121,
    seasonPoints: 121212,
    badgeCount: 12,
    challengeCount: 10,
    friendCount: 3,
    writeCount: 120,
    commentCount: 121,
    visitCount: 1212,
    lastLoginDate: "2021-01-01",
  }
}
const infoItemTitle = {
  basicInfo: ["계정코드", "이메일주소", "닉네임", "가입일", "탈퇴일", "상태"],
  riderInfo: ["브랜드", "라이더ID", "허브ID", "허브주소1", "허브주소2"],
  activityInfo: ["티어", "누적포인트", "시즌포인트", "달성 뱃지수", "달성 챌린지 수", "친구 수", "작성 게시글수", "작성 댓글 수", "누적 방문 수", "마지막 로그인 일"]
}

export default function MemberDetailPage() {
  return (
    <div className={styles.memberDetailWrap}>
      {
        Object.keys(memberDetailData).map((title, index) => {
          const infoItemData = memberDetailData[title];
          return (
            <div key={index} className='basicBox'>
              <h3>
                {title === "basicInfo" ? "기본 정보"
                  : title === "riderInfo" ? "라이더 정보"
                    : "활동 기록 통계"}
              </h3>
              {
                Object.values(infoItemData).map((value, index) => {
                  console.log(typeof (value))
                  return (
                    <div key={index} className={styles.infoItem}>
                      <div className={styles.itemTitle}>{infoItemTitle[title][index]}</div>
                      <div>{typeof (value) === "number" ? value.toLocaleString("ko-KR") : value}</div>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

