import { Inter, Averia_Serif_Libre } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })
const averia = Averia_Serif_Libre({ subsets: ['latin'], weight: ["300", "400", "700"] })

export default function Home() {

  const router = useRouter()

  function handleNextPage() {
    router.push('/formulario')
  }

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
              Você está próximo a conhecer o melhor da melhor culinária do mundo! Faça Login!
            </h2>

            <p>Garantimos sua satisfação culinária!</p>
          </div>

          <div className={styles.form_data}>
            <div className={styles.google} onClick={handleNextPage}>
              <div>
                <Image src="/google.svg" alt="Japa" width={24} height={24} />
              </div>

              <span>
                Fazer login com o Google
              </span>
            </div>

            <div className={styles.facebook} onClick={handleNextPage}>
              <div>
                <Image src="/facebook.svg" alt="Japa" width={24} height={24} />
              </div>

              <span>
                Fazer login com o Facebook
              </span>
            </div>
            <span className={styles.terms}>Ao acessar você concorda com os Termos de Uso</span>
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
