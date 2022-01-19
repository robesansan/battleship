<template>
  <div class="grid">
    <div class="row" v-for="(r, index) in rows" :key="index">
      <cell
        class="cell"
        v-for="c in r"
        :key="c.id"
        :cell-data="c"
        :blocked="blocked"
        @hit="hitShip"
        @miss="missClick"
      />
    </div>
  </div>
</template>

<script>
import Cell from "@/components/Cell.vue";

const ORIENTATION = {
  vertical: "vertical",
  horizontal: "horizontal",
};

export default {
  name: "Grid",
  props: {
    size: Number,
    player: Number,
    playing: Number,
  },
  components: {
    Cell,
  },
  data() {
    return {
      rows: [],
      ships: [
        {
          id: 1,
          size: 2,
        },
        {
          id: 2,
          size: 3,
        },
        {
          id: 3,
          size: 4,
        },
        {
          id: 4,
          size: 5,
        },
      ],
    };
  },
  created() {
    for (var x = 0; x < this.size; x++) {
      var row = [];
      this.rows.push(row);
      for (var y = 0; y < this.size; y++) {
        let id = x * this.size + y;
        row.push({
          id,
          x,
          y,
          ship: null,
          hit: false,
          tried: false,
        });
      }
    }

    this.ships.map((ship) => {
      let counter = 0;
      do {
        ship.orientation =
          this.getRandomInt(0, 1) == 0
            ? ORIENTATION.vertical
            : ORIENTATION.horizontal;
        ship.x = this.getRandomInt(0, this.size - ship.size);
        ship.y = this.getRandomInt(0, this.size - ship.size);
        counter++;
      } while (!this.checkAllowShip(ship) && counter < 10);

      this.putShip(ship);
    });

    // console.table(this.rows);
  },

  methods: {
    checkAllowShip(ship) {
      if (ship.orientation == ORIENTATION.vertical) {
        for (let yy = 0; yy < ship.size; yy++) {
          if (this.rows[ship.x][ship.y + yy].ship) {
            return false;
          }
        }
        return true;
      } else {
        for (let xx = 0; xx < ship.size; xx++) {
          if (this.rows[ship.x + xx][ship.y].ship) {
            return false;
          }
        }
        return true;
      }
    },

    putShip(ship) {
      if (ship.orientation == ORIENTATION.vertical) {
        for (let yy = 0; yy < ship.size; yy++) {
          this.rows[ship.x][ship.y + yy].ship = ship;
        }
      } else {
        for (let xx = 0; xx < ship.size; xx++) {
          this.rows[ship.x + xx][ship.y].ship = ship;
        }
      }
    },

    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
    },

    hitShip(cellData) {
      this.rows[cellData.x][cellData.y].hit = true;
      this.rows[cellData.x][cellData.y].tried = true;

      this.$emit("change-player");
    },

    missClick(cellData) {
      this.rows[cellData.x][cellData.y].tried = true;

      this.$emit("change-player");
    },
  },

  computed: {
    blocked() {
      return this.player != this.playing;
    },
  },
};
</script>

<style scoped>
.row {
  display: inline-block;
  height: 30px;
}
.cell {
  width: 30px;
  border: 1px solid #000;
  margin: 10px;
}
</style>
