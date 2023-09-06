interface iconProps {
  color: string;
  width: string | null;
  height: string | null;
  strokeWidth: string | null;
}

// 검색아이콘
export function SearchIcon({ color = "white" }: iconProps) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.3188 11.1151L12.7567 9.52123C12.4207 9.20303 11.9969 8.99219 11.5396 8.91583C11.0824 8.83947 10.6127 8.90106 10.1909 9.0927L9.51175 8.41606C10.3121 7.35067 10.6776 6.02278 10.5347 4.6997C10.3918 3.37662 9.75111 2.1566 8.74159 1.28522C7.73207 0.413847 6.42868 -0.0441737 5.09381 0.00336184C3.75894 0.0508974 2.49171 0.60046 1.54721 1.54142C0.602718 2.48238 0.0510888 3.74487 0.00337448 5.07473C-0.0443398 6.4046 0.415403 7.7031 1.29005 8.70884C2.16471 9.71458 3.38932 10.3529 4.71737 10.4952C6.04543 10.6376 7.37831 10.2735 8.44771 9.47613L9.11934 10.1452C8.90433 10.566 8.82728 11.0433 8.89903 11.51C8.97079 11.9767 9.18774 12.4092 9.5193 12.7465L11.1191 14.3404C11.5436 14.7628 12.119 15 12.719 15C13.3189 15 13.8944 14.7628 14.3188 14.3404C14.5345 14.1303 14.7058 13.8795 14.8228 13.6025C14.9397 13.3256 15 13.0282 15 12.7277C15 12.4273 14.9397 12.1299 14.8228 11.8529C14.7058 11.576 14.5345 11.3251 14.3188 11.1151ZM7.91945 7.92738C7.39138 8.45215 6.71904 8.80922 5.98737 8.9535C5.2557 9.09777 4.49752 9.02278 3.80861 8.73798C3.1197 8.45319 2.53096 7.97137 2.11678 7.3534C1.70259 6.73542 1.48154 6.00902 1.48154 5.26595C1.48154 4.52287 1.70259 3.79647 2.11678 3.1785C2.53096 2.56052 3.1197 2.07871 3.80861 1.79391C4.49752 1.50912 5.2557 1.43412 5.98737 1.57839C6.71904 1.72267 7.39138 2.07975 7.91945 2.60451C8.27084 2.9537 8.54963 3.36852 8.73985 3.82521C8.93007 4.2819 9.02798 4.7715 9.02798 5.26595C9.02798 5.7604 8.93007 6.24999 8.73985 6.70668C8.54963 7.16337 8.27084 7.57819 7.91945 7.92738ZM13.2548 13.2427C13.1846 13.3132 13.1012 13.3691 13.0092 13.4073C12.9172 13.4455 12.8186 13.4651 12.719 13.4651C12.6194 13.4651 12.5207 13.4455 12.4288 13.4073C12.3368 13.3691 12.2533 13.3132 12.1832 13.2427L10.5833 11.6489C10.5126 11.579 10.4565 11.4958 10.4182 11.4042C10.3799 11.3126 10.3601 11.2143 10.3601 11.1151C10.3601 11.0158 10.3799 10.9176 10.4182 10.826C10.4565 10.7343 10.5126 10.6512 10.5833 10.5813C10.6535 10.5108 10.737 10.4549 10.8289 10.4167C10.9209 10.3786 11.0195 10.3589 11.1191 10.3589C11.2188 10.3589 11.3174 10.3786 11.4094 10.4167C11.5013 10.4549 11.5848 10.5108 11.6549 10.5813L13.2548 12.1751C13.3255 12.245 13.3817 12.3282 13.42 12.4198C13.4583 12.5114 13.478 12.6097 13.478 12.7089C13.478 12.8082 13.4583 12.9065 13.42 12.9981C13.3817 13.0897 13.3255 13.1728 13.2548 13.2427Z"
        fill={color}
      />
    </svg>
  );
}

// 연필아이콘 (글쓰기)
export function PencilIcon({ color = "white" }: iconProps) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.775146 14.7249H3.65714L14.2249 4.15714L11.3426 1.27515L0.775146 11.8429V14.7249Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.46069 4.15723L11.3427 7.03922"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 대표배지 표시 아이콘
export function RepresentativeIcon({ color = "#FA5014" }: iconProps) {
  return (
    <svg
      width="51"
      height="24"
      viewBox="0 0 51 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1908 11.5596L14.8822 11.2498L15.1913 11.5596H15.1908ZM8.8085 11.5596L8.49992 11.8699L8.80909 11.5596H8.8085ZM9.66484 11.9761L9.84042 12.3768L9.66425 11.9761H9.66484ZM12.5296 8.95675L12.3307 8.56708L12.529 8.95675H12.5296ZM11.4703 8.95675L11.6692 8.56708L11.4708 8.95675H11.4703ZM16.1562 12.1797L16.0494 13.1742L16.9186 13.2676L17.0259 12.2736L16.1562 12.1802V12.1797ZM12.6346 16.8125H11.3653V17.6875H12.6346V16.8125ZM7.95042 13.1742L7.84367 12.1797L6.97392 12.273L7.08067 13.2676L7.95042 13.1742ZM10.492 11.5911L11.5362 9.71975L10.772 9.29333L9.72784 11.1652L10.492 11.5911ZM12.4637 9.71975L13.5078 11.5911L14.272 11.1652L13.2278 9.29333L12.4637 9.71975ZM13.5078 11.5911C13.6023 11.7602 13.6887 11.9177 13.7733 12.0373C13.8602 12.1604 13.9774 12.2969 14.1588 12.3768L14.5118 11.5759C14.5444 11.5899 14.5386 11.6051 14.489 11.5345C14.4112 11.4147 14.3388 11.2915 14.272 11.1652L13.5078 11.5911ZM14.8822 11.2498C14.7317 11.4003 14.6418 11.489 14.5713 11.5456C14.5042 11.5998 14.503 11.5841 14.538 11.5794L14.6576 12.4462C14.8536 12.4188 15.0047 12.3203 15.1219 12.2257C15.2357 12.1336 15.3623 12.0064 15.4999 11.8699L14.8822 11.2498ZM14.1588 12.3768C14.3158 12.4457 14.4884 12.4696 14.6576 12.4462L14.538 11.5794C14.5291 11.5807 14.52 11.5795 14.5118 11.5759L14.1588 12.3768ZM8.5005 11.8693C8.63759 12.0064 8.76417 12.1336 8.87792 12.2252C8.99517 12.3208 9.14625 12.4188 9.34225 12.4462L9.46184 11.5794C9.49684 11.5841 9.49567 11.5998 9.42859 11.5456C9.32061 11.4517 9.21687 11.353 9.11767 11.2498L8.49992 11.8699L8.5005 11.8693ZM9.72784 11.1652C9.66084 11.2915 9.58824 11.4147 9.51025 11.5345C9.46125 11.6045 9.45542 11.5899 9.48809 11.5753L9.84042 12.3768C10.0213 12.2969 10.1403 12.161 10.2266 12.0373C10.3106 11.9172 10.3975 11.7602 10.492 11.5911L9.72784 11.1652ZM9.34225 12.4462C9.51142 12.4696 9.68409 12.4462 9.84042 12.3768L9.48809 11.5753C9.47983 11.5789 9.47074 11.5807 9.46184 11.5794L9.34225 12.4462ZM11.3653 16.8125C10.5264 16.8125 9.939 16.8119 9.491 16.7542C9.05467 16.6987 8.8085 16.5949 8.62359 16.4298L8.04025 17.082C8.40775 17.411 8.85109 17.5545 9.37959 17.6222C9.89642 17.6881 10.5498 17.6875 11.3653 17.6875V16.8125ZM7.08067 13.2676C7.167 14.0714 7.23584 14.8583 7.3525 15.4965C7.41142 15.8185 7.48609 16.1218 7.58875 16.3849C7.69084 16.6462 7.832 16.8953 8.04025 17.082L8.62359 16.4298C8.55592 16.3692 8.47892 16.2583 8.40367 16.0664C8.31781 15.8304 8.25414 15.5869 8.2135 15.339C8.10384 14.7428 8.03967 14.009 7.95042 13.1742L7.08067 13.2676ZM16.0494 13.1742C15.9596 14.009 15.8954 14.7428 15.7869 15.3384C15.7327 15.6342 15.6703 15.8763 15.5962 16.0664C15.5209 16.2583 15.4439 16.3698 15.3763 16.4298L15.9596 17.082C16.1678 16.8953 16.309 16.6462 16.4111 16.3849C16.5138 16.1218 16.5884 15.8185 16.6473 15.4965C16.764 14.8583 16.8328 14.0708 16.9192 13.2676L16.0494 13.1742ZM12.6346 17.6875C13.4501 17.6875 14.1034 17.6881 14.6203 17.6222C15.1493 17.5545 15.5921 17.411 15.9596 17.082L15.3763 16.4298C15.1913 16.5949 14.9452 16.6982 14.5088 16.7542C14.0608 16.8119 13.4734 16.8125 12.6346 16.8125V17.6875ZM11.2708 7.91667C11.2708 7.51417 11.5974 7.1875 11.9999 7.1875V6.3125C11.5745 6.3125 11.1664 6.48151 10.8656 6.78235C10.5648 7.08319 10.3958 7.49122 10.3958 7.91667H11.2708ZM11.9999 7.1875C12.4024 7.1875 12.7291 7.51417 12.7291 7.91667H13.6041C13.6041 7.49122 13.4351 7.08319 13.1342 6.78235C12.8334 6.48151 12.4254 6.3125 11.9999 6.3125V7.1875ZM17.1041 10.25C17.1041 10.366 17.058 10.4773 16.9759 10.5594C16.8939 10.6414 16.7826 10.6875 16.6666 10.6875V11.5625C17.0147 11.5625 17.3485 11.4242 17.5947 11.1781C17.8408 10.9319 17.9791 10.5981 17.9791 10.25H17.1041ZM16.2291 10.25C16.2291 10.134 16.2752 10.0227 16.3572 9.94064C16.4393 9.85859 16.5506 9.8125 16.6666 9.8125V8.9375C16.3185 8.9375 15.9846 9.07578 15.7385 9.32192C15.4924 9.56806 15.3541 9.9019 15.3541 10.25H16.2291ZM16.6666 9.8125C16.7826 9.8125 16.8939 9.85859 16.9759 9.94064C17.058 10.0227 17.1041 10.134 17.1041 10.25H17.9791C17.9791 9.9019 17.8408 9.56806 17.5947 9.32192C17.3485 9.07578 17.0147 8.9375 16.6666 8.9375V9.8125ZM7.33325 10.6875C7.21722 10.6875 7.10594 10.6414 7.02389 10.5594C6.94185 10.4773 6.89575 10.366 6.89575 10.25H6.02075C6.02075 10.5981 6.15903 10.9319 6.40517 11.1781C6.65132 11.4242 6.98516 11.5625 7.33325 11.5625V10.6875ZM6.89575 10.25C6.89575 10.134 6.94185 10.0227 7.02389 9.94064C7.10594 9.85859 7.21722 9.8125 7.33325 9.8125V8.9375C6.98516 8.9375 6.65132 9.07578 6.40517 9.32192C6.15903 9.56806 6.02075 9.9019 6.02075 10.25H6.89575ZM7.33325 9.8125C7.44928 9.8125 7.56056 9.85859 7.64261 9.94064C7.72466 10.0227 7.77075 10.134 7.77075 10.25H8.64575C8.64575 9.9019 8.50747 9.56806 8.26133 9.32192C8.01519 9.07578 7.68135 8.9375 7.33325 8.9375V9.8125ZM16.6666 10.6875C16.6648 10.6875 16.6631 10.6875 16.6613 10.6875L16.6514 11.5625H16.6666V10.6875ZM17.0259 12.2736C17.0545 12.0111 17.079 11.7818 17.0924 11.5905C17.1089 11.4162 17.1081 11.2408 17.0901 11.0667L16.2227 11.1833C16.2314 11.2475 16.232 11.3525 16.2198 11.5287C16.2081 11.7002 16.1853 11.9119 16.1562 12.1797L17.0259 12.2736ZM16.6613 10.6875C16.5993 10.6869 16.5382 10.673 16.4819 10.6469C16.4257 10.6207 16.3757 10.5829 16.3353 10.5358L15.6732 11.1075C15.91 11.3817 16.26 11.5578 16.6514 11.5625L16.6613 10.6875ZM16.3353 10.5358C16.2665 10.4565 16.2287 10.355 16.2291 10.25H15.3541C15.3541 10.5773 15.4748 10.8777 15.6732 11.1075L16.3353 10.5358ZM15.4999 11.8699C15.8948 11.4762 16.0984 11.2778 16.2338 11.1938L15.7747 10.4495C15.5297 10.6012 15.2357 10.8975 14.8822 11.2498L15.4999 11.8699ZM7.77075 10.25C7.7711 10.355 7.73338 10.4565 7.66459 10.5358L8.32667 11.1075C8.525 10.8777 8.64575 10.5773 8.64575 10.25H7.77075ZM9.11767 11.2498C8.76417 10.8975 8.47017 10.6006 8.22517 10.4495L7.76609 11.1938C7.90142 11.2778 8.10442 11.4762 8.49992 11.8699L9.11767 11.2498ZM7.66459 10.5358C7.62416 10.5829 7.57415 10.6207 7.51792 10.6469C7.46169 10.673 7.40052 10.6869 7.3385 10.6875L7.34842 11.5625C7.53441 11.5603 7.71781 11.5186 7.88646 11.4402C8.05511 11.3617 8.20516 11.2483 8.32667 11.1075L7.66459 10.5358ZM7.3385 10.6875C7.33675 10.6875 7.335 10.6875 7.33325 10.6875V11.5625H7.34842L7.3385 10.6875ZM7.84367 12.1797C7.81873 11.963 7.79754 11.746 7.78009 11.5287C7.76846 11.4139 7.76748 11.2983 7.77717 11.1833L6.90975 11.0667C6.89173 11.2408 6.89094 11.4162 6.90742 11.5905C6.92084 11.7818 6.94534 12.0105 6.97392 12.273L7.84367 12.1797ZM12.7291 7.91667C12.7291 8.19958 12.5681 8.44575 12.3307 8.56708L12.7279 9.34642C12.9916 9.21211 13.2131 9.00747 13.3677 8.75514C13.5223 8.5028 13.6041 8.21261 13.6041 7.91667H12.7291ZM12.3307 8.56708C12.2315 8.61725 12.1201 8.64583 11.9999 8.64583V9.52083C12.2613 9.52083 12.5092 9.45783 12.7279 9.34583L12.3307 8.56708ZM13.2278 9.29333C13.1077 9.0775 12.9998 8.88325 12.9006 8.72458L12.1586 9.18833C12.2438 9.32483 12.3394 9.49808 12.4637 9.71975L13.2278 9.29333ZM11.9999 8.64583C11.8798 8.64583 11.7678 8.61667 11.6692 8.56708L11.2719 9.34642C11.4907 9.45783 11.7386 9.52083 11.9999 9.52083V8.64583ZM11.6692 8.56708C11.5492 8.50602 11.4485 8.41293 11.3781 8.29812C11.3078 8.18332 11.2706 8.05129 11.2708 7.91667H10.3958C10.3958 8.21251 10.4777 8.50258 10.6323 8.7548C10.7869 9.00702 11.0083 9.21157 11.2719 9.34583L11.6692 8.56708ZM11.5362 9.71975C11.6598 9.49692 11.7561 9.32483 11.8413 9.18892L11.0993 8.72458C11.0001 8.88325 10.8922 9.0775 10.772 9.29333L11.5362 9.71975Z"
        fill={color}
      />
      <path
        d="M33.0469 5.85742V18.2168H31.5977V11.9141H30.2031V17.5879H28.8086V6.08984H30.2031V10.6973H31.5977V5.85742H33.0469ZM27.4141 7.32031V8.55078H24.3242V14.0469C25.6709 14.0332 26.7783 13.9648 28.0293 13.7324L28.1387 14.9766C26.6484 15.2773 25.3496 15.3184 23.627 15.332H22.793V7.32031H27.4141ZM45.6627 15.5645V16.7949H34.3698V15.5645H37.2955V13.0215H35.3405V11.791H37.0768V8.12695H35.2995V6.91016H44.6784V8.12695H42.8737V11.791H44.6373V13.0215H42.6823V15.5645H45.6627ZM38.5944 11.791H41.3698V8.12695H38.5944V11.791ZM38.8131 15.5645H41.1647V13.0215H38.8131V15.5645Z"
        fill={color}
      />
      <rect x="0.5" y="0.5" width="50" height="23" rx="4.5" stroke={color} />
    </svg>
  );
}

// 배지 팝업시 배지 상세정보 보기 안내 아이콘
export function InfoCircleIcon({ color = "#000" }: iconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.625C4.48475 1.625 1.625 4.48475 1.625 8C1.625 11.5152 4.48475 14.375 8 14.375C11.5152 14.375 14.375 11.5152 14.375 8C14.375 4.48475 11.5152 1.625 8 1.625M8 15.5C3.8645 15.5 0.5 12.1355 0.5 8C0.5 3.8645 3.8645 0.5 8 0.5C12.1355 0.5 15.5 3.8645 15.5 8C15.5 12.1355 12.1355 15.5 8 15.5"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99561 9.02977C7.68511 9.02977 7.43311 8.77777 7.43311 8.46727V5.15302C7.43311 4.84252 7.68511 4.59052 7.99561 4.59052C8.30611 4.59052 8.55811 4.84252 8.55811 5.15302V8.46727C8.55811 8.77777 8.30611 9.02977 7.99561 9.02977"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00302 11.5969C7.58827 11.5969 7.24927 11.2617 7.24927 10.8469C7.24927 10.4322 7.58152 10.0969 7.99552 10.0969H8.00302C8.41777 10.0969 8.75302 10.4322 8.75302 10.8469C8.75302 11.2617 8.41777 11.5969 8.00302 11.5969"
        fill={color}
      />
    </svg>
  );
}

//미달성배지 영역 달성완료 표시 아이콘
export function AchievedIcon({ color = "#000" }: iconProps) {
  return (
    <svg
      width="83"
      height="83"
      viewBox="0 0 91 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="9"
        y="1"
        width="74"
        height="74"
        rx="4"
        stroke="url(#paint0_linear_668_10624)"
        strokeWidth="2"
      />
      <path
        d="M13.4444 72H0L5.66484 80.5L0 89H17V82.8821L13.4444 72Z"
        fill="#EF3E00"
      />
      <path
        d="M78.3464 72H91L85.5507 80.5L91 89H75V82.8821L78.3464 72Z"
        fill="#EF3E00"
      />
      <path d="M80 62H12V83H80V62Z" fill="url(#paint1_linear_668_10624)" />
      <path d="M17 89L12 83H17V89Z" fill="#B12E00" />
      <path d="M75 89L80 83H75V89Z" fill="#B12E00" />
      <g filter="url(#filter0_d_668_10624)">
        <path
          d="M30.23 67.7715V68.7275H27.061V70.8867C28.8281 70.876 29.8862 70.8062 31.0894 70.5645L31.2183 71.4883C29.9185 71.7891 28.7261 71.8213 26.6636 71.8213H25.8794V67.7715H30.23ZM33.1626 67.2451V69.1572H34.5161V70.1348H33.1626V72.1006H31.9702V67.2451H33.1626ZM33.1626 72.5195V75.0977H28.0063V75.8711H33.4634V76.8379H26.8247V74.1953H31.9702V73.4756H26.814V72.5195H33.1626ZM38.5659 68.6416C38.5552 69.9629 39.3286 71.166 40.854 71.6494L40.2095 72.584C39.1514 72.2134 38.4102 71.5098 37.9966 70.5859C37.5669 71.644 36.7559 72.4766 35.5796 72.8848L34.9458 71.918C36.5571 71.3916 37.3628 70.0918 37.3628 68.6953V67.7715H38.5659V68.6416ZM43.1421 67.2451V72.96H41.9497V70.1025H40.0161V69.125H41.9497V67.2451H43.1421ZM39.855 73.2178C41.9175 73.2178 43.1743 73.9053 43.1743 75.0869C43.1743 76.2686 41.9175 76.9453 39.855 76.9453C37.8032 76.9453 36.5464 76.2686 36.5571 75.0869C36.5464 73.9053 37.8032 73.2178 39.855 73.2178ZM39.855 74.1416C38.5015 74.1416 37.7388 74.4746 37.7388 75.0869C37.7388 75.6777 38.5015 76.0107 39.855 76.0107C41.2085 76.0107 41.9819 75.6777 41.9819 75.0869C41.9819 74.4746 41.2085 74.1416 39.855 74.1416ZM50.0601 67.6641C51.478 67.6641 52.4878 68.4482 52.4985 69.6191C52.4878 70.5806 51.7627 71.3057 50.6831 71.5098V72.2939C51.4888 72.251 52.2998 72.1758 53.0571 72.0684L53.1538 72.9385C51.1343 73.3037 48.8784 73.3359 47.2349 73.3359L47.106 72.3799C47.8042 72.3853 48.6206 72.3799 49.48 72.3477V71.5098C48.3682 71.3271 47.6216 70.5967 47.6323 69.6191C47.6216 68.4482 48.6313 67.6641 50.0601 67.6641ZM50.0601 68.5771C49.2866 68.5771 48.7388 68.9639 48.7495 69.6191C48.7388 70.2529 49.2866 70.6504 50.0601 70.6611C50.8335 70.6504 51.3599 70.2529 51.3706 69.6191C51.3599 68.9639 50.8335 68.5771 50.0601 68.5771ZM54.8188 67.2559V70.3926H56.1294V71.3809H54.8188V74.668H53.6265V67.2559H54.8188ZM55.1626 75.7852V76.752H48.438V74.0127H49.6304V75.7852H55.1626ZM65.5073 74.8398V75.8281H56.6343V74.8398H58.9868V73.2393H57.687V70.0703H63.2729V68.8779H57.6655V67.9111H64.4546V71.0264H58.8794V72.2725H64.6802V73.2393H63.2622V74.8398H65.5073ZM60.147 74.8398H62.0913V73.2393H60.147V74.8398Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_668_10624"
          x="23.8794"
          y="65.2451"
          width="43.6279"
          height="13.7002"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.980392 0 0 0 0 0.321569 0 0 0 0 0.0823529 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_668_10624"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_668_10624"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_668_10624"
          x1="8.00002"
          y1="57.9999"
          x2="84"
          y2="75.9998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA5014" />
          <stop offset="0.760694" stopColor="#FFEBB9" />
          <stop offset="0.934594" stopColor="#FF8724" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_668_10624"
          x1="12"
          y1="83"
          x2="59.501"
          y2="114.205"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA5316" />
          <stop offset="0.635417" stopColor="#FFBA5A" />
          <stop offset="1" stopColor="#FA581A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 하트 아이콘
export function HeartIcon({ color = "#D0D4DC" }: iconProps) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 9.56178L4.275 8.90547C1.7 6.5835 0 5.04712 0 3.17264C0 1.63626 1.21 0.437988 2.75 0.437988C3.62 0.437988 4.455 0.840728 5 1.47218C5.545 0.840728 6.38 0.437988 7.25 0.437988C8.79 0.437988 10 1.63626 10 3.17264C10 5.04712 8.3 6.5835 5.725 8.90547L5 9.56178Z"
        fill={color}
      />
    </svg>
  );
}

// 댓글 아이콘 말풍선
export function CommentIcon({ color = "#000" }: iconProps) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 3.24995H3.25C3.07761 3.24995 2.91228 3.31844 2.79038 3.44033C2.66848 3.56223 2.6 3.72756 2.6 3.89995C2.6 4.07233 2.66848 4.23766 2.79038 4.35956C2.91228 4.48146 3.07761 4.54994 3.25 4.54994H9.75C9.92239 4.54994 10.0877 4.48146 10.2096 4.35956C10.3315 4.23766 10.4 4.07233 10.4 3.89995C10.4 3.72756 10.3315 3.56223 10.2096 3.44033C10.0877 3.31844 9.92239 3.24995 9.75 3.24995ZM9.75 5.84992H3.25C3.07761 5.84992 2.91228 5.9184 2.79038 6.0403C2.66848 6.16219 2.6 6.32752 2.6 6.49991C2.6 6.6723 2.66848 6.83763 2.79038 6.95952C2.91228 7.08142 3.07761 7.1499 3.25 7.1499H9.75C9.92239 7.1499 10.0877 7.08142 10.2096 6.95952C10.3315 6.83763 10.4 6.6723 10.4 6.49991C10.4 6.32752 10.3315 6.16219 10.2096 6.0403C10.0877 5.9184 9.92239 5.84992 9.75 5.84992ZM11.05 0H1.95C1.43283 0 0.936838 0.205443 0.571142 0.571134C0.205446 0.936825 0 1.43281 0 1.94997V8.44988C0 8.96705 0.205446 9.46303 0.571142 9.82872C0.936838 10.1944 1.43283 10.3999 1.95 10.3999H9.4835L11.8885 12.8113C11.9492 12.8716 12.0213 12.9192 12.1005 12.9516C12.1797 12.9839 12.2645 13.0003 12.35 12.9998C12.4353 13.002 12.5199 12.9842 12.597 12.9478C12.7157 12.8991 12.8173 12.8162 12.889 12.7098C12.9607 12.6034 12.9994 12.4782 13 12.3498V1.94997C13 1.43281 12.7946 0.936825 12.4289 0.571134C12.0632 0.205443 11.5672 0 11.05 0ZM11.7 10.7833L10.2115 9.28837C10.1508 9.22813 10.0787 9.18047 9.99954 9.14812C9.92035 9.11578 9.83554 9.09938 9.75 9.09987H1.95C1.77761 9.09987 1.61228 9.03139 1.49038 8.9095C1.36848 8.7876 1.3 8.62227 1.3 8.44988V1.94997C1.3 1.77758 1.36848 1.61226 1.49038 1.49036C1.61228 1.36846 1.77761 1.29998 1.95 1.29998H11.05C11.2224 1.29998 11.3877 1.36846 11.5096 1.49036C11.6315 1.61226 11.7 1.77758 11.7 1.94997V10.7833Z"
        fill={color}
      />
    </svg>
  );
}

// 게시글 상세보기 셋팅 아이콘
export function SettingIcon({ color = "#000" }: iconProps) {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="5.5" r="1.5" fill={color} />
      <circle cx="12" cy="12" r="1.5" fill={color} />
      <circle cx="12" cy="18.5" r="1.5" fill={color} />
    </svg>
  );
}

// 기본 > 화살표
export function LineBasicArrow({
  color = "#000",
  strokeWidth = "2",
}: iconProps) {
  return (
    <svg
      width="7"
      height="10"
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0.5L6 5L1 9.5"
        stroke={color}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

// 기본 X 닫기
export function LineBasicClose({
  width = "11px",
  height = "11px",
  color = "#000",
}: iconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9.79602L9.79602 1M9.79602 9.79602L1 1"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

//소셜 응원하기 아이콘
export function CheeringIcon({
  width = "15px",
  height = "16px",
  color = "#000",
}: iconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4763 6.06056C14.2655 5.80752 14.0018 5.60383 13.7037 5.46386C13.4056 5.32389 13.0804 5.25105 12.7511 5.25049H9.33081L9.75085 4.1779C9.92556 3.70827 9.98375 3.20327 9.92041 2.70621C9.85707 2.20915 9.67411 1.73488 9.38721 1.32407C9.1003 0.913262 8.71803 0.578181 8.27317 0.347571C7.82832 0.116961 7.33416 -0.00229477 6.83309 3.34463e-05C6.68881 0.000334494 6.54768 0.0422436 6.42661 0.120736C6.30555 0.199228 6.20969 0.310973 6.15053 0.442572L4.01285 5.25049H2.2502C1.65341 5.25049 1.08106 5.48756 0.659067 5.90956C0.237074 6.33155 0 6.9039 0 7.50069V12.7511C0 13.3479 0.237074 13.9203 0.659067 14.3423C1.08106 14.7643 1.65341 15.0013 2.2502 15.0013H11.7985C12.3249 15.0012 12.8346 14.8164 13.2389 14.4793C13.6432 14.1422 13.9165 13.674 14.0112 13.1562L14.9638 7.90572C15.0227 7.58123 15.0096 7.24775 14.9253 6.92889C14.8411 6.61004 14.6878 6.3136 14.4763 6.06056ZM3.75033 13.5012H2.2502C2.05127 13.5012 1.86048 13.4222 1.71982 13.2815C1.57916 13.1409 1.50013 12.9501 1.50013 12.7511V7.50069C1.50013 7.30176 1.57916 7.11097 1.71982 6.97031C1.86048 6.82965 2.05127 6.75062 2.2502 6.75062H3.75033V13.5012ZM13.5012 7.6357L12.5486 12.8862C12.5166 13.0609 12.4237 13.2186 12.2864 13.3312C12.149 13.4439 11.9761 13.5041 11.7985 13.5012H5.25046V6.15807L7.29063 1.56767C7.50064 1.62889 7.69567 1.73299 7.86343 1.87338C8.03118 2.01378 8.168 2.18742 8.26527 2.38336C8.36253 2.5793 8.41812 2.79327 8.42852 3.01177C8.43893 3.23027 8.40393 3.44856 8.32572 3.65285L7.92819 4.72544C7.84348 4.95216 7.81488 5.196 7.84484 5.43615C7.87479 5.67631 7.96241 5.90566 8.1002 6.10462C8.238 6.30358 8.42189 6.46625 8.63618 6.57874C8.85047 6.69122 9.08879 6.7502 9.33081 6.75062H12.7511C12.8613 6.75044 12.9702 6.77454 13.07 6.82121C13.1698 6.86788 13.2581 6.93597 13.3287 7.02064C13.4009 7.10414 13.4538 7.20257 13.4837 7.30889C13.5135 7.41521 13.5195 7.5268 13.5012 7.6357Z"
        fill={color}
      />
    </svg>
  );
}

export function RemoveArrowIcon({ strokeWidth = "1.5", color = "#000" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16683 4.91659L11.8098 4.91659C12.0529 4.91659 12.2861 5.01316 12.458 5.18507L17.2728 9.99992L12.458 14.8148C12.2861 14.9867 12.0529 15.0833 11.8098 15.0833L4.16683 15.0833C3.20033 15.0833 2.41683 14.2997 2.41683 13.3333L2.41683 6.66659C2.41683 5.70009 3.20033 4.91659 4.16683 4.91659Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="bevel"
      />
      <path
        d="M6.76173 8.42846L9.90443 11.5712"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6.76159 11.5712L9.90429 8.42846"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ReportSirenIcon({ color = "#000" }: iconProps) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.71277 5.71792C1.71277 2.61532 4.22793 0.100098 7.33055 0.100098C10.4332 0.100098 12.9483 2.61539 12.9483 5.71798V9.60907C13.9781 9.95207 14.7207 10.9237 14.7207 12.0688C14.7207 13.5003 13.5602 14.6608 12.1287 14.6608H2.59199C1.16047 14.6608 0 13.5003 0 12.0688C0 10.9459 0.71401 9.98981 1.71277 9.62973V8.38834V5.71792ZM11.6483 5.71798V9.47681H3.01277V8.38834V5.71792C3.01277 3.33327 4.94592 1.4001 7.33055 1.4001C9.71517 1.4001 11.6483 3.33332 11.6483 5.71798ZM12.1287 10.7768H2.59199C1.87844 10.7768 1.3 11.3552 1.3 12.0688C1.3 12.7823 1.87844 13.3608 2.59199 13.3608H12.1287C12.8422 13.3608 13.4207 12.7823 13.4207 12.0688C13.4207 11.3552 12.8422 10.7768 12.1287 10.7768ZM7.16503 2.48208C5.52958 2.48208 4.20353 3.80746 4.20353 5.44319V5.6509C4.20353 6.00988 4.49455 6.3009 4.85353 6.3009C5.21252 6.3009 5.50353 6.00988 5.50353 5.6509V5.44319C5.50353 4.52571 6.24727 3.78208 7.16503 3.78208C7.52401 3.78208 7.81503 3.49107 7.81503 3.13208C7.81503 2.7731 7.52401 2.48208 7.16503 2.48208Z"
        fill={color}
      />
    </svg>
  );
}

export function ArrowBottomRightIcon({ color = "#000" }: iconProps) {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 -1.25211e-07L1.55023e-07 -1.43099e-07L9.74433e-08 4.82857C6.56414e-08 7.49543 2.1825 9.65714 4.875 9.65714L9.1275 9.65714L6.81 11.9526L7.875 13L12 8.91429L7.875 4.82857L6.8175 5.876L9.1275 8.17143L4.875 8.17143C3 8.17143 1.5 6.68571 1.5 4.82857L1.5 -1.25211e-07Z"
        fill={color}
      />
    </svg>
  );
}

export function ArrowZigZagIcon({
  width = "13",
  height = "8",
  color = "#000",
}: iconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.45488 1.60777L13 0L11.6198 5.6061L9.89804 3.9532L7.12069 6.84627C7.02641 6.94448 6.89615 7 6.76 7C6.62385 7 6.49359 6.94448 6.39931 6.84627L4.36 4.72199L1.36069 7.84627C1.16946 8.04547 0.85294 8.05193 0.653735 7.86069C0.454529 7.66946 0.44807 7.35294 0.639307 7.15373L3.99931 3.65373C4.09359 3.55552 4.22385 3.5 4.36 3.5C4.49615 3.5 4.62641 3.55552 4.72069 3.65373L6.76 5.77801L9.17665 3.26067L7.45488 1.60777Z"
        fill={color}
      />
    </svg>
  );
}