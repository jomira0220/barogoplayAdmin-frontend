import Button from '@/components/Button/Button';
import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import styles from '@/styles/form.module.scss';
import Select from "react-select";

const selOption = [
  { value: "선물1", label: "선물1" },
  { value: "선물2", label: "선물2" },
  { value: "선물3", label: "선물3" },
  { value: "선물4", label: "선물4" },
  { value: "선물5", label: "선물5" },
];


const locationCheckList = [
  { value: "전체", label: "전체" },
  { value: "서울", label: "서울" },
  { value: "경기도", label: "경기도" },

  { value: "충청북도", label: "충청북도" },
  { value: "충청남도", label: "충청남도" },

  { value: "전라북도", label: "전라북도" },
  { value: "전라남도", label: "전라남도" },

  { value: "인천", label: "인천" },
  { value: "대전", label: "대전" },
  { value: "대구", label: "대구" },
  { value: "부산", label: "부산" },
  { value: "광주", label: "광주" },
  { value: "울산", label: "울산" },
  { value: "강원도", label: "강원도" },

  { value: "경상북도", label: "경상북도" },
  { value: "경상남도", label: "경상남도" },

  { value: "제주도", label: "제주도" },
  { value: "세종", label: "세종" },
];


export default function NewBadgePage() {

  const [selectOnline, setSelectOnline] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [MessageTypeSelect, SetMessageTypeSelect] = useState(true);

  const [textValue, setTextValue] = useState(0);
  const handSetTextArea = (e) => {
    setTextValue(e.target.value.length);
  }


  return (
    <div className={`basicBox ${styles.formWarp}`}>
      <div className={styles.lineBox}>
        <h3>배지명</h3>
        <input type="text" />
      </div>
      <div className={styles.lineBox}>
        <h3>배지 이미지</h3>
      </div>


      <div className={styles.textAreaBox}>
        <h4>내용</h4>
        <textarea
          placeholder='내용을 입력해주세요'
          maxLength="29"
          onChange={(e) => { handSetTextArea(e) }}
        >
        </textarea>
        <span className={styles.textAreaCount}>{`( ${textValue} / 30자 )`}</span>
      </div>

      <div className={styles.radioBox}>
        <h3>발송 유형 선택</h3>
        <fieldset className={styles.typeChoice}>
          <div>
            <input type="radio" onClick={() => MessageTypeSelectEvent()} id="type_Message" name="type" value="message" defaultChecked />
            <label htmlFor="type_Message">메세지</label>
          </div>

          <div>
            <input type="radio" onClick={() => MessageTypeSelectEvent()} id="type_Gift" name="type" value="gift" />
            <label htmlFor="type_Gift">선물</label>
          </div>
        </fieldset>
      </div>

      {/* //!발송유형 - 메세지 */}
      {MessageTypeSelect &&
        <div className={`${styles.typeBox} ${styles.messageType}`}>
          <div className={styles.textAreaBox}>
            <h4>내용</h4>
            <textarea
              placeholder='내용을 입력해주세요'
              maxLength="29"
              onChange={(e) => { handSetTextArea(e) }}
            >
            </textarea>
            <span className={styles.textAreaCount}>{`( ${textValue} / 30자 )`}</span>
          </div>
          <div>
            <h4>링크</h4>
            <input type="text" placeholder='연결할 링크를 입력해주세요' />
          </div>
        </div>
      }

      {/* //!발송유형 - 선물 */}
      {!MessageTypeSelect &&
        <div className={`${styles.typeBox} ${styles.giftType}`}>
          <div>
            <h4>기프티콘</h4>
            <Select
              className={styles.selectBox}
              options={selOption}
              onChange={setSelectOnline}
              defaultValue={{ label: "기프티콘을 선택해주세요", value: 0 }} // 기본값 지정
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
          </div>
          <div>
            <h4>포인트</h4>
            <input className={styles.point} type="number" placeholder='지급할 포인트 입력' /> P
          </div>
        </div>
      }

      <div>
        <h3>적용 시 / 도</h3>
        <div className={styles.checkBoxWarp}>
          {
            locationCheckList.map((item, index) => {
              return (
                <label key={index} htmlFor={`locationCheck${index}`}><input type="checkbox" id={`locationCheck${index}`} name={`locationCheck${index}`} value={item.value} />
                  {item.label}
                </label>
              )
            })
          }
        </div>
      </div>

      <div className={styles.dateBox}>
        <h3>예약 발송</h3>
        <DatePicker
          shouldCloseOnSelect={false} // 날짜 선택시 달력 닫히지 않도록 설정
          locale={ko} // 한국어 설정
          dateFormat='yyyy.MM.dd HH:mm'
          selected={startDate}
          showTimeSelect
          // onSelect={(date) => setDate(date)}
          onChange={(date) => setStartDate(date)}
        // customInput={<input className={styles.date_input} />}
        // dayClassName={() => styles.date_day}
        />
      </div>


      <Button variantStyle="color" sizeStyle="sm" onClick={() => submitComplete()}>보내기</Button>

    </div>
  )
}