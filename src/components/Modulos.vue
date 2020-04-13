<template>
  <section class="py-16">
    <div class="container">
      <div class="flex justify-center mb-16">
        <div>
          <h2 class="title-1">
            Os Módulos
          </h2>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="timeline w-full lg:w-3/4">
          <ol>
            <li>
              <div class="content">
                <div class="titulo">
                  É a produtividade, estúpido!
                </div>
                <div class="duracao">3 horas</div>
                <div class="descricao">
                  1. A definição de Produtividade <br />
                  A cadeia da Produtividade Produtividade como resultante da
                  relação Output/Input <br />
                  Indo além das planilhas <br /><br />
                  2. O conceito Antifrágil <br />
                  Sumário comentado do livro homônimo de Nassim Nicholas Taleb
                  <br /><br />
                  3. O ciclo de destruição criativa <br />
                  Como a chegada das novas tecnologias destrói as antigas
                  <br /><br />
                  4. Ensaio sobre a Produtividade <br />
                  Uma reflexão sobre conceitos e desafios para a produtividade
                  com foco em nossa produtividade tupiniquim <br /><br />
                  Bônus – Antecipação do módulo 20<br /><br />
                  Produtividade no Home Office <br />Dicas práticas para quem se
                  vê diante do desafio de trabalhar remotamente
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  O Olhar Produtivo
                </div>
                <div class="duracao">2 horas</div>
                <div class="descricao">
                  5. As doenças da produtividade <br />
                  Os problemas de visão de mundo que impactam diretamente em
                  nossa produtividade. <br />
                  O Olhar Produtivo – Uma proposta de visão de mundo com foco na
                  produtividade <br /><br />
                  6. O Podsumário The Leading Brain <br />
                  O que aprendemos com estudos científicos pode transformar
                  radicalmente a forma como exercemos liderança e abrimos
                  caminho para o sucesso. <br /><br />
                  7. A Matriz Vhirpa <br />
                  Um modelo para revisão do planejamento estratégico
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  Faça mais com menos
                </div>
                <div class="duracao">2 horas</div>
                <div class="descricao">
                  8. Sobre sistemas <br />
                  A diferença entre métodos, processos e sistemas <br /><br />

                  9. Sistematizando Processos <br />
                  O segredo para a velocidade com qualidade <br /><br />

                  10. Podsumário Sistematize Já <br />
                  Como a sistematização de processos pode levar à aumento de
                  velocidade e escala sem perda de qualidade.
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  Produtividade é a arte de dizer não
                </div>
                <div class="duracao">3 horas</div>
                <div class="descricao">
                  11. Sobre gastar Tempo <br />
                  Como você gasta seu tempo de vida? <br /><br />

                  12. Podsumário Speed <br />
                  Como os líderes aceleram a execução bem-sucedida.<br /><br />

                  13. Urgente ou Importante<br />
                  A diferença entre Urgente e Importante<br />
                  As matrizes Covey e Eisenhower, que ajudam a definir onde
                  aplicar nossa energia e recursos<br />Foco: o grande desafio
                  da produtividade<br /><br />

                  14. A Matriz Carver<br />
                  A aplicação prática de um instrumento que os militares
                  utilizam para hierarquizar seus alvos e definir quais são
                  urgentes e quais são importantes.<br /><br />

                  15. Ensaio sobre o Tempo<br />
                  Uma reflexão sobre como usamos o tempo e a diferença que faz
                  saber escolher bem o que fazemos com ele
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  Todo mundo é incompetente, inclusive você
                </div>
                <div class="duracao">3 horas</div>
                <div class="descricao">
                  16. Ensaio sobre a incompetência <br />
                  A linha da consciência da competência<br /><br />

                  17. Praticando a introspectiva<br />
                  Uma revisão de nossas crenças e valores em busca de nossas
                  forças e fraquezas<br /><br />

                  18. Empenho e Desempenho<br />
                  A importância do alimento intelectual para desenvolver
                  discernimento e capacidade de julgamento e tomada de decisão,
                  que estão na raiz da produtividade <br />
                  Mudança de Hábitos. <br /><br />

                  19. Podsumário Simplifique<br />
                  Como os melhores negócios do mundo são bem-sucedidos ao
                  simplificar seus processos e modelos de negócio.<br /><br />

                  20. Produtividade no Home Office<br />
                  Dicas práticas para quem se vê diante do desafio de trabalhar
                  remotamente<br /><br />

                  21. O oportunismo disciplinado<br />
                  Como nosso planejamento estratégico precisa ser flexível para
                  estar aberto às oportunidades<br /><br />
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Modulos'
}
</script>

<style lang="scss" scoped>
.timeline {
  @apply .relative;

  &::before {
    content: '';
    width: 3px;
    height: 74%;
    background: rgba($color: #a4c546, $alpha: 0.4);
    @apply .block .absolute .m-auto .right-0 .left-0;
  }
  ol {
    counter-reset: number;
    position: relative;

    li {
      &::before {
        counter-increment: number;
        content: counter(number);
        @apply .absolute .right-0 .left-0 .m-auto .block .text-center .text-white .bg-cafe-ardosia .text-2xl .rounded-full .font-sans-secondary;
        width: 36px;
        height: 36px;
      }

      .content {
        width: 50%;
      }

      &:nth-of-type(odd) {
        .content {
          @apply .text-right .pr-16;
        }
      }

      &:nth-of-type(even) {
        .content {
          @apply .text-left .pl-16;
          transform: translate3d(100%, 0, 0);
        }
      }

      @media (max-width: 767px) {
        &:nth-of-type(odd) {
          .content {
            @apply .pr-12;
          }
        }

        &:nth-of-type(even) {
          .content {
            @apply .pl-12;
          }
        }
      }

      @media (max-width: 767px) {
        &:nth-of-type(odd),
        &:nth-of-type(even) {
          .content {
            @apply .mb-16 .pt-16 .text-center .pr-0 .pl-0;
            transform: translate3d(50%, 0, 0);
            * {
              background: #fff;
            }
          }
        }
      }

      @media (max-width: 500px) {
        &:nth-of-type(odd),
        &:nth-of-type(even) {
          .content {
            width: 100%;
            @apply .pr-4 .pl-4;
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }

  .titulo {
    @apply .font-sans-secondary .text-xl .italic .text-cafe-verde-amarelado;
  }

  .duracao {
    @apply .font-bold .mb-4;
  }
}
</style>
