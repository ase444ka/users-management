<template>
  <v-row>
    <UserCardDialog
      :dialog="userCardDialog"
      :user="editedUser"
      :isNewUser="isNewUser"
      @cancel="closeUserCardDialog"
      @save="saveUser"
    />
    <portal to="addUser">
      <v-btn class="mr-15" @click="addUser">Добавить пользователя</v-btn>
    </portal>
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
        <v-list-item-group v-model="selectedUsers" color="primary" multiple>
          <v-list-item
            v-for="user in formattedUsers"
            :key="user.id"
            class="mdi-border-bottom"
          >
            <template v-slot:default="{ active }">
              <v-list-item-avatar
                color="grey darken-1"
                class="pointer"
                @click="editUser"
              >
                <img alt="Users logo" :src="require('@/assets/user.jpg')" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="pointer" @click="editUser">{{
                  user.fullName
                }}</v-list-item-title>

                <v-list-item-subtitle class="pointer" @click="editUser">
                  {{ user.email }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox :input-value="active"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { usersApi } from '@/api'
import UserCardDialog from '@/components/UserCardDialog'
export default {
  name: 'UsersPage',

  components: { UserCardDialog },

  async created() {
    await this.getUsers()
  },

  data() {
    return {
      users: [],
      selectedUsers: [],
      userCardDialog: false,
      editedUser: {},
    }
  },

  computed: {
    deleteButtonDisabled() {
      return !this.selectedUsers.length
    },

    editButtonDisabled() {
      return this.selectedUsers.length !== 1
    },

    isNewUser() {
      return !Object.keys(this.editedUser).length
    },

    formattedUsers() {
      return this.users.map((user) => ({
        ...user,
        fullName: `${user.lastName} ${user.firstName} ${user.patronymicName}`,
      }))
    },
  },

  methods: {
    async getUsers() {
      try {
        this.users = await usersApi.getUsers()
      } catch (e) {
        this.$toastr('error', 'ошибка загрузки пользователей')
      } finally {
        console.log('finally')
      }
    },

    editUser() {
      console.log('edit')
    },
    toggleSelectAll(event) {
      this.selectedUsers = event
        ? Array.from({ length: this.formattedUsers.length }, (v, i) => i)
        : []
    },
    closeUserCardDialog() {
      this.userCardDialog = false
    },
    async saveUser(event) {
      try {
        this.users = await usersApi.addUser(event)
        this.$toastr('success', 'пользователь успешно добавлен')
      } catch (e) {
        this.$toastr('error', 'ошибка добавления пользователя')
        console.log(e)
      } finally {
        console.log('finally')
      }
    },
    addUser() {
      this.editedUser = {}
      this.userCardDialog = true
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
