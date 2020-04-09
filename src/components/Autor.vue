<template>
  <section class="bg-cafe-ardosia">
    <div class="container py-16">
      <div class="flex flex-wrap justify-around">
        <div class="lg:w-1/3 px-4">
          <g-image
            src="~/assets/images/luciano-pires-autor.png"
            quality="80"
            alt="Luciano Pires"
            class="transform -translate-y-32"
          />
        </div>
        <div class="lg:w-1/2 px-4">
          <div class="title-1">Conheça o autor</div>
          <div class="wysiwyg text-white text-justify">
            <p>
              Luciano Pires é um personal trainer de fitness intelectual que
              respeita a inteligência de seu público.
            </p>
            <p>
              Luciano é um criador serial de conteúdo à frente do Café Brasil
              Editorial, uma empresa mais do que enxuta, mas com uma capacidade
              excepcional de produção. Ele publica semanalmente 4 episódios dos
              podcasts Café Brasil, LíderCast e Cafezinho, além de produzir
              videocasts, Lives, intensa produção nas mídias sociais, palestras,
              livros e artigos e conduzir o Café Brasil Premium, uma plataforma
              de conteúdo por assinatura recorrente. Isso só é possível com um
              Olhar Produtivo.
            </p>
            <p>
              Luciano está interessado em ajudar você e sua equipe a refinar sua
              capacidade de julgamento e tomada de decisão, e neste curso aplica
              40 anos de experiência como executivo de multinacional,
              empreendedor, podcaster e muito mais. Conheça mais sobre o Luciano
              em lucianopires.com.br
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  background-image: url('../assets/images/linha-2.png');
  background-position: center left;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 1023px) {
    background-position: top left;
  }
}

.title-1 {
  @apply .text-white .text-left;

  &::after {
    @apply .mr-auto .ml-0 .mt-2 .mb-8;
  }
}
</style>
