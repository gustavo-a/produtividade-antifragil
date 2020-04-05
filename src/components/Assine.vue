<template>
  <section class="bg-cafe-meia-noite py-32" id="assine-bloco">
    <div class="container px-4">
      <div class="flex justify-center mb-16">
        <h2 class="title-1">Assine agora</h2>
      </div>
      <div class="flex flex-wrap md:justify-around">
        <div
          class="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-gray-100 text-center px-4 py-10 self-center mb-16 md:mb-0"
        >
          <Time class="m-auto mb-4" />
          <span>Você investe apenas:</span>
          <div
            class="grid font-sans-secondary text-cafe-verde-amarelado my-4 italic"
          >
            <div class="text-2xl">10x de</div>
            <div class="text-5xl">R$ 18,90</div>
          </div>
          <span>Total:R$189,00</span>
        </div>
        <div class="w-full md:w-1/3 text-white">
          <p class="mb-4 font-bold">
            Esse é o mais valioso e completo curso online sobre a Primeira
            Guerra Mundial já produzido.
          </p>
          <ul class="lista">
            <li>Mais de 30% de desconto.</li>
            <li>Acesso ilimitado por 12 meses (vitalício para patronos).</li>
            <li>Espaço para perguntas e respostas.</li>
            <li>Aulas ao vivo com Flavio Morgenstern.</li>
            <li>
              Metodologia didática que permite aprendizado profundo, num curto
              espaço de tempo.
            </li>
            <li>
              Oportunidade de adquirir conhecimentos que vão transformar a sua
              visão de mundo
            </li>
          </ul>
          <call-to-action
            filled="bege"
            link="https://hotm.art/oOizV2"
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
