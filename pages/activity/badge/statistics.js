import SubNav from '@/components/SubNav/SubNav'

export default function BadgeStatisticsPage() {
  return (
    <div className='basicBox'>
      <SubNav itemSet={
        [
          { name: "배지 관리", link: "/activity/badge" },
          { name: "배지 달성 현황", link: "/activity/badge/statistics" }
        ]
      }>
      </SubNav>
    </div>
  )
}