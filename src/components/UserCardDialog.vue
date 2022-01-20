<template>
  <v-dialog :value="dialog" max-width="900" @click:outside="cancel">
    <v-card>
      <v-card-title class="headline accent--text pb-4">
        <span>{{ userCardTitle }}</span>
        <v-spacer></v-spacer>
        <v-avatar color="primary" size="70" v-if="showAvatar">
          <img
            alt="avatar"
            :src="formData.fileSrc"
            class="pointer"
            @click="showImage"
          />
        </v-avatar>
        <v-tooltip v-if="image" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              fab
              dark
              large
              v-bind="attrs"
              v-on="on"
              @click="goToEdit"
            >
              <v-icon dark> mdi-message-arrow-left-outline </v-icon>
            </v-btn>
          </template>
          <span>Назад к редактированию</span>
        </v-tooltip>
      </v-card-title>

      <v-card-text outlined tile class="border-top pt-8" ref="cardContent">
        <template v-if="image">
          <img
            v-if="formData.fileSrc"
            alt="avatar"
            :src="formData.fileSrc"
            class="avatar"
            ref="userImage"
          />
        </template>
        <template v-else>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                clearable
                v-model="formData.lastName"
                label="Фамилия"
                :rules="[rules.required, rules.counter]"
                counter
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                clearable
                v-model="formData.firstName"
                label="Имя"
                :rules="[rules.required, rules.counter]"
                counter
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                clearable
                v-model="formData.patronymicName"
                label="Отчество"
                :rules="[rules.required, rules.counter]"
                counter
              />
            </v-col>
            <v-col cols="12" sm="6" class="py-0 data-col">
              <h5 class="date-label" :class="dateLabelErrorOrNot">
                Дата рождения
              </h5>
              <DatePicker
                class="date-picker"
                v-model="formData.date"
                valueType="format"
                format="DD-MM-YYYY"
                :class="dateErrorOrNot"
                @input="dateIsDirty = true"
              />
              <div class="date-error" v-if="dateErrorMessage">
                {{ dateErrorMessage }}
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                clearable
                v-model="formData.phone"
                label="Телефон"
                v-mask="'+7 (###) ### ## ##'"
                :rules="[rules.required, rules.phone]"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                clearable
                v-model="formData.email"
                label="Email"
                :rules="[rules.required, rules.counter, rules.email]"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-file-input
                v-model="photo"
                label="Фотография"
                :disabled="!!formData.fileName"
                accept="image/*"
                :rules="[rules.required]"
                @change="setFile"
              />
            </v-col>
            <v-col cols="12" class="py-0">
              <v-chip
                v-if="formData.fileName"
                class="ma-2"
                close
                color="success"
                text-color="white"
                @click:close="deleteFile"
              >
                {{ formData.fileName }}
              </v-chip>
            </v-col>
          </v-row>
        </template>
      </v-card-text>

      <v-card-actions class="px-6">
        <v-spacer></v-spacer>
        <v-btn text color="lightGrey" @click="cancel">Отмена</v-btn>
        <v-btn
          :loading="loading"
          color="success"
          text
          @click="save"
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
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import 'vue2-datepicker/locale/ru'

const KB = 1024
const MB = KB * 1024
export default {
  name: 'UserCard',

  components: { DatePicker },

  props: {
    dialog: Boolean,
    user: Object,
    isNewUser: Boolean,
  },

  formData: {
    id: null,
    lastName: null,
    firstName: null,
    patronymicName: null,
    phone: null,
    email: null,
    fileSrc: null,
    fileName: null,
    date: null,
  },

  data() {
    return {
      loading: false,
      //Данные формы
      formData: { ...this.$options.formData },
      photo: null,
      otherValidations: [],
      image: false,
      //валидации
      dateIsDirty: false,
      rules: {
        required: (value) => !!value || 'Обязательное поле',
        counter: (value) => value?.length <= 20 || 'Не больше 20 символов',
        phone: (value) => value?.length === 18 || 'Некорректный номер телефона',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Некорректный e-mail'
        },
        date: (value) => {
          const pattern =
            /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
          return value ? pattern.test(value) : true
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

    dateErrorOrNot() {
      return this.dateErrors.length ? 'date-picker-error' : ''
    },

    dateLabelErrorOrNot() {
      return this.dateErrors.length ? 'date-label-error' : ''
    },

    dateErrorMessage() {
      const length = this.dateErrors.length
      return length && this.dateErrors[length - 1]
    },

    dateErrors() {
      const errors = []
      if (!this.dateIsDirty) return errors
      !this.formData.date && errors.push('Обязательное поле')
      !this.rules.date(this.formData.date) && errors.push('Некорректная дата')
      return errors
    },

    allFieldsValid() {
      const allExists = Object.values(this.formData).every((value) => value)
      const allValid = Object.values(this.validations).every((validation) => {
        return typeof validation === 'boolean'
      })
      return allExists && allValid
    },

    userCardTitle() {
      return this.isNewUser
        ? 'Добавление пользователя'
        : 'Редактирование пользователя'
    },

    showAvatar() {
      return this.formData.fileSrc && !this.image
    },
  },

  methods: {
    goToEdit() {
      this.image = false
    },
    setFile(event) {
      console.log(event)
      if (event.size > MB) {
        this.$toastr('error', 'размер фото превышает 1 МБ')
        this.photo = null
        return
      }
      this.formData.fileName = event.name
      let reader = new FileReader()
      reader.addEventListener(
        'load',
        () => {
          // convert image file to base64 string
          this.formData.fileSrc = reader.result
        },
        false
      )

      reader.readAsDataURL(event)
    },
    deleteFile() {
      this.formData.fileSrc = null
      this.formData.fileName = null
      this.photo = null
    },
    showImage() {
      if (this.image) return
      let containerWidth = this.$refs.cardContent.clientWidth
      let containerHeight = this.$refs.cardContent.clientHeight
      this.image = true
      this.$nextTick(() => {
        let imageWith = this.$refs.userImage.clientWidth
        let imageHeight = this.$refs.userImage.clientHeight
        const proportion = imageWith / imageHeight
        imageWith = containerWidth - 50
        this.$refs.userImage.style.width = imageWith + 'px'
        imageHeight = this.$refs.userImage.offsetHeight
        if (imageHeight > containerHeight - 50) {
          imageHeight = containerHeight - 50
          imageWith = imageHeight * proportion
          this.$refs.userImage.style.width = imageWith + 'px'
          this.$refs.userImage.style.height = imageHeight + 'px'
        }
      })
    },
    cancel() {
      this.image = false
      this.formData = { ...this.$options.formData }
      this.$emit('cancel')
    },
    save() {
      this.$emit('save', this.formData)
    },

    buildFormDataFromUser() {
      this.dateIsDirty = false
      Object.keys(this.formData).forEach((key) => {
        if (this.user[key]) this.dateIsDirty = true
        return (this.formData[key] = this.user[key] || null)
      })
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

    dialog(value) {
      if (value) {
        this.buildFormDataFromUser()
        this.photo = null
      }
    },
  },
}
</script>

<style scoped>
.border-top {
  border: 0 !important;
  border-top: 1px solid rgba(0, 0, 0, 0.12) !important;
}
.pointer {
  cursor: pointer;
}
.avatar {
  cursor: pointer;
}

.data-col >>> .date-picker {
  width: 100%;
}

.date-label {
  color: rgba(0, 0, 0, 0.6);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
}

.data-col {
  padding-top: 5px;
}

.data-col >>> .date-picker-error input {
  border-color: red !important;
}

.date-error {
  font-size: 12px;
  color: red;
}
</style>
