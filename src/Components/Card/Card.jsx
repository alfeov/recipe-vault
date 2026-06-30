import { Loader } from '@/components/Loader/Loader'
import { useState } from 'react'
import noImage from '@/assets/images/no-image.png'
import styles from './Card.module.scss'

export function Card({ id, title, image, desc, buttonText, onClick }) {
  const [imgLoading, setImgLoading] = useState(true)

  const handleLoad = () => {
    // to show loader spinning
    setTimeout(() => setImgLoading(false), 1000)
  }

  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        {imgLoading && <Loader margin='auto' />}
        <img
          className={styles.img}
          style={{
            width: imgLoading ? '0' : '100%',
            opacity: imgLoading ? '0' : '1',
          }}
          src={image ?? noImage}
          alt={title}
          loading='lazy'
          onLoad={handleLoad}
        />
      </div>
      <footer className={styles.footer}>
        <p className={styles.title}>{title}</p>
        <ul className={styles.info}>
          <li>{desc}</li>
        </ul>
        <button
          className={styles.button}
          onClick={() => {
            onClick({ title, id })
          }}
        >
          Go to {buttonText}
        </button>
      </footer>
    </article>
  )
}
