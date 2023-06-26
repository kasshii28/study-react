import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import { Headline } from './Headline'
import { Links } from './Links';

const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
  return (
      <main className={`${styles.main} ${inter.className}`}>
        <Headline page={props.page} >
        <code className={styles.code}>src/pages/{props.page}.js</code> 
          </Headline>       
          <Links/>
      </main>
  );
}
