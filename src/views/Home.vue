<template>
  <div class="home">
    <h1>Battleship</h1>
    <table>
      <tr>
        <td>
          <h2>Player 1</h2>
          <grid
            :size="8"
            :player="1"
            :playing="playing"
            @change-player="changePlayer"
          />
        </td>
        <td>
          <h2>Player 2</h2>
          <grid
            :size="8"
            :player="2"
            :playing="playing"
            @change-player="changePlayer"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from "@/components/Grid.vue";

export default {
  name: "Home",
  components: {
    Grid,
  },
  data() {
    return {
      playing: 1,
    };
  },

  created() {},

  methods: {
    changePlayer() {
      this.playing = (this.playing++ % 2) + 1;
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  margin: auto;
  text-align: center;
}

table {
  margin-left: auto;
  margin-right: auto;
}

table td {
  padding: 30px;
}
</style>
