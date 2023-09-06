import { FilterBox, FilterCol } from "@/components/Filter/Filter";
import Select from "react-select";
import { useState } from "react";
import SearchBox from "@/components/SearchBox/SearchBox";
import styles from "./memberList.module.scss";
import BasicTable from "@/components/Table/BasicTable";

const selOption = [
  { value: "전체", label: "전체" },
  { value: "계정코드", label: "계정코드" },
  { value: "닉네임", label: "닉네임" },
  { value: "허브주소2", label: "허브주소2" },
  { value: "허브ID", label: "허브ID" },
  { value: "라이더ID", label: "라이더ID" },
];

const Option = (props) => {
  const {
    children,
    className,
    cx,
    getStyles,
    isDisabled,
    isFocused,
    isSelected,
    innerRef,
    innerProps,
  } = props;
  return (
    <div
      ref={innerRef}
      css={getStyles("option", props)}
      className={cx(
        {
          option: true,
          "option--is-disabled": isDisabled,
          "option--is-focused": isFocused,
          "option--is-selected": isSelected,
        },
        styles.dd
      )}
      {...innerProps}
    >
      {children}
    </div>
  );
};

export default function MemberListPage() {
  const [selectOnline, setSelectOnline] = useState(null);

  return (
    <>
      <div className="basicBox">
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
          <FilterCol
            filterTitle="브랜드"
            filterData={[
              { title: "전체", link: "" },
              { title: "바로고", link: "" },
              { title: "딜버", link: "" },
              { title: "모아라인", link: "" },
            ]}
          />
          <FilterCol
            filterTitle="라이더 상태"
            filterData={[
              { title: "G", link: "" },
              { title: "B", link: "" },
              { title: "E", link: "" },
              { title: "D", link: "" },
              { title: "Q", link: "" },
            ]}
          />
          <FilterCol filterTitle="가입날짜" filterType="날짜기간" />
          <FilterCol
            filterTitle="마지막로그인"
            filterType="날짜기간"
            line={false}
          />
        </FilterBox>
        <div className={styles.searchWrap}>
          <Select
            className={styles.selectBox}
            options={selOption}
            onChange={setSelectOnline}
            defaultValue={selOption[0]}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: "#000",
                primary25: "#cfcfcf",
              },
            })}
            styles={{
              option: (base) => ({
                ...base,
                borderBottom: "1px solid #ccc",
                padding: "10px 15px",
              }),
            }}
          />
          <SearchBox />
        </div>
        <BasicTable />
      </div>
    </>
  );
}
