<template>
  <div class="ticket-page">
    <div v-if="hasTicket" class="ticket-page__ticket">
      <div class="ticket-page__top elevation-2">
        <div class="ticket-page__image"  :style="{ backgroundImage: 'url(' + ticketThumbnail  + ')' }"></div>
        <div class="ticket-page__title">
          <div>E29 Music & Arts Festival - Weekend 1</div>
          <div class="ticket-page__sub-title">Chiang Rai, Thailand</div>
        </div>
      </div>
      <div class="ticket-page__bottom elevation-2">
        <div class="ticket-page--border-dash"></div>
        <v-row>
          <v-col cols="4" class="text-center">
            <div class="text-caption">Date</div>
            <div class="text-caption">3-4 March 2023</div>
          </v-col>
          <v-col cols="4" class="text-center">
            <div class="text-caption">Type</div>
            <div class="text-caption">GA Tier 3</div>
          </v-col>
          <v-col cols="4" class="text-center">
            <div class="text-caption">Cost</div>
            <div class="text-caption">THB 1,200</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img :src="ticketQRCode" class="mx-auto" width="120" height="120" contain />
            <div class="text-caption text-center font-weight-light grey--text text--lighten-1 pt-3">
              &copy; entertainment29 co., ltd.
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div v-else class="ticket-page__mismatch">
      <div class="text-center" style="width: 80%">
        <v-avatar color="grey lighten-4" size="94">
          <v-icon color="grey lighten-2" size="80">mdi-ticket-confirmation</v-icon>
        </v-avatar>
        <div class="text-subtitle-2 mt-3">No Ticket</div>
        <div class="text-body-2 font-weight-light">
          Sorry, there are not found for your ticket.<br />
          Please try again or contact staff.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketDetailsPage',
  data() {
    return {
    }
  },
  computed: {
    ticketThumbnail() {
      return this.$config.prefixURL + '/images/8ed4a9ff-f9f7-42c4-b00c-7292bd55f564.png'
    },
    ticketQRCode() {
      return this.$config.prefixURL + '/images/7c659fee-14c6-4b82-b4fd-d5f815753cb0.png'
    },
    hasTicket() {
      return this.$route.params.id === '001'
    },
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.ticket-page {
  // background-image: url('~assets/images/ticket-bg.png');
  // background-size: cover;
  // background-position: top center;
  background-color: rgba(0, 0, 0, 0.06);
  height: 100%;
  padding: 16px;

  &__mismatch {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__ticket {
    width: 100%;
    max-width: 480px;
    height: 100%;
    min-height: 800px;
    margin: auto;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  &__top {
    width: 100%;
    flex: 1;
    background-color: rgba(0, 0, 0, 0.02);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
    overflow: hidden;
  }

  &__image {
    background-size: cover;
    background-position: top center;
    height: 100%;
  }

  &__title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 16px 24px;
    background-color: #ff9800;
    color: #ffffff;
  }

  &__sub-title {
    font-size: 0.8rem;
    font-weight: 300;
  }

  &__bottom {
    flex: 0 auto;
    position: relative;
    padding: 16px;
    background-color: #ffffff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &--border-dash {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 0;
    height:1px;
    background-image:linear-gradient(to right, #dddddd 0%, #dddddd 30%, transparent 70%);
    background-size:28px 1px;
    background-repeat:repeat-x;
  }
}
</style>
