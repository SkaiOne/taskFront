<template>
  <header>
    <div class="header-wrapper">
      <div class="cart">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <g id="shopping_basket_24px">
            <path
              id="icon/action/shopping_basket_24px"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.5125 11.8625H27.5C28.1875 11.8625 28.75 12.425 28.75 13.1125L28.7125 13.45L25.5375 25.0375C25.2375 26.0875 24.275 26.8625 23.125 26.8625H6.875C5.725 26.8625 4.7625 26.0875 4.475 25.0375L1.3 13.45C1.2625 13.3375 1.25 13.225 1.25 13.1125C1.25 12.425 1.8125 11.8625 2.5 11.8625H8.4875L13.9625 3.67501C14.2 3.31251 14.6 3.13751 15 3.13751C15.4 3.13751 15.8 3.31251 16.0375 3.66251L21.5125 11.8625ZM18.5 11.8625L15 6.61251L11.5 11.8625H18.5ZM23.125 24.3625L6.8875 24.375L4.1375 14.3625H25.875L23.125 24.3625ZM12.5 19.3625C12.5 17.9875 13.625 16.8625 15 16.8625C16.375 16.8625 17.5 17.9875 17.5 19.3625C17.5 20.7375 16.375 21.8625 15 21.8625C13.625 21.8625 12.5 20.7375 12.5 19.3625Z"
              fill="#fff"
            />
          </g>
        </svg>
        <div class="cart__counter">{{ cart }}</div>
      </div>
      <div class="user">
        <div class="user__name">{{ userName }}</div>
        <div class="user__logout" @click="logout">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
              fill="#2b2c35"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.getters['login/getUserName']
    },
    cart() {
      return this.$store.getters['store/getCart']
    }
  },
  methods: {
    logout() {
      this.$store.commit('login/changeStatus')
      this.$store.commit('login/setUserName', '')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
header {
  position: relative;
  z-index: 2;
  height: 60px;
  width: 100%;
  background-color: var(--primary);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}

.header-wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.cart {
  margin-left: auto;
  position: relative;
  width: 30px;
  height: 30px;
  justify-self: end;
  border-radius: 20px;

  &__counter {
    position: absolute;
    right: -5px;
    bottom: -5px;
    background-color: rgba(255, 255, 255, 0.9);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
}

.user {
  display: flex;
  margin-left: 20px;
  &__name {
    color: #fff;
    font-size: 18px;
    margin: 0 10px;
    text-transform: capitalize;
  }
  &__logout {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: var(--primary-light-darken);

    &:hover {
      background-color: var(--primary-light);
    }
  }
}
</style>
