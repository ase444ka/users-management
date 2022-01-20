<template>
  <v-dialog :value="dialog" max-width="900" @click:outside="cancel">
    <v-card>
      <v-card-title class="headline accent--text pb-4"
        >Добавление пользователя</v-card-title
      >

      <v-card-text outlined tile class="border-top pt-8">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.lastName"
              label="Фамилия"
              :rules="[rules.required, rules.counter]"
              counter
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.firstName"
              label="Имя"
              :rules="[rules.required, rules.counter]"
              counter
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="formData.patronymicName"
              label="Отчество"
              :rules="[rules.required, rules.counter]"
              counter
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.phone"
              label="Телефон"
              v-mask="'+7 (###) ### ## ##'"
              :rules="[rules.required, rules.phone]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.email"
              label="Email"
              :rules="[rules.required, rules.counter, rules.email]"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-file-input
              v-model="formData.photo"
              label="Фотография"
              :rules="[rules.required]"
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="px-6">
        <v-spacer></v-spacer>
        <v-btn text color="lightGrey" @click="cancel">Отмена</v-btn>
        <v-btn
          :loading="loading"
          color="success"
          text
          @click="cancel"
          :disabled="!allFieldsValid"
        >
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
      //Данные формы
      formData: {
        lastName: null,
        firstName: null,
        patronymicName: null,
        phone: null,
        email: null,
        photo: null,
      },
      otherValidations: [],
      //валидации
      rules: {
        required: (value) => !!value || 'Обязательное поле',
        counter: (value) => value?.length <= 20 || 'Не больше 20 символов',
        phone: (value) => value?.length === 18 || 'Некорректный номер телефона',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Некорректный e-mail'
        },
      },
    }
  },

  computed: {
    validations() {
      return {
        firstName: this.rules.counter(this.formData.firstName),
        lastName: this.rules.counter(this.formData.lastName),
        patronymicName: this.rules.counter(this.formData.patronymicName),
        emailLength: this.rules.counter(this.formData.email),
        email: this.rules.email(this.formData.email),
        phone: this.rules.phone(this.formData.phone),
      }
    },

    allFieldsValid() {
      const allExists = Object.values(this.formData).every((value) => value)
      const allValid = Object.values(this.validations).every((validation) => {
        return typeof validation === 'boolean'
      })
      return allExists && allValid
    },
  },

  methods: {
    cancel() {
      this.$emit('cancel')
    },
  },

  watch: {
    formData: {
      deep: true,
      handler(value) {
        this.otherValidations = []
        this.otherValidations.push(this.rules.counter(value.firstName))
        this.otherValidations.push(this.rules.counter(value.lastName))
        this.otherValidations.push(this.rules.counter(value.patronymicName))
        this.otherValidations.push(this.rules.counter(value.email))
        this.otherValidations.push(this.rules.email(value.email))
      },
    },
  },
}
</script>

<style scoped>
.border-top {
  border: 0 !important;
  border-top: 1px solid rgba(0, 0, 0, 0.12) !important;
}
</style>
