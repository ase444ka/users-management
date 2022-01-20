<template>
  <v-dialog :value="dialog" max-width="900" @click:outside="cancel">
    <v-card>
      <v-card-title class="headline accent--text pb-4"
        >Добавление пользователя</v-card-title
      >

      <v-card-text outlined tile class="border-top pt-8">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field label="Фамилия" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Имя" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Отчество" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field label="Телефон" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Email" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-file-input label="Фотография" />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="px-6">
        <v-spacer></v-spacer>
        <v-btn text color="lightGrey" @click="cancel">Отмена</v-btn>
        <v-btn :loading="loading" color="success" text @click="cancel">
          Сохранить
        </v-btn>
      </v-card-actions>

      <!--<-->
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'UserCard',

  props: {
    dialog: Boolean,
  },

  data() {
    return {
      loading: false,
    }
  },

  methods: {
    cancel() {
      this.$emit('cancel')
    },
  },
}
</script>

<style scoped>
.border-top {
  border: 0 !important;
  border-top: 1px solid rgba(0, 0, 0, 0.12) !important;
}

.theme--light.v-btn.v-btn--disabled {
  color: #dadada !important;
}
</style>
