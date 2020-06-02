<template>
  <div class="layout">
    <DefaultHeader v-if="!removeHeader" />
    <slot />
    <ReducedFooter v-if="reducedFooter" />
    <DefaultFooter v-else />
    <modal
      name="modal-video"
      classes="p-8 bg-white rounded"
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
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import DefaultHeader from '~/components/DefaultHeader'
import ReducedFooter from '~/components/ReducedFooter'
import DefaultFooter from '~/components/DefaultFooter'

export default {
  props: {
    removeHeader: Boolean,
    reducedFooter: Boolean
  },
  components: {
    DefaultHeader,
    DefaultFooter,
    ReducedFooter
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

<style src="~/main.css" />
