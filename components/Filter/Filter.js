import Link from "next/link";
import styles from "./Filter.module.scss";
import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Button from "@/components/Button/Button";

export function FilterBox({ children }) {
  return (
    <div className={styles.filterBox}>{children}</div>
  )
}
export function FilterCol({ filterTitle, filterData = [], line = true, filterType = "일반" }) {

  // 날짜 선택 컴포넌트 - 날짜 변경 처리용
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // 선택한 년 월 일 데이터 - 페이지 연결시 사용
  // const setDateLink = startDate.getFullYear() + '/' + (startDate.getMonth() + 1) + '/' + startDate.getUTCDate();


  return (
    <div className={styles.filter_col + (line ? ` ` + styles.line : "")}>
      <h4 className={styles.filter_title}>{filterTitle}</h4>
      {
        filterType === "일반" && (
          <ul className={styles.filter_list}>
            {filterData.map((item, index) => {
              return (
                <li key={index} className={styles.filter_Item + (index === 0 ? ` ${styles.active}` : "")}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              )
            })}
          </ul>)
      }
      {
        filterType === "날짜" && (
          <div id={styles.filter_datepicker}>
            <DatePicker
              shouldCloseOnSelect={false} // 날짜 선택시 달력 닫히지 않도록 설정
              locale={ko} // 한국어 설정
              dateFormat='yyyy.MM.dd'
              selected={startDate}
              // onSelect={(date) => setDate(date)}
              onChange={(date) => setStartDate(date)}
              customInput={<input className={styles.date_input} />}
              dayClassName={() => styles.date_day}
            />
          </div>
        )
      }
      {
        filterType === "날짜기간" && (
          <>
            <div id={styles.filter_datepicker}>
              <DatePicker
                shouldCloseOnSelect={false} // 날짜 선택시 달력 닫히지 않도록 설정
                locale={ko} // 한국어 설정
                dateFormat='yyyy.MM.dd'
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => setStartDate(date)}
                customInput={<input className={styles.date_input} />}
                dayClassName={() => styles.date_day}
              />
              <span className={styles.data_icon}>~</span>
              <DatePicker
                shouldCloseOnSelect={false} // 날짜 선택시 달력 닫히지 않도록 설정
                locale={ko} // 한국어 설정
                dateFormat='yyyy.MM.dd'
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => setEndDate(date)}
                customInput={<input className={styles.date_input} />}
                dayClassName={() => styles.date_day}
              />
            </div>
          </>
        )
      }
    </div >
  )
}