<template>
  <section id="alunos-section" class="bg-cafe-meia-noite pt-10 pb-32 relative">
    <div class="container pl-4 sm:pr-4">
      <div class="flex justify-center mb-16">
        <h2 class="title-1">
          Alunos
        </h2>
      </div>
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/pY8yFAljDCo"
            >
              <template #imagem>
                <g-image
                  src="~/assets/images/alunos/wagner-roncoletta.png"
                  alt="Wagner Roncoletta"
                />
              </template>
              <template #nome>
                Wagner Roncoletta
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/pr_vJRXqNmI"
            >
              <template #imagem>
                <g-image
                  src="~/assets/images/alunos/ronny-clayton.jpg"
                  alt="Ronny Clayton"
                />
              </template>
              <template #nome>
                Ronny Clayton
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/GUbeni0LAhA"
            >
              <template #imagem>
                <g-image src="~/assets/images/alunos/jamile.jpg" alt="Jamile" />
              </template>
              <template #nome>
                Jamile
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/uZNLBtEErIs"
            >
              <template #imagem>
                <g-image
                  src="~/assets/images/alunos/rangel-ribeiro.jpg"
                  alt="Rangel Ribeiro"
                />
              </template>
              <template #nome>
                Rangel Ribeiro
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/gdLi8VbX2Jg"
            >
              <template #imagem>
                <g-image
                  src="~/assets/images/alunos/marcio-goulart-jr.jpg"
                  alt="Marcio Goulart Jr"
                />
              </template>
              <template #nome>
                Marcio Goulart Jr
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/ZhxMGVO6mio"
            >
              <template #imagem>
                <g-image src="~/assets/images/alunos/wagner.jpg" alt="Wagner" />
              </template>
              <template #nome>
                Wagner
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/KtI01GD5s-8"
            >
              <template #imagem>
                <g-image
                  src="~/assets/images/alunos/tamara-pinheiro.jpg"
                  alt="Tamara Pinheiro"
                />
              </template>
              <template #nome>
                Tamara Pinheiro
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/vyp8tC25LKA"
            >
              <template #imagem>
                <g-image src="~/assets/images/alunos/lucas.jpg" alt="Lucas" />
              </template>
              <template #nome>
                Lucas
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/uOjeWVDu0TA"
            >
              <template #imagem>
                <g-image
                  src="~/assets/images/alunos/pedro-carvalho.png"
                  alt="Pedro Carvalho"
                />
              </template>
              <template #nome>
                Pedro Carvalho
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/JiVWBGWtEls"
            >
              <template #imagem>
                <g-image
                  src="~/assets/images/alunos/tom-castro.png"
                  alt="Tom Castro"
                />
              </template>
              <template #nome>
                Tom Castro
              </template>
            </Depoimento>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Depoimento from '~/components/shared/Depoimento'
import Glide from '@glidejs/glide'

export default {
  name: 'Alunos',
  components: {
    Depoimento
  },
  mounted() {
    new Glide('.glide', {
      type: 'slider',
      perView: 4,
      gap: 100,
      autoplay: 2000,
      bound: true,
      peek: { before: 0, after: 0 },
      breakpoints: {
        1300: {
          perView: 4,
          gap: 40,
          peek: { before: 0, after: 0 }
        },
        1023: {
          perView: 3,
          gap: 40,
          peek: { before: 0, after: 0 }
        },
        800: {
          perView: 2,
          gap: 40,
          peek: { before: 0, after: 0 }
        },
        639: {
          perView: 1,
          gap: 30,
          peek: { before: 0, after: 250 }
        },
        530: {
          perView: 1,
          gap: 30,
          peek: { before: 0, after: 100 }
        }
      }
    }).mount()
  }
}
</script>

<style lang="scss">
@import 'node_modules/@glidejs/glide/src/assets/sass/glide.core';

#alunos-section {
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
