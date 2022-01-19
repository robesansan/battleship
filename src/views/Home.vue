<template>
  <div class="home">
    <table>
      <tr>
        <td><grid :size="8" :player="1" /></td>
        <td><grid :size="8" :player="2" /></td>
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

  created() {},
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
