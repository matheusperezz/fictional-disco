import TopTitle from "@/components/TopTitle"
import Section from "./Section"

interface ProfExperienceItemProps {
  company: string
  role: string
  description: string[]
}

const ResumePage = () => {
    const description = [
      "- Responsável pela manutenção de novos módulos de funcionalidades relacionadas à reprodução e download de vídeos.",
      "- Contribui para aumentar a cobertura de testes no projeto, fazendo com que a confiabilidade do código aumente em 14%.",
      "- Expertise na comunicação entre pessoas não técnicas e a equipe de desenvolvimento.",
      "- Solucionar com proficiência problemas tecnológicos simples e complexos para diferentes projetos atribuídos, alcançando mais de 90% de índice de satisfação do cliente.",
      "Tecnologias: Android SDK, Kotlin, Coroutines, Java, Jetpack Compose, KMP, Firebase, MVVM, Clean Architecture, Modularization, Room, Injeção de dependências (Hilt, Koin) e RestAPI com Retrofit."
    ];
    return (
      <div>
        <TopTitle title="Currículo"/>

        <header className="container mx-auto">
          <h1>Matheus Perez</h1>
          <p>São Paulo, Brasil</p>
          <a className="text-blue-700 hover:underline" href="https://linkedin.com/in/matheusdeperez">LinkedIn: matheusdeperez</a>
        </header>

        <Section title="Resumo">
          <p>2 anos de experiência profissional com Android nativo utilizando Kotlin e Java, participei de projetos com milhares de acessos diários e também levando aplicações do zero até publicação na Play Store. Eu ensino desenvolvimento Android com artigos e vídeos.</p>
        </Section>

        <Section title="Experiência profissional">
          <ul>
            
            <ProfExperienceItem 
              company="Alura"
              role="Android Developer [Maio/2022 - Maio/2024]"
              description={ description }
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

        <footer className="m-8 text-center">
          <p>Criado por Matheus Perez, conecta lá no linkedin 🫡</p>
        </footer>
      </div>
    )
}

const ProfExperienceItem = ({ company, role, description }: ProfExperienceItemProps) => {
  return(
    <li className="mt-4">
      <h3><strong>{ company }</strong></h3>
      <p><strong>{ role }</strong></p>
      <ul>
        {description.map((d, index) => (
          <li key={index}>{d}</li>
        ))}
      </ul>
    </li>
  )
}


export default ResumePage
