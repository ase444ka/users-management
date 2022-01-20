<template>
  <v-app id="inspire">
    <AppBar />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import AppBar from '@/components/AppBar'
export default {
  name: 'App',
  components: { AppBar },
  computed: {
    ...mapState(['loggedIn']),
  },
  watch: {
    loggedIn: {
      immediate: true,
      handler(value) {
        if (!value) {
          this.$router.push('/login')
        } else {
          this.$router.push('/')
        }
      },
    },
  },
}
</script>

<style></style>
