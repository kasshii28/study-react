import styles from './Main.module.css'
import { Inter } from 'next/font/google'
import { Headline } from 'src/components/Headline'
import { Links } from 'src/components/Links';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] })

export const Main = ((props) =>{
  
  useEffect(() =>{
    document.body.style.backgroundColor = "lightblue";
  
    return () =>{
      document.body.style.backgroundColor = "";
    }
  },[])

  return (
      <main className={`${styles.main} ${inter.className}`}>
        <Headline page={props.page} >
        <code className={styles.code}>src/pages/{props.page}.js</code> 
          </Headline>       
          <Links/>
      </main>
  );
})
