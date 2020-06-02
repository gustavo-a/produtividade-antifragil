<template>
  <footer class="py-12">
    <div class="container">
      <div class="flex flex-wrap justify-between px-4">
        <div class="lg:w-1/2 xl:w-2/5">
          <g-image
            quality="100"
            width="360px"
            src="~/assets/images/logo.png"
          ></g-image>
          <p class="mt-8 text-cafe-verde-amarelado">
            © 2020 - Café Brasil. Todos os direitos reservados. <br />
            Produtividade Antifrágil é uma realização Café Brasil Editorial
            Ltda. CNPJ: 05.809.981/0001-36.
          </p>
          <div class="flex justify-start mt-8">
            <a
              href="https://www.instagram.com/lucianopires/?hl=pt-br"
              target="_blank"
              class="pr-2"
              ><g-image
                quality="100"
                src="~/assets/images/Instagram.png"
              ></g-image
            ></a>
            <a
              href="https://twitter.com/lucianopires"
              target="_blank"
              class="pr-2"
              ><g-image
                quality="100"
                src="~/assets/images/Twitter.png"
              ></g-image
            ></a>
            <a
              href="https://www.facebook.com/luciano.pires/"
              target="_blank"
              class="pr-2"
              ><g-image
                quality="100"
                src="~/assets/images/Facebook.png"
              ></g-image
            ></a>
          </div>
        </div>
        <div class="mt-16 lg:mt-0 pl-8 lg:pl-8 xl:w-1/3">
          <div>
            <g-link
              to="/duvidas/"
              class="text-cafe-verde-amarelado text-sm inline-flex border border-cafe-verde-amarelado rounded font-sans-secondary italic py-4 px-8 mr-6 leading-none"
            >
              Dúvidas
            </g-link>
            <call-to-action
              link="https://produtividadeantifragil.club.hotmart.com"
              size="lg"
              border
            >
              <span class="text-cafe-verde-amarelado text-sm">Login</span>
            </call-to-action>
          </div>
          <div class="text-cafe-verde-amarelado font-semibold py-8">
            <g-link to="/politica-de-cancelamento/" class="hover:underline">
              Política de cancelamento
            </g-link>
            &bull;
            <g-link to="/politica-de-privacidade/" class="hover:underline">
              Política de privacidade
            </g-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-8">
      <div class="flex justify-center">
        <div class="w-full px-4 wysiwyg text-xs text-white">
          <p>
            AVISO LEGAL: As reflexões, conselhos e propostas sobre os temas
            produtividade, liderança, inovação, comunicação ou qualquer outro
            tema de qualquer um dos nossos produtos, sites, vídeos, palestras,
            programas ou outros conteúdos, representam nosso esforço para ajudar
            você a se desenvolver pessoal e profissionalmente, assim como o seu
            negócio ou organização. Mas não podemos garantir que nossas
            recomendações e conselhos obtenham resultados substanciais para
            todos os que consomem nossos produtos.
          </p>
          <p>
            Não garantimos ganhos futuros, pois nossas recomendações dependem da
            capacidade de assimilação, implementação e acompanhamento de cada
            indivíduo, além dos contextos diferentes de tempo e lugar onde serão
            aplicadas.
          </p>
          <p>
            Ao adquirir algum de nossos produtos você aceita, concorda e entende
            que está assimilando conselhos e que a responsabilidade pela
            aceitação e sucesso de sua implementação é sua e somente sua.
          </p>
          <p>
            Não garantimos ganhos, lucros, desempenho de marketing, crescimento
            de clientes ou audiência ou resultados de qualquer tipo. Você é o
            único responsável por suas ações e resultados na vida e negócios que
            dependem de fatores pessoais, incluindo, mas não necessariamente
            limitados a suas habilidades, conhecimento, dedicação, conhecimento
            de negócios, rede e situação financeira, para citar apenas alguns.
          </p>
          <p>
            Você também entende que qualquer depoimento ou aprovações emitidas
            por nossos clientes ou público representado em nossos programas,
            sites, conteúdo, páginas de destino, páginas de vendas ou ofertas
            não foram avaliadas cientificamente por nós e os resultados
            experimentados pelos indivíduos podem variar significativamente.
          </p>
          <p>
            Quaisquer declarações descritas no nosso websites, programas,
            conteúdos e ofertas são simplesmente nossa opinião e, portanto, não
            são garantias ou promessas de desempenho real.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CTA from '~/components/shared/Cta'
export default {
  name: 'DefaultFooter',
  components: {
    'call-to-action': CTA
  }
}
</script>

<style lang="scss" scoped>
footer {
  background: #03072a;

  .wysiwyg {
    p {
      @apply .mb-2 .leading-tight;
    }
  }
}
</style>
