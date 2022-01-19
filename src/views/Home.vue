<template>
  <div class="home">
    <h1>Battleship</h1>
    <h2 v-if="winner">
      PLAYER {{ winner }} WINS !! Yoohoo !! Congratulations !!
    </h2>
    <table>
      <tr>
        <td>
          <h2 v-if="!winner">
            <template v-if="playing == 1">Player 1 turn</template>&nbsp;
          </h2>
          <grid
            :size="8"
            :player="1"
            :playing="playing"
            @change-player="changePlayer"
            @win-player="winPlayer"
          />
        </td>
        <td>
          <h2 v-if="!winner">
            <template v-if="playing == 2">Player 2 turn</template>&nbsp;
          </h2>
          <grid
            :size="8"
            :player="2"
            :playing="playing"
            @change-player="changePlayer"
            @win-player="winPlayer"
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
      winner: 0,
    };
  },

  created() {},

  methods: {
    changePlayer() {
      this.playing = (this.playing++ % 2) + 1;
    },

    winPlayer(player) {
      this.playing = 0;
      this.winner = player;
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
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
