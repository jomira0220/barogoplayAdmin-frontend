import Button from '@/components/Button/Button'

export default function blockManagementPage() {
  return (
    <div className='basicBox'>
      <h3>차단된 회원 리스트</h3>
      <Button variantStyle="color">CSV 다운로드</Button>
      <Button variantStyle="darkgray">엑셀 다운로드</Button>
      <Button variantStyle="color">차단해제</Button>
    </div>
  )
}