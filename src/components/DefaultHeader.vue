<template>
  <header class="bg-cafe-meia-noite">
    <!-- <Countdown
      :starttime="new Date()"
      endtime="May 5, 2020 0:10:00"
      trans='{  
         "day":"Dias",
         "hours":"Horas",
         "minutes":"Minutos",
         "seconds":"Segundos",
         "expired":"Event has been expired.",
         "running":"Para encerrarmos as vendas",
         "upcoming":"Till start of event.",
         "status": {
            "expired":"Expired",
            "running":"Running",
            "upcoming":"Future"
           }}'
    /> -->
    <ClientOnly>
      <modal
        name="modal-video"
        classes="p-8"
        height="auto"
        @before-open="modalVideoData"
      >
        <div class="video-container">
          <iframe
            width="956"
            height="538"
            :src="currentVideo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </modal>
    </ClientOnly>
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
            :link="$static.generalData.hotmartUrl"
            size="sm"
            class="sm:mx-2 text-sm sm:text-base"
          >
            <span class="text-cafe-ardosia">Inscreva-se</span>
          </call-to-action>
          <!-- https://produtividadeantifragil.club.hotmart.com -->
          <call-to-action
            border
            link="https://produtividadeantifragil.club.hotmart.com"
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

<static-query>
query{
  generalData(id: "1"){
    hotmartUrl
  }
}
</static-query>

<script>
import CTA from '~/components/shared/Cta'
import Countdown from '~/components/shared/Countdown'
import User from '~/assets/images/user.svg'

export default {
  name: 'DefaultHeader',
  components: {
    'call-to-action': CTA,
    User,
    Countdown
  },
  data() {
    return {
      currentVideo: null
    }
  },
  methods: {
    modalVideoData(event) {
      this.currentVideo = event.params.videoLink
    }
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
