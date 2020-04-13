<template>
  <section class="py-32 bg-cafe-meia-noite">
    <div class="container">
      <div class="flex justify-center">
        <div class="w-5/6 lg:w-2/3 xl:w-1/2 relative">
          <div class="glide">
            <div data-glide-el="track" class="glide__track">
              <ul class="glide__slides">
                <li class="glide__slide">
                  <p class="title-2">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus dicta unde sit minus. Repellat incidunt quis
                    tempora ratione, ad nemo doloribus quos. Nulla voluptatum
                    illo modi autem facilis, dolore quos!”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold text-white">Fulano de Tal</div>
                    <div class="text-white">Empresário de sucesso</div>
                  </div>
                </li>
                <li class="glide__slide">
                  <p class="title-2">
                    “Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    labore consequatur ad qui, molestias minus minima quidem
                    doloribus laudantium blanditiis accusamus. Quaerat quia
                    suscipit officiis distinctio possimus natus, aspernatur
                    ipsam.”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold text-white">Fulano de Tal</div>
                    <div class="text-white">
                      Palestrante
                    </div>
                  </div>
                </li>
                <li class="glide__slide">
                  <p class="title-2">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, itaque ut! Iure rerum optio omnis rem! Doloribus
                    totam officia excepturi laborum quibusdam repellendus sint
                    dicta harum adipisci est. Pariatur, recusandae!”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold text-white">Fulano de Tal</div>
                    <div class="text-white">
                      Economista
                    </div>
                  </div>
                </li>
                <li class="glide__slide">
                  <p class="title-2">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt vitae a molestiae odio dolores? Molestias doloribus
                    fugit sint, sit, facere ipsam velit assumenda atque iste
                    corrupti voluptatum officiis itaque quisquam.”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold text-white">Fulano de Tal</div>
                    <div class="text-white">
                      Escritor
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="controls left-0 md:ml-32" @click="slider.go('<')">
            <BigArrow class="inverter" />
            <div class="sr-only">Depoimento anterior</div>
          </div>
          <div class="controls right-0 md:mr-32" @click="slider.go('>')">
            <BigArrow />
            <div class="sr-only">Próximo depoimento</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import BigArrow from '~/assets/images/big-arrow.svg'

export default {
  name: 'DepoimentosSlider',
  components: {
    BigArrow
  },
  data() {
    return {
      slider: null
    }
  },
  mounted() {
    this.slider = new Glide('.glide', {
      autoplay: 6000,
      perView: 1
    })
    this.slider.mount()
  }
}
</script>

<style lang="scss" scoped>
.title-2 {
  @apply .text-center .text-white .font-semibold;
}

.controls {
  @apply .absolute .bottom-0 .font-bold .cursor-pointer .text-cafe-verde-amarelado .text-3xl .font-sans-secondary;

  @media (max-width: 767px) {
  }
}

.inverter {
  transform: rotate(180deg);
}
</style>
