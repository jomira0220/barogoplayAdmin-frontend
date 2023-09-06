import styles from './message.module.scss';
import Button from '@/components/Button/Button';
import { useRouter } from 'next/router';

export default function MessageAndGiftPage() {
  const router = useRouter();
  return (
    <div className={styles.messageWarp}>
      <div className='basicBox'>
        <h3>발송대기</h3>
        <Button variantStyle="gray" sizeStyle="md">대기 메시지 삭제</Button>
        <Button variantStyle="color" sizeStyle="md" onClick={() => router.push(router.pathname + "/newMessage&Gift")}>새 메시지 / 선물</Button>
      </div>
      <div className='basicBox'>
        <h3>발송완료</h3>
      </div>
    </div>
  )
}