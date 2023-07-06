import styles from 'src/components/Footer/Footer.module.css'

export const Footer = (() => {
  return (
    <footer className={styles.footer}>
        <a 
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" class={styles.img}/>
        </a>
    </footer>
  );
})
