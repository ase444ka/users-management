<template>
  <v-row class="my-4 mx-auto" style="max-width: 500px">
    <v-col cols="12">
      <h1 class="text-center accent--text mb-0">Вход</h1>
    </v-col>

    <v-col cols="12">
      <v-card outlined elevation="2" class="pa-8 pr-6">
        <v-alert dense outlined type="error" class="mr-2" v-if="errorFlag">
          Неправильная пара логин-пароль
        </v-alert>

        <v-row class="mx-0">
          <v-col cols="12" class="pa-0 ma-0 pr-2">
            <v-text-field
              v-model="username"
              class="pa-0 pt-2 ma-0 login"
              label="Логин"
              placeholder=" "
            />
          </v-col>

          <v-col cols="12" class="pa-0 ma-0 pr-2">
            <v-text-field
              v-model="password"
              class="pt-3 ma-0 login"
              label="Пароль"
              placeholder=" "
              :type="passwordType"
              :append-icon="passwordIcon"
              @click:append="changeVisible"
            />
          </v-col>
        </v-row>

        <v-row class="mx-0">
          <v-col :cols="4" class="pa-0 mt-4">
            <v-btn
              depressed
              color="primary"
              class="mr-2"
              :loading="loading"
              @click="login"
            >
              <v-icon left>mdi-login-variant</v-icon>
              Войти
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LoginPage',
  metaInfo: {
    title: 'Вход',
  },

  data: () => ({
    username: null,
    password: null,
    loading: false,
    errorFlag: false,
    passwordVisible: false,
  }),

  computed: {
    passwordIcon() {
      return this.passwordVisible ? 'mdi-eye-off' : 'mdi-eye'
    },
    passwordType() {
      return this.passwordVisible ? 'text' : 'password'
    },
  },

  methods: {
    changeVisible() {
      this.passwordVisible = !this.passwordVisible
    },

    async login() {
      this.errorFlag = false
      this.loading = true

      const body = {
        username: this.username,
        password: this.password,
      }

      try {
        const result = await this.$store.dispatch('login', body)
        if (result) {
          await this.$router.push('/')
        } else {
          this.errorFlag = true
        }
      } catch (e) {
        this.$toastr('error', 'Возникла ошибка')
        console.log(e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped></style>
