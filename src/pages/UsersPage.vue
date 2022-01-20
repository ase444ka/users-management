<template>
  <v-row v-resize="onResize">
    <UserCardDialog
      :dialog="userCardDialog"
      :user="editedUser"
      :isNewUser="isNewUser"
      @cancel="closeUserCardDialog"
      @save="saveUser"
    />
    <DumpDialog
      :dialog="deleteUsersDialog"
      :message="deleteUsersMessage"
      @confirm="deleteUsers"
      @cancel="cancelDeletingUsers"
    />
    <portal to="addUser">
      <v-btn
        class="mr-5"
        @click="addUser"
        :icon="isSmall"
        title="Добавить пользователя"
      >
        {{ buttonText }}
        <v-icon v-if="isSmall">mdi-account-plus</v-icon>
      </v-btn>
    </portal>
    <v-col>
      <v-card
        class="d-flex mt-10 pa-2 align-end align-sm-start"
        flat
        v-if="usersAdded"
      >
        <div class="d-flex flex-column flex-sm-row">
          <v-btn
            class="mr-4 mt-4"
            :disabled="deleteButtonDisabled"
            @click="proposeToDelete"
            >Удалить
          </v-btn>
          <v-btn
            class="mr-4 mt-4"
            :disabled="editButtonDisabled"
            @click="editUser"
            >Редактировать
          </v-btn>
          <v-text-field label="Поиск..." v-model="search" />
        </div>
        <v-spacer></v-spacer>
        <v-checkbox @change="toggleSelectAll"></v-checkbox>
      </v-card>

      <v-card v-if="users && users.length">
        <v-list-item-group v-model="selectedUsers" color="primary" multiple>
          <v-list-item
            v-for="user in formattedUsers"
            :key="user.id"
            class="mdi-border-bottom"
          >
            <template v-slot:default="{ active }">
              <v-list-item-avatar color="grey darken-1" class="pointer">
                <img alt="Users logo" :src="user.fileSrc" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="pointer">{{
                  user.fullName
                }}</v-list-item-title>

                <v-list-item-subtitle class="pointer">
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
      <p v-else>{{ noDataText }}</p>
    </v-col>
  </v-row>
</template>

<script>
import _debounce from 'lodash/debounce'
import { usersApi } from '@/api'
import UserCardDialog from '@/components/UserCardDialog'
import DumpDialog from '@/components/DumpDialog'
import { mapState } from 'vuex'

export default {
  name: 'UsersPage',

  components: { DumpDialog, UserCardDialog },

  async created() {
    await this.getUsers()
    this.debouncedFilterUsers = _debounce(this.filterUsers, 200)
  },

  updated() {
    this.isSmall = document.documentElement.offsetWidth < 900
  },

  data() {
    return {
      users: [],
      selectedUsers: [],
      userCardDialog: false,
      editedUser: {},
      deleteUsersDialog: false,
      search: '',
      isSmall: null,
    }
  },

  computed: {
    ...mapState(['loggedIn']),

    buttonText() {
      return this.isSmall ? '' : 'Добавить пользователя'
    },

    usersAdded() {
      return this.users?.length || this.search
    },

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
      return this.users?.map((user) => ({
        ...user,
        fullName: `${user.lastName} ${user.firstName} ${user.patronymicName}`,
      }))
    },

    allUsersSelected() {
      return this.selectedUsers?.length === this.users?.length
    },

    deleteUsersMessage() {
      return this.allUsersSelected
        ? 'Удалить всех пользователей?'
        : 'Удалить выбранных пользователей?'
    },

    noDataText() {
      return this.search
        ? 'Не найдено элементов, удоволетворяющих условиям поиска'
        : 'Пользователей пока нет...'
    },
  },

  methods: {
    onResize() {
      this.isSmall = window.innerWidth < 900
    },
    async getUsers() {
      try {
        this.users = await usersApi.getUsers()
      } catch (e) {
        this.$toastr('error', 'ошибка загрузки пользователей')
      } finally {
        this.selectedUsers = []
        this.editedUser = {}
        this.search = null
      }
    },

    proposeToDelete() {
      this.deleteUsersDialog = true
    },

    async deleteUsers() {
      this.deleteUsersDialog = false
      if (this.allUsersSelected) {
        await usersApi.deleteUsers()
      } else {
        let deletingIds = []
        this.users.forEach((user, index) => {
          if (this.selectedUsers?.includes(index)) {
            deletingIds.push(user.id)
          }
        })
        deletingIds.forEach(async (id) => {
          await usersApi.deleteUser(id)
        })
      }
      await this.getUsers()
    },

    cancelDeletingUsers() {
      this.deleteUsersDialog = false
    },

    editUser() {
      const index = this.selectedUsers[0]
      this.editedUser = this.users[index]
      this.userCardDialog = true
    },
    toggleSelectAll(event) {
      this.selectedUsers = event
        ? Array.from({ length: this.formattedUsers?.length }, (v, i) => i)
        : []
    },
    closeUserCardDialog() {
      this.userCardDialog = false
    },
    async saveUser(event) {
      try {
        this.users = event.id
          ? await usersApi.updateUser(event)
          : await usersApi.addUser(event)
        this.$toastr('success', 'пользователь успешно сохранен')
      } catch (e) {
        this.$toastr('error', 'ошибка сохранения пользователя')
        console.log(e)
      } finally {
        this.closeUserCardDialog()
        await this.getUsers()
      }
    },
    addUser() {
      this.editedUser = {}
      this.userCardDialog = true
    },

    async filterUsers(value) {
      await this.getUsers()
      if (value) {
        this.users = this.users.filter((user) => {
          const checkString = `${user.lastName} ${user.firstName} ${user.patronymicName} ${user.email} ${user.phone}`
          return checkString.includes(value)
        })
      }
    },
  },

  watch: {
    async search(value) {
      await this.debouncedFilterUsers(value)
    },
  },
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
