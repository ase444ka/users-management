<template>
  <v-dialog :value="dialog" max-width="500" @click:outside="cancel">
    <v-card>
      <v-card-title class="headline accent--text pb-4 dialog-message">
        {{ message }}
      </v-card-title>

      <v-card-actions class="px-6"
        ><v-spacer></v-spacer>
        <v-btn text color="lightGrey" @click="cancel">Отмена</v-btn>
        <v-btn
          :disabled="false"
          :loading="loading"
          color="red"
          text
          @click="confirm"
        >
          ОК
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DumpDialog',

  props: {
    message: {
      type: String,
      required: true,
    },
    dialog: {
      type: Boolean,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    cancel() {
      this.$emit('cancel')
    },
    confirm() {
      this.$emit('confirm')
    },
  },
}
</script>

<style>
.headline.dialog-message {
  word-break: normal;
  font-size: 20px !important;
}
</style>
