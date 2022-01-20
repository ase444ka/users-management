<template>
  <v-row>
    <v-col>
      <v-card class="d-flex mt-10 pa-2 light-blue lighten-5" flat>
        <v-btn class="mr-4 mt-4" :disabled="deleteButtonDisabled"
          >Удалить</v-btn
        >
        <v-btn class="mr-4 mt-4" :disabled="editButtonDisabled"
          >Редактировать</v-btn
        >
        <v-text-field label="Поиск..." />
        <v-spacer></v-spacer>
        <v-checkbox @change="toggleSelectAll"></v-checkbox>
      </v-card>
      <v-card>
        <v-list-item-group v-model="selectedItem" color="primary" multiple>
          <template v-for="n in 6">
            <v-list-item :key="n">
              <template v-slot:default="{ active }">
                <v-list-item-avatar
                  color="grey darken-1"
                  class="pointer"
                  @click="editUser"
                >
                  <img alt="Users logo" :src="require('@/assets/user.jpg')" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="pointer" @click="editUser"
                    >Истомина Ася Николаевна</v-list-item-title
                  >

                  <v-list-item-subtitle class="pointer" @click="editUser">
                    istomina.asia@yandex.ru
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-checkbox :input-value="active"></v-checkbox>
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
          </template>
        </v-list-item-group>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
/*import { usersApi } from '@/api'*/
export default {
  name: 'UsersPage',

  data() {
    return {
      selectedItem: [],
    }
  },

  computed: {
    deleteButtonDisabled() {
      return !this.selectedItem.length
    },

    editButtonDisabled() {
      return this.selectedItem.length !== 1
    },
  },

  methods: {
    editUser() {
      console.log('edit')
    },
    toggleSelectAll(event) {
      this.selectedItem = event ? [0, 1, 2, 3, 4, 5] : []
    },
  },

  watch: {
    selectedItem(value) {
      console.log(value)
    },
  },
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
