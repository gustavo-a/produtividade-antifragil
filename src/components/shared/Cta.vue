<template>
  <div class="inline-flex">
    <a
      class="border-cafe-verde-amarelado text-white rounded font-sans-secondary flex"
      v-if="link"
      :class="{
        'bg-cafe-verde-amarelado': filled === 'bege',
        'bg-cafe-vermelho': filled === 'vermelho',
        'bg-guten-cinza-1': filled === 'cinza-1',
        'py-3 px-4': size === 'sm',
        'p-4': size === 'md',
        'py-4 px-8': size === 'lg',
        border: border
      }"
      :href="linkUTM"
    >
      <slot />
    </a>

    <div
      class="border-cafe-verde-amarelado text-white rounded font-sans-secondary italic cursor-pointer"
      v-else
      :class="{
        'bg-cafe-verde-amarelado': filled === 'bege',
        'bg-guten-cinza-1': filled === 'cinza-1',
        'p-4': size === 'md',
        'py-4 px-8': size === 'lg',
        border: border
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTA',
  props: {
    link: String,
    filled: String,
    size: String,
    border: Boolean
  },
  data() {
    return {
      linkUTM: ''
    }
  },
  mounted() {
    this.linkUTM = this.link + window.location.search
  }
}
</script>

<style lang="scss" scoped>
a,
button {
  @apply .leading-none;
  * {
    @apply .inline;
  }
}
</style>
