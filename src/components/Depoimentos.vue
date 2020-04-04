<template>
  <section
    id="depoimentos-section"
    class="bg-cafe-meia-noite pt-10 pb-32 relative"
  >
    <div class="container">
      <div class="flex justify-center mb-16">
        <h2 class="title-1">
          Depoimentos
        </h2>
      </div>
      <div class="flex flex-wrap justify-center md:justify-evenly">
        <Depoimento>
          <template #imagem> </template>
          <template #nome>
            Roger Moreira
          </template>
          <template #descricao>
            Músico
          </template>
          <template #conteudo>
            <div class="video-container">
              <iframe
                width="956"
                height="538"
                src="https://www.youtube.com/embed/qZrMtcKNVSk"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </template>
        </Depoimento>
        <Depoimento>
          <template #imagem> </template>
          <template #nome>
            Rodrigo Gurgel
          </template>
          <template #descricao>
            Crítico literário
          </template>
          <template #conteudo>
            <div class="video-container">
              <iframe
                width="956"
                height="538"
                src="https://www.youtube.com/embed/KVoMZQRuoAk"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </template>
        </Depoimento>
        <Depoimento>
          <template #imagem> </template>
          <template #nome>
            Bene Barbosa
          </template>
          <template #descricao>
            Especialista em segurança pública
          </template>
          <template #conteudo>
            <div class="video-container">
              <iframe
                width="956"
                height="538"
                src="https://www.youtube.com/embed/kWMBBvESvA4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </template>
        </Depoimento>
      </div>
    </div>
  </section>
</template>

<script>
import Depoimento from '~/components/shared/Depoimento'
export default {
  name: 'Depoimentos',
  components: {
    Depoimento
  }
}
</script>

<style lang="scss">
#depoimentos-section {
  h2.title-1 {
    @apply .text-white;

    &::after {
      @apply .bg-white;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    left: 0;
    margin: auto;
    height: 5px;
    width: 80%;

    @apply .bg-cafe-verde-amarelado;
  }
}
</style>
