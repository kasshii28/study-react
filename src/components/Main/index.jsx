import styles from './Main.module.css'
import { Inter } from 'next/font/google'
import { Headline } from 'src/components/Headline'
import { Links } from 'src/components/Links';

const inter = Inter({ subsets: ['latin'] })

export const Main = ((props) =>{
  return (
      <main className={`${styles.main} ${inter.className}`}>
        <Headline page={props.page} >
        <code className={styles.code}>src/pages/{props.page}.js</code> 
          </Headline>       
          <Links/>
      </main>
  );
})
