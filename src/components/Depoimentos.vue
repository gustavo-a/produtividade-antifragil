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
          <template #imagem>
            <g-image
              src="~/assets/images/Foto_Cerbasi1.jpg"
              alt="Gustavo Cerbasi - Economista"
            />
          </template>
          <template #nome>
            Gustavo Cerbasi
          </template>
          <template #descricao>
            Economista
          </template>
          <template #conteudo>
            <div class="video-container">
              <iframe
                width="956"
                height="538"
                src="https://www.youtube.com/embed/J41n4b_JWy0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </template>
        </Depoimento>
        <Depoimento>
          <template #imagem>
            <g-image
              src="~/assets/images/Adalberto-Piotto.jpg"
              alt="Adalberto Piotto - Jornalista"
            />
          </template>
          <template #nome>
            Adalberto Piotto
          </template>
          <template #descricao>
            Jornalista
          </template>
          <template #conteudo>
            <div class="video-container">
              <iframe
                width="956"
                height="538"
                src="https://www.youtube.com/embed/y9KF8VuPXhM"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </template>
        </Depoimento>
        <Depoimento>
          <template #imagem>
            <g-image
              src="~/assets/images/dado-schneider.jpg"
              alt="Dado Schneider - Palestrante"
            />
          </template>
          <template #nome>
            Dado Schneider
          </template>
          <template #descricao>
            Escritor e Palestrante
          </template>
          <template #conteudo>
            <div class="video-container">
              <iframe
                width="956"
                height="538"
                src="https://www.youtube.com/embed/OjkP_Kibylk"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </template>
        </Depoimento>
        <Depoimento>
          <template #imagem>
            <g-image
              src="~/assets/images/Bruno-Garschagen.jpg"
              alt="Bruno Garschagen - Escritor"
            />
          </template>
          <template #nome>
            Bruno Garschagen
          </template>
          <template #descricao>
            Cientista Político e Escritor
          </template>
          <template #conteudo>
            <div class="video-container">
              <iframe
                width="956"
                height="538"
                src="https://www.youtube.com/embed/8G-e3hKrQc0"
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
