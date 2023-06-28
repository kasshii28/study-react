import styles from './Footer.module.css'
;
export function Footer() {
  return (
    <footer class={styles.footer}>
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
}
