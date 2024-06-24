import { Inter, Averia_Serif_Libre } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
const averia = Averia_Serif_Libre({ subsets: ['latin'], weight: ["300", "400", "700"] })

export default function Home() {

  return (
    <div className={`${styles.container} ${inter.className}`}>

      <div>
        <Image src="/logo.svg" alt="Japa" width={170} height={75} />
      </div>

      <div className={styles.form}>
        <div className={styles.form_header}>
          <Image src="/hero.png" alt="Japa" width={540} height={263} />
        </div>

        <div className={styles.form_body}>
          <div className={styles.form_content}>
            <h2 className={averia.className}>
              Agora você já pode ter acesso ao nosso cardápio para conferir nossa deliciosa culinária japonesa.
            </h2>

            <p>Clique no botão abaixo para ter acesso ao cardápio.</p> 

            
           
            <div className={styles.form_data}>
              <button onClick={() => window.open('https://drive.google.com/uc?export=download&id=1GIV2AvVh2UzriygQxyUhefJ-Fkzg8IjP', '_blank ', 'noopener,noreferrer')} className={styles.form_button}>DOWNLOAD</button>
            </div>             

          </div>
        </div>
      </div>

      <div>
        <span className={styles.copy}>
          © 2024 Fast Japa
        </span>
      </div>

    </div>
  )
}
