import { FilterBox, FilterCol } from "@/components/Filter/Filter";

export default function MemberListPage() {
  return (
    <>
      <div className='basicBox'>
        <FilterBox>
          <FilterCol
            filterTitle="허브주소1"
            filterData={[
              { title: "전체", link: "" },
              { title: "서울", link: "" },
              { title: "경기도", link: "" },
              { title: "충청북도", link: "" },
              { title: "충청남도", link: "" },
              { title: "세종", link: "" },
              { title: "대전", link: "" },
              { title: "전라북도", link: "" },
              { title: "전라남도", link: "" },
              { title: "경상남도", link: "" },
              { title: "경상북도", link: "" },
              { title: "제주도", link: "" },
              { title: "광주", link: "" },
              { title: "인천", link: "" },
              { title: "울산", link: "" },
              { title: "부산", link: "" },
              { title: "대구", link: "" },
              { title: "강원도", link: "" },
            ]}
          />
          <FilterCol filterTitle="브랜드" filterData={[
            { title: "전체", link: "" },
            { title: "바로고", link: "" },
            { title: "딜버", link: "" },
            { title: "모아라인", link: "" }
          ]}
          />
          <FilterCol filterTitle="라이더 상태" filterData={[
            { title: "G", link: "" },
            { title: "B", link: "" },
            { title: "E", link: "" },
            { title: "D", link: "" },
            { title: "Q", link: "" }
          ]}
          />
          <FilterCol filterTitle="가입날짜" filterType="날짜기간" />
        </FilterBox>
      </div>
    </>
  )
}