<template>
  <form class="form" @submit.prevent="loginHandler">
    <h1>Welcome to login page</h1>
    <input placeholder="login" type="text" v-model="login" />
    <input placeholder="password" type="password" v-model="password" />

    <button>Login</button>
    <transition name="error">
      <div class="error" v-if="error">
        <span>Permission denied</span>
      </div>
    </transition>
  </form>
</template>

<script>
export default {
  layout: 'login',
  data: () => ({
    login: '',
    password: '',
    error: false
  }),
  methods: {
    loginHandler() {
      const login = 'admin'
      const password = 'admin'
      if (this.login === login && this.password === password) {
        this.$store.commit('login/changeStatus')
        this.$store.commit('login/setUserName', this.login)
        this.$router.push('/')
      } else {
        this.error = true

        setTimeout(_ => {
          this.error = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2b2c35;
  box-sizing: border-box;

  h1 {
    color: darken(#fff, 10%);
    padding: 10px;
    margin-bottom: 20px;
  }

  input {
    width: 350px;
    margin: 5px 0;
    border: 1px solid transparent;
    padding: 10px;
    border-radius: 6px;
    background-color: lighten(#2b2c35, 10%);
    color: darken(#fff, 10%);
    outline: none;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5),
      -2px -2px 4px rgba(255, 255, 255, 0.05);
    &::placeholder {
      color: darken(#fff, 40%);
    }
    &:focus {
      border: 1px solid lighten(#2b2c35, 30%);
    }
  }

  button {
    outline: none;
    margin-top: 20px;
    background-color: lighten(#2b2c35, 10%);
    color: darken(#fff, 10%);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5),
      -2px -2px 4px rgba(255, 255, 255, 0.05);
    width: 350px;
    padding: 10px;
    border: none;
    border-radius: 6px;

    &:active {
      box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.5),
        inset -2px -2px 4px rgba(255, 255, 255, 0.05);
    }
  }
}

.error {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 60px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    background-color: lighten(#da0000, 1%);
    color: darken(#fff, 10%);
    border-radius: 10px;
  }
}

.error-enter-active,
.error-leave-active {
  transition: opacity 0.3s linear;
}
.error-enter,
.error-leave-active {
  opacity: 0;
}
</style>
