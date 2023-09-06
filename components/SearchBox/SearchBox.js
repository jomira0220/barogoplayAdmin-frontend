import styles from './SearchBox.module.scss'
import Button from '@/components/Button/Button'


export default function SearchBox(props) {
  return (
    <>
      <input type="search" className={styles.searchBox} />
      <Button variantStyle="color" sizeStyle="sm">검색</Button>
    </>
  )
}