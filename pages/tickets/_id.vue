<template>
  <div v-resize="onResize" class="ticket-page" :style="{ height: contentHeight + 'px' }">
    <div v-if="hasTicket" class="ticket-page__ticket">
      <div class="ticket-page__top">
        <div class="ticket-page__image"  :style="{ backgroundImage: 'url(' + ticketThumbnail  + ')' }"></div>
        <div class="ticket-page__title">
          <div>E29 Music & Arts Festival - Weekend 1</div>
          <div class="ticket-page__sub-title">Chiang Rai, Thailand</div>
        </div>
      </div>
      <div class="ticket-page__rip"></div>
      <div class="ticket-page__bottom">
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
      contentHeight: 100,
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
  methods: {
    onResize() {
      const windowHeight = window.innerHeight
      this.contentHeight = windowHeight
    },
  }
}
</script>

<style lang="scss" scoped>
.ticket-page {
  // background-image: url('~assets/images/ticket-bg.png');
  // background-size: cover;
  // background-position: top center;
  background-color: rgba(0, 0, 0, 0.01);
  // height: 100%;
  padding: 16px;
  position: relative;
  min-height: 480px;

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
    margin: auto;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
  }

  &__top {
    width: 100%;
    flex: 1;
    background-color: #ffffff;
    // border-bottom-left-radius: 10px;
    // border-bottom-right-radius: 10px;
    position: relative;
    overflow: hidden;
    padding-bottom: 2px;
  }

  &__image {
    background-size: cover;
    background-position: top center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.02);
    margin-bottom: 2px;
  }

  &__title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
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
    // border-top-left-radius: 10px;
    // border-top-right-radius: 10px;
  }

  &__rip {
    background-color: #ffffff;
    height: 20px;
    margin: 0 8px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAACCAYAAAB7Xa1eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAAAaSURBVBhXY5g7f97/2XPn/AcCBmSMQ+I/AwB2eyNBlrqzUQAAAABJRU5ErkJggg==);
    background-size: 4px 2px;
    background-repeat: repeat-x;
    background-position: center;
    position: relative;
    box-shadow: 0 1px 0 0 #fff, 0 -1px 0 0 #fff;
    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      border: 5px solid transparent;
      border-top-color: #fff;
      border-right-color: #fff;
      border-radius: 100%;
      pointer-events:none;
    }
    &:before {
      left: -8px;
    }
    &:after {
      transform: translate(-50%, -50%) rotate(225deg);
      right: -33px;
    }
  }
}
</style>
