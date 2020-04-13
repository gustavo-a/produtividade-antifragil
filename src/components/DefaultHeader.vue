<template>
  <header class="bg-cafe-meia-noite">
    <div class="container bg-linha">
      <div class="flex flex-wrap justify-between py-4">
        <g-link to="/" class="px-4 w-full sm:w-1/2" id="logo-header">
          <g-image
            quality="100"
            height="60"
            src="~/assets/images/logo.png"
            fit="inside"
            alt="Guten Morgen GO"
          />
        </g-link>
        <div
          class="pr-2 sm:px-4 ml-auto sm:ml-0 text-left grid sm:flex items-center"
          style="grid-gap: 5px"
        >
          <call-to-action
            filled="bege"
            border
            link="https://hotm.art/kZYsYG"
            size="sm"
            class="sm:mx-2 text-sm sm:text-base"
          >
            <span class="text-cafe-ardosia">Inscreva-se</span>
          </call-to-action>
          <!-- http://membros.produtividadeantifragil.com.br -->
          <call-to-action
            border
            link="http://membros.produtividadeantifragil.com.br"
            size="sm"
            class="ml-2 sm:mx-2 text-sm sm:text-base"
            style="display:contents"
          >
            <User /> <span class="pl-3 text-cafe-verde-amarelado">Login</span>
          </call-to-action>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CTA from '~/components/shared/Cta'
import User from '~/assets/images/user.svg'

export default {
  name: 'DefaultHeader',
  components: {
    'call-to-action': CTA,
    User
  }
}
</script>

<style lang="scss">
#logo-header {
  @media (max-width: 639px) {
    width: 200px;
  }
}

.bg-linha {
  background: url('../assets/images/linha.png') no-repeat top right -7.6% / auto;

  @media (max-width: 1279px) {
    background: url('../assets/images/linha.png') no-repeat top right -9.6% / auto;
  }

  @media (width: 1024px) {
    background: url('../assets/images/linha.png') no-repeat top right -15.155% /
      auto;
  }

  @media (max-width: 1023px) {
    background: url('../assets/images/linha.png') no-repeat top right -30.75% / auto;
  }

  @media (max-width: 767px) {
    background: none;
  }
}
</style>
