<template>
  <v-app-bar app>
    <v-container class="py-0 fill-height">
      <v-avatar color="primary" size="36">
        <img alt="Users logo" :src="require('@/assets/logo.png')" />
      </v-avatar>
      <v-toolbar-title class="ml-15"
        >Система управления пользователями</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <portal-target name="addUser"> </portal-target>

      <v-btn v-if="loggedIn" @click="logout">Выйти</v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppBar',
  computed: {
    ...mapState(['loggedIn']),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>

<style scoped></style>
