import TopTitle from "@/components/TopTitle"
import Section from "./Section"

interface ProfExperienceItemProps {
  company: string
  role: string
  description: string
}

const ResumePage = () => {
    return (
      <div>
        <TopTitle title="Currículo"/>

        <header className="container mx-auto">
          <h1>Matheus Perez</h1>
          <p>São Paulo, Brazil</p>
          <a className="text-blue-700 hover:underline" href="https://linkedin.com/in/matheusdeperez">LinkedIn: matheusdeperez</a>
        </header>

        <Section title="Resumo">
          <p>2 anos de experiência profissional com Android nativo usando Kotlin e Java, já participei de projetos com milhares de acessos diários e também levando aplicativos do zero até a publicação na Play Store. Ensino desenvolvimento android com artigos e vídeos.</p>
        </Section>

        <Section title="Experiência profissional">
          <ul>
            
            <ProfExperienceItem 
              company="Alura"
              role="Desenvolvedor Android [Maio/2022 - Atualmente]"
              description="Responsável por criar e manter aplicativos e conteúdos escritos relacionados ao desenvolvimento Android. Publicação de aplicativos na Play Store. Versionamento de código através do Git. Tecnologias: Android, Kotlin, Jetpack Compose, KMP, Firebase, MVVM, Clean Architecture, Modularização e Retrofit."
            />

          </ul>
        </Section>

        <Section title="Educação">
          <ul>
            <li>
              <h3>Universidade Anhembi Morumbi</h3>
              <p>Bacharelado em Ciências da Computação</p>
              <p>Período: 01/2021 - 12/2024</p>
            </li>
          </ul>
        </Section>

        <Section title="Habilidades">
          <img className="w-full mb-4" src="https://skillicons.dev/icons?i=androidstudio,kotlin,rust,java,react,ts,nextjs,aws,docker,git,firebase,vim,postgres,redis,mongodb"/>
        </Section>

        <div className="m-8"></div>
      </div>
    )
}

const ProfExperienceItem = ({ company, role, description }: ProfExperienceItemProps) => {
  return(
    <li className="mt-4">
      <h3><strong> - { company }</strong></h3>
      <p><strong> - { role }</strong></p>
      <p>{ description }</p>
    </li>
  )
}


export default ResumePage
