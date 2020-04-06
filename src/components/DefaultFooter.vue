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
              link="http://membros.produtividadeantifragil.com.br"
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

<style lang="scss">
footer {
  background: #03072a;
}
</style>
