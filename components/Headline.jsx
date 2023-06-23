import styles from '@/styles/Home.module.css'
import Image from 'next/image'


export function Headline(props){
    console.log(props)
    return (
        <div>
            <h1 className={styles.title}>{props.page}page</h1>
            <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>src/pages/{props.page}.js</code>
                </p>
                <div>
                    <a 
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        By{' '}
                        <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        width={100}
                        height={24}
                        priority
                        />
                    </a> 
                </div>
            </div>

            <div className={styles.center}>
            <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
            </div>
        </div>
    );
}