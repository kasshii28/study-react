import styles from 'src/components/Headline/Headline.module.css'
import Image from 'next/image'


export const Headline = ((props) =>{
     return (
        <>
            <h1 className={styles.title}>{props.page}page</h1><div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    {props.children}
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
        </>
    );
})