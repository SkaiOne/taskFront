<template>
  <div class="container">
    <div class="products">
      <div class="item" v-for="(item, index) in items" :key="index">
        <div class="item__title" @click="_ => redirect(item)">
          {{ item.title }}
        </div>
        <img
          :src="require('@/assets/product.png')"
          alt="product"
          class="item__image"
          @click="_ => redirect(item)"
        />
        <button
          :class="item.active ? 'active' : 'disabled'"
          @click="() => addToCart(item)"
          class="item__button"
        >
          add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Item1', description: 'Item1 DESCRIPITON', active: true },
      { title: 'Item2', description: 'Item2 DESCRIPITON', active: true },
      { title: 'Item3', description: 'Item3 DESCRIPITON', active: true },
      { title: 'Item4', description: 'Item4 DESCRIPITON', active: true },
      { title: 'Item5', description: 'Item5 DESCRIPITON', active: true },
      { title: 'Item6', description: 'Item6 DESCRIPITON', active: true }
    ]
  }),
  methods: {
    addToCart(item) {
      const index = this.items.indexOf(item)
      this.items[index].active = !this.items[index].active

      const active = this.items[index].active
      if (!active) {
        this.$store.commit('store/increment')
      } else {
        this.$store.commit('store/decrement')
      }
    },
    redirect(item) {
      this.$store.commit('store/setProduct', item)
      this.$router.push(`/single-product/${item.title}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  max-width: 1200px;
  min-height: calc(100vh - 60px);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.products {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex-basis: 300px;
  background: var(--light);
  border-radius: 8px;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  &__title {
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  &__image {
    max-height: 250px;
    margin: 10px;
  }
  &__button {
    border: none;

    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    outline: none;
  }
  .active {
    background-color: var(--primary);
    color: #fff;
  }
  .disactive {
    background-color: var(--primary-light-darken);
    color: #2b2c35;
  }
}
</style>
