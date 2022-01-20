<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-container class="py-0 fill-height">
        <v-avatar color="primary" size="36">
          <img alt="Users logo" src="./assets/logo.png" />
        </v-avatar>
        <v-toolbar-title class="ml-15"
          >Система управления пользователями</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-btn class="mr-15">Добавить пользователя</v-btn>
        <v-btn>Выйти</v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style></style>
