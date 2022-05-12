<template>
  <div v-if="isNFCSupport">
    <div>{{ nfcTag }}</div>
    <v-btn rounded>Pay</v-btn>
  </div>
  <div v-else>
    NFC tag type not supported
  </div>
</template>

<script>
export default {
  name: 'ShopPage',
  data() {
    return {
      nfcTag: '',
    }
  },
  computed: {
    isNFCSupport() {
      return typeof window !== 'undefined' && 'NDEFReader' in window
    }
  },

}
</script>
