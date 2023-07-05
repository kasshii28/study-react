import styles from './Links.module.css'

const LINKS = [
    { href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Docs →",
      description: "Find in-depth information about Next.js features and&nbsp;API."
    },
    {
      href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Learn →",
      description: "Learn about Next.js in an interactive course with&nbsp;quizzes!"
    },
    {
      href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Templates →",
      description: "Discover and deploy boilerplate example Next.js&nbsp;projects."
    },
    {
      href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Deploy →",
      description: "Instantly deploy your Next.js site to a shareable URLwith&nbsp;Vercel."
    },
];
export const Links = (() =>{
    return (
    <div className={styles.grid}>
        {LINKS.map(link =>{
            return (
                <a
                    key={link.href}
                    href={link.href}
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <h2>
                {link.title}
                </h2>
                <p>
                {link.description}
                </p>   
                </a>
            )
        })}

            <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>

            <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                
            </a>

            <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                
        </a>
    </div>
    )
})