<template>
  <section class="py-16 bg-cinza-meia-noite">
    <div class="container">
      <div class="flex justify-center">
        <div
          class="w-11/12 md:w-5/6 flex flex-wrap px-4 sm:px-16 py-20 items-center justify-between cta-bg rounded-lg"
        >
          <div class="w-full md:w-1/2 mb-8 md:mb-0">
            <p class="text-cafe-ardosia font-sans-secondary text-2xl">
              Para aprender a arte de fazer mais com menos. Menos recursos,
              menos tempo, menos softwares, menos equipe, apenas desenvolvendo o
              que chamo de "olhar produtivo".
            </p>
          </div>
          <div
            class="w-full md:w-1/2 lg:w-1/3 flex justify-start md:justify-end lg:block"
          >
            <call-to-action
              filled="cinza-1"
              :link="$static.generalData.hotmartUrl"
              size="lg"
              class="shadow-2xl transform transition-transform duration-300 hover:scale-110"
            >
              <span class="pr-3 font-bold">Inscreva-se</span> <RightArrow />
            </call-to-action>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query{
  generalData(id: "1"){
    hotmartUrl
  }
}
</static-query>

<script>
import CTA from '~/components/shared/Cta.vue'
import RightArrow from '~/assets/images/right-arrow.svg'

export default {
  name: 'BlocoCTA',
  components: {
    'call-to-action': CTA,
    RightArrow
  }
}
</script>

<style lang="scss" scoped>
.bg-cinza-meia-noite {
  background: linear-gradient(#fff 50%, #322153 50%);
}

.cta-bg {
  background: url('../assets/images/linha.png') no-repeat center right -10%,
    linear-gradient(#a4c546, #a4c546);

  @media (max-width: 767px) {
    background: #a4c546;
  }
}
</style>
