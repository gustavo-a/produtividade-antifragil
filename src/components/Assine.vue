<template>
  <section class="bg-cafe-meia-noite py-32" id="assine-bloco">
    <div class="container px-4">
      <div class="flex justify-center mb-16">
        <h2 class="title-1">
          <a href="https://hotm.art/kZYsYG">Assine agora</a>
        </h2>
      </div>
      <div class="flex flex-wrap md:justify-around">
        <div
          class="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-gray-100 text-center px-4 py-10 self-center mb-16 md:mb-0"
        >
          <Time class="m-auto mb-4" />
          <div
            class="font-sans-secondary text-cafe-verde-amarelado text-3xl mb-2"
          >
            De R$ <span class="line-through">469,00</span>
          </div>
          <span>Por apenas:</span>
          <div class="grid font-sans-secondary text-cafe-verde-amarelado my-4">
            <div class="text-2xl">10x de</div>
            <div class="text-5xl">R$ 23,99</div>
          </div>
          <span>Total:R$239,90</span>
        </div>
        <div class="w-full md:w-1/3 text-white">
          <p class="mb-4 font-bold text-justify">
            Um curso sobre Produtividade para quem quer ir além das ações
            táticas e mergulhar na estratégia: desenvolver um Olhar Produtivo.
            Provocativo, irreverente e com um material de apoio riquíssimo que
            em sua maior parte você não encontra aqui no Brasil.
          </p>
          <ul class="lista text-justify">
            <li>50% de desconto para a primeira turma</li>
            <li>
              Acesso ilimitado por 12 meses (vitalício para os assinantes do
              Café Brasil Premium)
            </li>
            <li>
              Grupo exclusivo no Telegram para perguntas, respostas e troca de
              ideias em relação ao tema
            </li>
            <li>
              Live semanal durante a duração do curso, com o autor Luciano
              Pires.
            </li>
            <li>
              Forma interativa que permite consumo em vídeo, áudio ou texto,
              quando, onde, como e quanto você quiser
            </li>
            <li>Conteúdo com aplicação imediata no dia a dia</li>
            <li>
              Oportunidade de adquirir novos hábitos e habilidades que vão
              transformar sua visão de mundo e maneira de fazer e consumir.
            </li>
          </ul>
          <call-to-action
            filled="bege"
            link="https://hotm.art/kZYsYG"
            size="lg"
            class="shadow-2xl mt-6 transform transition-transform duration-300 hover:scale-110"
          >
            <span class="pr-3 font-bold">Inscreva-se</span> <RightArrow />
          </call-to-action>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CTA from '~/components/shared/Cta'
import RightArrow from '~/assets/images/right-arrow.svg'
import Time from '~/assets/images/time.svg'

export default {
  components: {
    'call-to-action': CTA,
    RightArrow,
    Time
  }
}
</script>

<style lang="scss">
#assine-bloco {
  h2.title-1 {
    @apply .text-white;

    &::after {
      @apply .bg-white;
    }
  }
}
</style>
