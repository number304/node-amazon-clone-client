<template>
  <div class="container-fluid c-section">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <div class="a-spacing-top-medium"></div>
        <h2>Profile Page</h2>
        <a href="#" @click="onLogout">Logout</a>
        <form action="">
          <!-- Name -->
          <div class="a-spacing-top-medium">
            <label for="">Name</label>
            <input
              type="text"
              class="a-input-text"
              style="width: 100%"
              :placeholder="$auth.$state.user.name"
              v-model="name"
            />
          </div>

          <!-- Email -->
          <div class="a-spacing-top-medium">
            <label for="">Email</label>
            <input
              type="text"
              class="a-input-text"
              style="width: 100%"
              :placeholder="$auth.$state.user.email"
              v-model="email"
            />
          </div>

          <!-- Password -->
          <div class="a-spacing-top-medium">
            <label for="">Password</label>
            <input
              type="text"
              class="a-input-text"
              style="width: 100%"
              v-model="password"
            />
          </div>

          <hr />

          <div
            style="display: flex; justify-content: space-between"
            class="a-spacing-top-large"
          >
            <!-- Cancel button -->
            <nuxt-link to="/" class="a-button-history margin-right-10"
              >Cancel</nuxt-link
            >
            <!-- Update button -->
            <span class="a-button-register">
              <span class="a-button-inner">
                <span class="a-button-text" @click="onUpdateProfile"
                  >Update Profile</span
                >
              </span>
            </span>
          </div>
        </form>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    email: "",
    password: "",
  }),
  methods: {
    async onUpdateProfile() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
        };

        let response = await this.$axios.put("api/auth/user", data);
        console.log(response)

        if (response.data.success) {
          this.name = "";
          this.email = "";
          this.password = "";

          await this.$auth.fetchUser();
        }
      } catch (error) {
        console.error(error);
      }
    },
    async onLogout() {
      await this.$auth.logout()
    }
  },
};
</script>

<style></style>
