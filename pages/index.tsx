import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { ArrowZigZagIcon } from "@/components/Icon/Icon";
import { FilterBox, FilterCol } from "@/components/Filter/Filter";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";
import { useState } from "react";

export default function Home() {
  const data = {
    data1: [
      {
        title: "회원수",
        count: 12223,
        variance: "+150",
      },
      {
        title: "활성사용자수",
        count: 2323,
        variance: "-150",
      },
      {
        title: "작성게시글수",
        count: 1234,
        variance: "150",
      },
    ],
    data2: {
      //회원 티어 분포
      total: {
        A1: 200,
        A2: 200,
        S3: 200,
        S2: 200,
        S1: 200,
        C1: 200,
        B3: 200,
        B2: 200,
        B1: 200,
        A3: 200,
      },
      barogo: {
        A1: 200,
        A2: 200,
        S3: 200,
        S2: 200,
        S1: 200,
        C1: 200,
        B3: 200,
        B2: 200,
        B1: 200,
        A3: 200,
      },
      dealver: {
        A1: 200,
        A2: 200,
        S3: 200,
        S2: 200,
        S1: 200,
        C1: 200,
        B3: 200,
        B2: 200,
        B1: 200,
        A3: 200,
      },
      moa: {
        A1: 200,
        A2: 200,
        S3: 200,
        S2: 200,
        S1: 200,
        C1: 200,
        B3: 200,
        B2: 200,
        B1: 200,
        A3: 200,
      },
    },
    data3: {
      //기간별 회원 조건 항목
      day7: {
        //7일
        all: {
          //전체브랜드
          member: {
            //회원수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          ativemember: {
            //활성사용자수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          writecount: {
            //작성게시글수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
        },
        barogo: {
          member: {
            //회원수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          ativemember: {
            //활성사용자수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          writecountcount: {
            //작성게시글수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
        },
        dealver: {
          member: {
            //회원수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          ativemember: {
            //활성사용자수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          writecount: {
            //작성게시글수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
        },
        moa: {
          member: {
            //회원수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          ativemember: {
            //활성사용자수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          writecount: {
            //작성게시글수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
        },
      },
      month6: {
        //6개월
        all: {
          //전체브랜드
          member: {
            //회원수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          ativemember: {
            //활성사용자수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          writecount: {
            //작성게시글수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
        },
        barogo: {
          member: {
            //회원수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          ativemember: {
            //활성사용자수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          writecount: {
            //작성게시글수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
        },
        dealver: {
          member: {
            //회원수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          ativemember: {
            //활성사용자수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          writecount: {
            //작성게시글수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
        },
        moa: {
          member: {
            //회원수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          ativemember: {
            //활성사용자수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
          writecount: {
            //작성게시글수
            mon: 10,
            tue: 20,
            wed: 30,
            thu: 40,
            fri: 50,
            sat: 60,
            sun: 70,
          },
        },
      },
    },
  };

  // 데이터 날짜 - 맨위 타이틀 노출 날짜
  const date = new Date().toLocaleDateString();

  const [topData, setTopData] = useState(); //상단 데이터

  const barGraphData = [
    {
      name: "A1",
      uv: 4000,
      color: "#fa5014",
    },
    {
      name: "A2",
      uv: 3000,
      color: "#454545",
    },
    {
      name: "S3",
      uv: 2000,
      color: "#ff8724",
    },
    {
      name: "S2",
      uv: 2780,
      color: "#fa5014",
    },
    {
      name: "S1",
      uv: 1890,
      color: "#454545",
    },
    {
      name: "C1",
      uv: 2390,
      color: "#ff8724",
    },
    {
      name: "B3",
      uv: 3490,
      color: "#fa5014",
    },
    {
      name: "B2",
      uv: 3490,
      color: "#454545",
    },
    {
      name: "B1",
      uv: 3490,
      color: "#ff8724",
    },
    {
      name: "A3",
      uv: 3490,
      color: "#fa5014",
    },
  ];

  const renderBarChart = (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={600}
        height={300}
        data={barGraphData}
        margin={{
          top: 40,
          right: 5,
          left: -22,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="uv"
          name=" "
          // fill={}
          radius={[10, 10, 0, 0]}
          barSize={35}
        >
          {barGraphData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );

  const lineGraphData = [
    {
      name: "Mon",
      uv: 4000,
    },
    {
      name: "Tue",
      uv: 3000,
    },
    {
      name: "Wed",
      uv: 2000,
    },
    {
      name: "Thu",
      uv: 2780,
    },
    {
      name: "Fri",
      uv: 1890,
    },
    {
      name: "Sat",
      uv: 2390,
    },
    {
      name: "sun",
      uv: 3490,
    },
  ];

  const renderLineChart = (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={600}
        height={300}
        data={lineGraphData}
        margin={{
          top: 40,
          right: 5,
          left: -22,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          connectNulls
          type="monotone"
          dataKey="uv"
          name=" "
          stroke="#000"
          fill="#000"
          // dot={{
          //   r: 5,
          //   strokeWidth: 3,
          //   stroke: "#fff",
          //   fill: "#000",
          // }}
          // activeDot={{ r: 4, strokeWidth: 2, stroke: "#000", fill: "#fff" }}
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.dataTop + ` maxWidth`}>
          {data.data1.map((item, index) => {
            const varianceNum = Number(item.variance.replace(/[^0-9]/g, ""));
            const varianceSign = item.variance.replace(/[0-9]/g, "");
            const colorSet =
              varianceSign === "+"
                ? "#f41d1d"
                : varianceSign === "-"
                ? "#1400ff"
                : "#000";
            return (
              <div key={index} className="basicBox">
                <h3>{item.title}</h3>
                <div className={styles.dataTopCount}>
                  <p className={styles.count}>
                    {item.count.toLocaleString("ko-KR")}
                    {item.title === "작성게시글수" ? "건" : "명"}
                  </p>
                  <p className={styles.variance}>
                    {`${varianceSign}` + varianceNum.toLocaleString("ko-KR")}
                    {item.title === "작성게시글수" ? "건" : "명"}
                    <span
                      className={
                        styles.arrowIcon +
                        (varianceSign === "-" ? ` ${styles.down}` : "")
                      }
                    >
                      {/* @ts-ignore */}
                      <ArrowZigZagIcon color={colorSet} />
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.memberData}>
          <div className="basicBox">
            <h3>회원 티어 분포</h3>
            <FilterBox>
              <FilterCol
                filterTitle="브랜드"
                filterData={[
                  { title: "전체", link: "all" },
                  { title: "바로고", link: "barogo" },
                  { title: "딜버", link: "dealver" },
                  { title: "모아라인", link: "moa" },
                ]}
                line={false}
              />
            </FilterBox>
            <div className={styles.barGraph}>{renderBarChart}</div>
          </div>
        </div>

        <div className={styles.periodMember}>
          <div className="basicBox wide">
            <h3>기간별 회원 조건 항목</h3>
            <FilterBox>
              <FilterCol
                filterTitle="기간"
                filterData={[
                  { title: "7일", link: "7" },
                  { title: "6개월", link: "6" },
                ]}
              />
              <FilterCol
                filterTitle="브랜드"
                filterData={[
                  { title: "전체", link: "all" },
                  { title: "바로고", link: "barogo" },
                  { title: "딜버", link: "dealver" },
                  { title: "모아라인", link: "moa" },
                ]}
              />
              <FilterCol
                filterTitle="조건 항목"
                filterData={[
                  { title: "회원수", link: "all" },
                  { title: "활성사용자수", link: "activemember" },
                  { title: "작성게시글수", link: "writecountcount" },
                ]}
              />
              <FilterCol filterTitle="날짜" filterType="날짜" line={false} />
            </FilterBox>
            <div className={styles.lineGraph}>{renderLineChart}</div>
          </div>
        </div>
      </main>
    </>
  );
}
