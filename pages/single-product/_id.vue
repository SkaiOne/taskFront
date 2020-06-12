<template>
  <div class="product">
    <div class="back" @click="$router.go(-1)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
          fill="#2b2c35"
        />
      </svg>
    </div>
    <div class="top">
      <img
        :src="require('@/assets/product.png')"
        alt="product"
        class="item__image"
      />
      <h1>{{ product.title }}</h1>
    </div>
    <div class="text">
      <span>
        {{ product.description }}
      </span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.getters['store/getProduct']
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
}

.back {
  svg {
    transform: rotate(180deg);

    &:hover {
      path {
        fill: var(--primary);
      }
    }
  }
}
.top {
  display: flex;
}
.text {
  margin: 10px;
  span {
    font-weight: bold;
    display: block;
  }
}
</style>
