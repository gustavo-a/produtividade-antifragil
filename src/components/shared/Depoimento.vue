<template>
  <div class="depoimentoWrapper w-11/12 sm:w-2/3 md:w-5/12 lg:w-1/5">
    <div
      class="depoimento bg-guten-cinza-1 cursor-pointer overflow-hidden relative flex rounded-lg mb-16 lg:m-0"
      @click="abrirDepoimento"
    >
      <slot name="imagem" />
      <div class="absolute top-0 bottom-0 table m-auto w-full z-10">
        <PlayButton class="play" />
      </div>
      <div
        class="absolute p-4 bottom-0 h-full w-full flex flex-col justify-end depoimento__content"
      >
        <div
          class="font-sans-secondary text-xl font-bold text-cafe-verde-amarelado italic"
        >
          <slot name="nome" />
        </div>
        <div class="text-white text-sm">
          <slot name="descricao" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayButton from '~/assets/images/play.svg'
import Popup from '~/components/shared/Popup'

export default {
  name: 'Depoimento',
  props: {
    videoLink: String
  },
  components: {
    PlayButton,
    Popup
  },
  methods: {
    abrirDepoimento() {
      this.$modal.show('modal-video', { videoLink: this.videoLink })
    }
  }
}
</script>

<style lang="scss" scoped>
.depoimento {
  height: 300px;

  @media (max-width: 767px) {
    height: 400px;
  }

  &__content {
    background: linear-gradient(
      180deg,
      rgba($color: #322153, $alpha: 0.1) 0%,
      rgba($color: #322153, $alpha: 0.7) 60%,
      rgba($color: #322153, $alpha: 1) 90%
    );
  }
}
img {
  @apply .object-cover .w-full .h-full;
}

.play {
  margin: auto;
  transform: scale(0.6);
}
</style>
