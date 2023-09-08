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

export default function NewMessagePage() {

  const [startDate, setStartDate] = useState(new Date());
  const [selectOnline, setSelectOnline] = useState(null);
  const [MessageTypeSelect, SetMessageTypeSelect] = useState(true);


  const MessageTypeSelectEvent = () => {
    SetMessageTypeSelect(!MessageTypeSelect)
  }

  const submitComplete = () => {
    alert('발송 완료')
  }

  const [textValue, setTextValue] = useState(0);
  const handSetTextArea = (e) => {
    setTextValue(e.target.value.length);
  }

  return (
    <>
      <div id={styles.newMessageWrap} className={`basicBox ${styles.formWarp}`}>
        <div className={styles.lineBox}>
          <h3>발송 내용</h3>
          <input type="text" />
        </div>
        <div className={styles.lineBox}>
          <h3>발송 메모</h3>
          <input type="text" />
        </div>
        <div className={styles.radioBox}>
          <h3>발송 대상</h3>
          <fieldset>
            <div>
              <input type="radio" id="allMember" name="member" value="allMember" defaultChecked />
              <label htmlFor="allMember">G회원 전체 보내기</label>
            </div>

            <div>
              <input type="radio" id="selectMember" name="member" value="selectMember" />
              <label htmlFor="selectMember">특정 대상 보내기</label>
              <Button className={styles.csvButton} variantStyle="color" sizeStyle="xs">CSV업로드</Button>
            </div>
          </fieldset>
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
    </>
  )
}