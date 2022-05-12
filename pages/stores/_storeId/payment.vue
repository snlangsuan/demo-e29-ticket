<template>
  <div v-resize="onResize" :class="['store-payment-page', { white: paymentResultDialog }]" :style="{ height: contentHeight + 'px' }">
    <div v-if="invalidUid" class="store-payment-page__invalid">
      <div class="text-center" style="width: 80%">
        <v-avatar color="grey lighten-4" size="94">
          <v-icon color="grey lighten-2" size="80">mdi-wallet-outline</v-icon>
        </v-avatar>
        <div class="text-subtitle-2 mt-3">No Wallet Address</div>
        <div class="text-body-2 font-weight-light">
          Sorry, there are not found for customer wallet.
        </div>
      </div>
    </div>
    <div v-else-if="loading" class="store-payment-page__loading">
      <div class="text-center" style="width: 80%">
        <v-progress-circular color="primary" size="32" width="3" indeterminate />
      </div>
    </div>
    <div v-else-if="paymentResultDialog" class="store-payment-page__result">
      <div class="store-payment-page__content">
        <div :style="{ minHeight: '200px' }">
          <v-img :src="require('~/assets/images/success.png')" min-height="200" contain />
          <!-- <v-avatar color="green" size="94">
            <v-icon size="80" dark>mdi-check</v-icon>
          </v-avatar> -->
          <div class="text-subtitle-2 mt-3" style="color: #20be79">Payment Successful</div>
          <div class="text-body-2 font-weight-light">
            You payment has been successfully processed.
          </div>
        </div>
        <v-divider class="my-4" />
        <div class="primary--text text-center" :style="{ fontSize: '0.8rem' }">
          Transaction Number: {{ transaction.no }}
        </div>
        <div :style="{ fontSize: '0.8rem', margin: '16px' }">
          <v-row style="width: 100%" no-gutters>
            <v-col cols="6" class="text-left pb-2 grey--text text--darken-2">AMOUNT PAID (THB)</v-col>
            <v-col cols="6" class="text-right pb-2">{{ transaction.amount }}</v-col>
            <v-col cols="6" class="text-left pb-2">PAYED BY</v-col>
            <v-col cols="6" class="text-right pb-2">{{ walletName }}</v-col>
            <v-col cols="6" class="text-left pb-2">TRANSACTION DATE</v-col>
            <v-col cols="6" class="text-right pb-2">{{ transaction.timestamp }}</v-col>
          </v-row>
        </div>
        <div class="text-center mt-6">
          <!-- <v-btn disabled color="#20be79" dark block @click="onClose">Close</v-btn> -->
        </div>
      </div>
    </div>
    <div v-else-if="transactionRef" class="store-payment-page__container">
      <div class="store-payment-page__wallet">
        <div class="store-payment-page__name">{{ walletName }}</div>
        <div class="store-payment-page__balance">
          {{ walletBalance | number_format }}
          <span class="store-payment-page__currency">THB</span>
        </div>
        <div v-if="transactionRef" class="store-payment-page__ref">Ref. {{ transactionRef }}</div>
      </div>
       <div class="store-payment-page__details">
         <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="">
          <div class="text-caption grey--text">Store Name</div>
          <v-text-field :value="storeName" color="grey" dense outlined disabled></v-text-field>
          <div class="text-caption grey--text">Amount</div>
          <v-text-field v-model="paymentAmount" type="number" :rules="[(v) => !v || Number(v) < walletBalance || 'Insufficient balance']" placeholder="00.00" suffix="THB" dense outlined></v-text-field>
          <div class="text-caption grey--text">Note</div>
          <v-text-field v-model="paymentNote" placeholder="Pay for e.g. mango sticky rice" dense outlined></v-text-field>
          <v-btn :disabled="!valid || !paymentAmount" color="orange white--text" block @click="onReceivePay">charge</v-btn>
         </v-form>
       </div>
    </div>
    <v-overlay :value="paying">
      <div>
        <v-progress-circular color="white" size="32" width="3" indeterminate />
      </div>
    </v-overlay>
    <!-- <v-dialog v-model="paymentResultDialog" persistent>
      <v-card>
        <v-card-text class="py-6" :style="{ minHeight: '480px', display: 'flex', alignItems: 'center' }">
          <div class="text-center" style="width: 100%">
            <v-avatar color="green" size="94">
              <v-icon size="80" dark>mdi-check</v-icon>
            </v-avatar>
            <div class="text-body-2 font-weight-light mt-3">
              You payment has been successfully processed.
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="py-6">
          <v-btn color="primary" rounded block>Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'StorePaymentPage',
  data() {
    return {
      loading: false,
      paying: false,
      valid: false,
      transactionSuccess: false,
      paymentResultDialog: false,
      contentHeight: 100,
      invalidUid: false,
      storeName: 'Argobarleno',
      walletAddress: '',
      walletName: '',
      walletBalance: 0,
      transactionRef: '',
      paymentAmount: null,
      paymentNote: '',
      transaction: {
        no: '',
        amount: null,
        note: '',
        number: '',
        timestamp: '',
      }
    }
  },
  watch: {
    walletAddress(val) {
      this.onGetWalletBalance(val)
    }
  },
  mounted() {
    this.invalidUid = !('uid' in this.$route.query)
    this.walletAddress = this.$route.query.uid
    const query = { ...this.$route.query }
    delete query.uid
    this.$router.push({ query })
  },
  methods: {
    onResize() {
      const windowHeight = window.innerHeight
      this.contentHeight = windowHeight
    },
    onGetWalletBalance(address) {
      if (!address) return
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.walletName = 'Decimo Di Vongola'
        this.walletBalance = 1000
        this.transactionRef = Date.now()
      }, 1000)
    },
    onReceivePay() {
      if (!this.$refs.form.validate()) return
      this.paying = true
      setTimeout(() => {
        this.walletBalance = this.walletBalance - this.paymentAmount
        this.transactionRef = Date.now()
        this.transaction.no = Date.now()
        this.transaction.amount = this.paymentAmount
        this.transaction.note = this.paymentNote
        this.transactionAmount = null
        this.transactionNote = null
        this.$refs.form.resetValidation()
        this.paying = false
        this.paymentResultDialog = true
        this.transaction.timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss')
      }, 3000)
    },
    onClose() {
      const myWindow = window.open('', '_self')
      myWindow.document.write('')
      setTimeout (() => myWindow.close(),1000)
    },
  }
}
</script>

<style lang="scss" scoped>
.store-payment-page {
  background-color: rgba(0, 0, 0, 0.02);
  padding: 16px;
  position: relative;
  min-height: 480px;
  $root: &;

  &__loading,
  &__result,
  &__invalid {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__result {
    align-items: flex-start;
  }

  &__result {
    #{$root}__content {
      width: 100%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto 8px;
      padding: 42px 18px 24px;

      & > * {
        display: block;
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }

  &__container {
    position: relative;
    width: 100%;
    max-width: 480px;
    margin: auto;

    & > * + * {
      margin-top: 16px;
    }
  }

  &__wallet {
    border: thin solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 16px;
    background-color: #ffffff;
    #{$root}__name {
      font-size: 0.8rem;
    }
    #{$root}__balance {
      font-size: 1.6rem;
      margin-top: 0;
      margin-bottom: 8px;
    }
    #{$root}__ref {
      font-size: 0.6rem;
      color: rgba(0, 0, 0, 0.24);
    }
    #{$root}__currency {
      font-size: 0.8rem;
      margin-left: 4px;
    }
  }

  &__details {
    border: thin solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 16px;
    background-color: #ffffff;

    #{$root}__currency {
      border-left: 1px solid rgba(0, 0, 0, 0.24);
      position: absolute;
      right: 8px;
      top: 0;
      bottom: 0;
      padding-left: 8px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
