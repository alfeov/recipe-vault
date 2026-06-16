import { TailSpin } from 'react-loader-spinner'
import styles from './Loader.module.scss'

export function Loader({ margin }) {
  return (
    <div className={styles.loaderContainer} style={{ margin: margin }}>
      <TailSpin
        visible={true}
        height='80'
        width='80'
        color='currentColor'
        ariaLabel='tail-spin-loading'
        radius='1'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  )
}
