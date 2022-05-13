<template>
  <div class="fill-height grey lighten-5">
    <div v-if="loading" class="fill-height d-flex align-center justify-center">
      <div class="text-center">
        <v-progress-circular color="primary" width="3" indeterminate />
        <div class="text-caption grey--text mt-1">Device Initializing...</div>
      </div>
    </div>
    <div v-else-if="!isNFCSupported" class="fill-height d-flex align-center justify-center">
      <div class="text-center">
        <v-avatar size="86" color="grey lighten-4">
          <v-icon size="38" color="grey lighten-2">mdi-cellphone-nfc-off</v-icon>
        </v-avatar>
        <div class="text-caption grey--text mt-1">NFC tag type not supported</div>
      </div>
    </div>
    <div v-else class="d-flex align-center">
      <div class="text-center pa-3 mx-auto" :style="{ width: '100%', maxWidth: '480px' }">
        <div class="mx-auto white elevation-2" :style="{ width: '100%', minHeight: '160px', border: '1px solid #aaa', borderRadius: '4px' }">
          {{ content }}
        </div>
        <v-btn color="primary mt-3" block @click="onReading">Read NFC</v-btn>
      </div>
    </div>
    <v-overlay :value="scanning">
      <v-progress-circular color="white" width="3" indeterminate />
    </v-overlay>
    <v-snackbar v-model="readError" color="error">
      Cannot read data from the NFC tag. Try another one?
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'StoreNFCPage',
  data() {
    return {
      loading: true,
      scanning: false,
      isNFCSupported: true,
      readError: false,
      content: ''
    }
  },
  mounted() {
    this.isNFCSupported = ('NDEFReader' in window)
    this.loading = false
  },
  methods: {
    async onReading() {
      try {
        const ndef = new window.NDEFReader()
        ndef.onreadingerror = () => {
          this.readError = true
        }
        ndef.onreading = (event) => {
          const message = event.message
          const record = (message.records || [])[0] || {}
          this.content = JSON.stringify(record)
        }
        await ndef.scan()
      } catch (error) {
        this.readError = true
      }
    }
  }
}
</script>
