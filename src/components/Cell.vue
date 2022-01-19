<template>
  <div @click="clickCell">
    <div
      class="cell"
      v-if="cellData.ship"
      :class="{ ship: cellData.ship, hit: cellData.hit }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    cellData: Object,
  },
  methods: {
    clickCell() {
      if (this.cellData.ship) {
        this.$emit("hit", this.cellData);
      } else {
        console.log("MISS");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  cursor: pointer;
  height: 30px;
  background-color: blue;

  &.ship {
    background-color: #000;
  }
  &.hit {
    background-color: red;
    cursor: default;
  }
}
</style>
