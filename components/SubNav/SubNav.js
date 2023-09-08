import styles from './SubNav.module.scss';
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function SubNav({ itemSet }) {
  const router = useRouter();
  return (
    <ul className={styles.subNav}>
      {itemSet.map((item, index) => {
        return (
          <li key={index}>
            <Link className={router.pathname === item.link ? styles.active : ""} href={item.link}>
              {item.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}