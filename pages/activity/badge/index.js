
import Button from '@/components/Button/Button'
import { useRouter } from 'next/router';
import SubNav from '@/components/SubNav/SubNav'

export default function BadgePage() {
  const router = useRouter();
  return (
    <div className='basicBox'>
      <SubNav itemSet={
        [
          { name: "배지 관리", link: "/activity/badge" },
          { name: "배지 달성 현황", link: "/activity/badge/statistics" }
        ]
      }>
      </SubNav>

      <Button variantStyle="color" sizeStyle="md" onClick={() => router.push(router.pathname + "/newbadge")}>배지 신규 등록</Button>
    </div>
  )
}