<template>
  <Layout>
    <div class="bg-cafe-meia-noite">
      <section class="bg-luciano-wrapper flex">
        <div class="container pb-12 bg-luciano mt-auto">
          <div class="flex pt-8 md:pt-32 pb-8 md:pb-20">
            <div class="sm:w-2/3 lg:w-2/5 px-4">
              <h1 class="quote">
                Como aumentar a sua performance em meio a adversidades.
              </h1>
            </div>
            <div
              class="hidden md:w-1/3 lg:w-1/2 px-4 md:flex justify-center align-middle"
            >
              <Popup v-model="videoPopup">
                <div class="video-container">
                  <iframe
                    width="956"
                    height="538"
                    src="https://www.youtube.com/embed/5MApz1nUIiQ"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Popup>
              <button @click="videoPopup = !videoPopup">
                <PlayButton />
                <div class="sr-only">Assistir ao Vídeo</div>
              </button>
            </div>
          </div>
          <div class="flex justify-start mb-32 md:mb-0 md:mt-0 px-4">
            <call-to-action
              filled="bege"
              :link="$static.generalData.hotmartUrl"
              size="lg"
              class="shadow-2xl transform transition-transform duration-300 hover:scale-110"
            >
              <span class="pr-3 font-bold">Inscreva-se</span> <RightArrow />
            </call-to-action>
          </div>
        </div>
      </section>
    </div>
    <section class="bg-cafe-meia-noite pt-16 pb-8">
      <div class="container">
        <div class="flex flex-wrap text-white font-sans-secondary">
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 my-4 lg:m-0 flex">
            <div class="w-1/3 flex justify-center"><Work /></div>
            <div class="w-2/3 self-center md:self-start">
              Tenha o olhar treinado para a busca sistemática e contínua pela
              produtividade, independentemente de softwares, computadores ou
              processos
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 my-4 lg:m-0 flex">
            <div class="w-1/3 flex justify-center"><Work /></div>
            <div class="w-2/3 self-center md:self-start">
              Aprenda a fazer mais com menos, criar sistemas resistentes e mudar
              hábitos
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 my-4 lg:m-0 flex">
            <div class="w-1/3 flex justify-center"><Work /></div>
            <div class="w-2/3 self-center md:self-start">
              Prepare-se para levar sua capacidade de produção individual ao
              limite, sozinho ou em equipe, mantendo uma empresa enxuta, com
              custos baixos e flexível conforme os tempos atuais exigem
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 my-4 lg:m-0 px-4 flex">
            <div class="w-1/3 flex justify-center"><Work /></div>
            <div class="w-2/3 self-center md:self-start">
              Conheça a produtividade antifrágil, a habilidade de sair das
              crises melhor do que nelas entramos
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-20 pb-32">
      <div class="container">
        <div class="md:w-2/3 xl:w-1/3 m-auto">
          <h2 class="title-1">
            Produtividade começa com sua visão do mundo
          </h2>
        </div>
        <div class="flex justify-center">
          <div
            class="wysiwyg md:w-11/12 lg:w-2/3 my-16 mx-4 sm:mx-8 text-justify"
          >
            <p>
              Antes de sair comprando softwares e computadores e desenvolver
              habilidades práticas, é preciso preparar seu mindset para a
              produtividade. É preciso ter um Olhar Produtivo. Produtividade
              Antifrágil é um curso sem indicação de ferramentas, fórmulas
              prontas ou aquelas fórmulas mágicas que dizem que "se ele pode,
              você pode também". Não, nem sempre podemos.
            </p>
            <p>
              <b>PRODUTIVIDADE ANTIFRÁGIL</b> é essencial porque vem para
              provocar você a rever conceitos, a mudar hábitos e se preparar
              para os ciclos de queda e crescimento. O curso conta também com um
              material de apoio único, que você não encontrará em nenhum outro
              lugar. Mas vale cada segundo de seu esforço por consumi-lo.
            </p>
            <p>
              O curso é uma experiência imersiva, feito para você mergulhar mais
              fundo, inclusive com a possibilidade de consumir livros que
              indicarei e que em muitos casos, sequer estão disponíveis no
              Brasil, mas que eu sumarizo de forma profunda e comentada. Você
              pode escolher assistir as aulas em vídeo, em seguida ler os PDFs e
              ouvir os podcasts como, quando e onde quiser, e assim se
              desenvolver na direção do Olhar Produtivo.
            </p>
            <h3 class="title-2">
              As inscrições serão encerradas muito em breve. Então, não perca
              tempo.
            </h3>
          </div>
        </div>
        <div class="flex justify-center">
          <call-to-action
            filled="bege"
            :link="$static.generalData.hotmartUrl"
            size="lg"
            class="shadow-2xl transform transition-transform duration-300 hover:scale-110"
          >
            <span class="pr-3 font-bold">Inscreva-se</span> <RightArrow />
          </call-to-action>
        </div>
      </div>
    </section>
    <!-- Outras sessões -->
    <Autor />
    <Modulos />
    <BlocoCTA />
    <Depoimentos />

    <section class="py-32">
      <div class="container px-4">
        <div class="flex justify-center mb-16">
          <h2 class="title-1">
            Quem vai se beneficiar deste conteúdo
          </h2>
        </div>
        <div class="flex flex-wrap justify-center">
          <div class="w-full md:w-1/2 px-4">
            <div class="wysiwyg">
              <p class="text-center">
                Qualquer pessoa preocupada em ampliar sua capacidade de
                execução, em melhorar continuamente e aumentar a velocidade de
                suas decisões e performance, sem perder a qualidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Assine />
  </Layout>
</template>

<static-query>
query{
  generalData(id: "1"){
    hotmartUrl
  }
}
</static-query>

<script>
import PlayButton from '~/assets/images/play.svg'
import RightArrow from '~/assets/images/right-arrow.svg'
import Work from '~/assets/images/work.svg'
import CTA from '~/components/shared/Cta'

import Autor from '~/components/Autor'
import Modulos from '~/components/Modulos'
import Depoimentos from '~/components/Depoimentos'
import Assine from '~/components/Assine'
import Popup from '~/components/shared/Popup'
import BlocoCTA from '~/components/BlocoCTA'

import 'wysiwyg.css'

export default {
  metaInfo: {
    title: 'Como aumentar sua performance em meio a adversidades',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Um curso sobre Produtividade para quem quer ir além das ações táticas e mergulhar na estratégia: desenvolver um Olhar Produtivo. Provocativo, irreverente e com um material de apoio riquíssimo que em sua maior parte você não encontra aqui no Brasil.'
      }
    ],
    link: [{ rel: 'canonical', href: 'https://produtividadeantifragil.com.br' }]
  },
  components: {
    PlayButton,
    RightArrow,
    Work,
    'call-to-action': CTA,
    Modulos,
    Autor,
    Depoimentos,
    BlocoCTA,
    Assine,
    Popup
  },
  data() {
    return {
      videoPopup: false
    }
  }
}
</script>

<style lang="scss">
.bg-luciano {
  background: url('../assets/images/linha.png') no-repeat center right/auto,
    url('../assets/images/imagem_hero.png') no-repeat center center/cover;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

  @media (max-width: 767px) {
    background: none;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}

.bg-luciano-wrapper {
  @media (max-width: 767px) {
    background: url('../assets/images/imagem_hero.png') no-repeat bottom
      center/contain;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}

.quote {
  @apply .text-white .font-sans .text-5xl .font-bold .relative .inline .leading-tight;

  @media (max-width: 1024px) {
    @apply .text-3xl;
  }

  @media (max-width: 500px) {
    @apply .text-2xl;
  }

  @media (max-width: 360px) {
    @apply .text-xl;
  }
}
ul.lista {
  li {
    list-style-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIHZpZXdCb3g9IjAgMCA2IDYiPjxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjYiIGZpbGw9IiNBNEM1NDYiLz48L3N2Zz4=);
    margin-bottom: 0.25rem;
  }
}

/******************************
  Títulos
*******************************/

.title-1,
.title-2 {
  @apply .font-sans-secondary .text-cafe-ardosia;
}

.title-1 {
  @apply .text-3xl .text-center .relative .font-bold;

  &::after {
    content: '';
    @apply .block .bg-cafe-ardosia .m-auto .mt-6;
    height: 5px;
    width: 125px;
  }
}

.title-2,
.wysiwyg .title-2 {
  @apply .text-2xl .font-normal;

  @media (max-width: 360px) {
    @apply .text-xl;
  }
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
