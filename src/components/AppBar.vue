<template>
  <v-app-bar app>
    <v-container class="py-0 fill-height" v-resize="onResize">
      <v-avatar
        color="primary"
        size="36"
        title="Система управления пользователями"
      >
        <img alt="Пользователи" :src="require('@/assets/logo.png')" />
      </v-avatar>
      <v-toolbar-title class="ml-2 d-none d-sm-block"
        >Система управления пользователями</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <portal-target name="addUser"> </portal-target>

      <v-btn v-if="loggedIn" :icon="isSmall" @click="logout" title="Выйти">
        {{ buttonText }}
        <v-icon v-if="isSmall">mdi-account-arrow-left</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppBar',
  updated() {
    this.isSmall = document.documentElement.offsetWidth < 900
  },

  data() {
    return {
      isSmall: null,
    }
  },
  computed: {
    ...mapState(['loggedIn']),

    buttonText() {
      return this.isSmall ? '' : 'Выйти'
    },
  },
  methods: {
    onResize() {
      this.isSmall = window.innerWidth < 900
    },

    logout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>

<style scoped></style>
