<template>
  <div>
    <div
      v-if="cellData.hit"
      class="cell hit-cell"
      :class="{ sunken: cellData.ship.sunken }"
    ></div>
    <div v-else-if="cellData.tried" class="cell tried-cell"></div>
    <div v-else-if="blocked" class="cell blocked-cell"></div>
    <div v-else class="cell clickable-cell" @click="clickCell"></div>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    cellData: Object,
    blocked: Boolean,
  },
  methods: {
    clickCell() {
      if (this.cellData.ship) {
        this.$emit("hit", this.cellData);
      } else {
        this.$emit("miss", this.cellData);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  height: 30px;

  .blocked-cell {
    background-color: #fff;
    cursor: default;
  }

  .hit-cell {
    background-color: #000;
    cursor: default;

    &.sunken {
      background-color: red;
    }
  }

  .tried-cell {
    background-color: blue;
  }

  .clickable-cell {
    cursor: pointer;
    background-color: grey;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
