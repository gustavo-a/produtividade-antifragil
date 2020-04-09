<template>
  <Layout>
    <div class="container my-16">
      <div class="flex justify-center px-4">
        <div class="w-full md:w-10/12 lg:w-8/12">
          <h1
            class="text-4xl sm:text-5xl italic font-sans-secondary text-cafe-verde-amarelado"
          >
            Dúvidas
          </h1>
        </div>
      </div>
    </div>
    <div class="container mb-32">
      <div class="flex justify-center px-4">
        <div class="wysiwyg w-full md:w-10/12 lg:w-8/12">
          <ol>
            <li>
              <b>Qual a duração do curso?</b><br />
              <p>
                O curso sobre terá 5 semanas de duração.
              </p>
            </li>

            <li>
              <b>Qual o prazo para concluir o curso?</b><br />
              <p>
                O curso ficará disponível na plataforma online até 2022. Você
                pode fazê-lo no ritmo que preferir.
              </p>
            </li>

            <li>
              <b>Haverá testes ou provas?</b><br />
              <p>
                Não. O curso é para seu aprimoramento pessoal e para entender
                melhor o mundo atual, não há necessidade de testes.
              </p>
            </li>

            <li>
              <b>Poderei fazer perguntas? Terei alguma participação ativa?</b
              ><br />
              <p>
                Sim. Uma vez a cada módulo (5 semanas), Luciano Pires fará uma
                live respondendo às perguntas enviadas pelos alunos.
              </p>
            </li>

            <li>
              <b>O curso tem horário fixo?</b><br />
              <p>
                Não. Enviaremos os conteúdos semanalmente e você os assiste no
                seu ritmo. Apenas a live semanal será feita em horário pré
                agendado, ao vivo. Mesmo assim ela ficará disponível para quem
                não conseguiu assistir na hora.
              </p>
            </li>

            <li>
              <b>Preciso de algum conhecimento prévio para fazer o curso?</b
              ><br />
              <p>
                Não.
              </p>
            </li>

            <li>
              <b>
                Qual a melhor forma de contato para dúvidas técnicas, problemas
                de acesso e cobrança?</b
              ><br />
              <p>
                O email cursos@lucianopires.com.br é o melhor canal de contato
                para isso.
              </p>
            </li>

            <li>
              <b
                >Estou tendo dificuldades com a plataforma. Onde consigo
                ajuda?</b
              ><br />
              <p>
                Estamos utilizando a plataforma da Hotmart para hospedar o
                curso. Em caso de dúvidas sobre o acesso ao curso, procure
                orientação
                <a
                  class="text-cafe-meia-noite underline font-bold"
                  href="https://atendimento.hotmart.com.br/hc/pt-br/sections/115000600691-Como-acessar-meu-produto"
                  >nesta seção</a
                >. Se nenhum dos artigos no link anterior te ajudar, envie uma
                solicitação de ajuda para o suporte da Hotmart
                <a
                  class="text-cafe-meia-noite underline font-bold"
                  href="https://atendimento.hotmart.com.br/hc/pt-br/requests/new"
                  >neste link</a
                >.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import 'wysiwyg.css'

export default {
  metaInfo: {
    title: 'Dúvidas'
  }
}
</script>

<style>
li > p {
  margin-bottom: 1.4em !important;
}
</style>
