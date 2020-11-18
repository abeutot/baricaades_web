<template>
<div>
  <table>
    <tr>
      <td colspan="8"></td>
      <td class="arrival"></td>
      <td colspan="8"></td>
    </tr>
    <tr>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="red"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
    </tr>
    <tr>
      <td class="black"></td>
      <td colspan="15"></td>
      <td class="black"></td>
    </tr>
    <tr>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="red"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
    </tr>
    <tr>
      <td colspan="8"></td>
      <td class="red"></td>
      <td colspan="8"></td>
    </tr>
    <tr>
      <td colspan="6"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="red"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td colspan="6"></td>
    </tr>
    <tr>
      <td colspan="6"></td>
      <td class="black"></td>
      <td colspan="3"></td>
      <td class="black"></td>
      <td colspan="6"></td>
    </tr>
    <tr>
      <td colspan="4"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="red"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="red"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td colspan="4"></td>
    </tr>
    <tr>
      <td colspan="4"></td>
      <td class="black"></td>
      <td colspan="7"></td>
      <td class="black"></td>
      <td colspan="4"></td>
    </tr>
    <tr>
      <td colspan="2"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td colspan="2"></td>
    </tr>
    <tr>
      <td colspan="2"></td>
      <td class="black"></td>
      <td colspan="11"></td>
      <td class="black"></td>
      <td colspan="2"></td>
    </tr>
    <tr>
      <td class="red"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="red"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="red"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="red"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="red"></td>
    </tr>
    <tr>
      <td class="black"></td>
      <td colspan="3"></td>
      <td class="black"></td>
      <td colspan="3"></td>
      <td class="black"></td>
      <td colspan="3"></td>
      <td class="black"></td>
      <td colspan="3"></td>
      <td class="black"></td>
    </tr>
    <tr>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
      <td class="black"></td>
    </tr>
    <tr>
      <td></td>
      <td class="red"></td>
      <td class="red"></td>
      <td class="red"></td>
      <td></td>
      <td class="green"></td>
      <td class="green"></td>
      <td class="green"></td>
      <td></td>
      <td class="yellow"></td>
      <td class="yellow"></td>
      <td class="yellow"></td>
      <td></td>
      <td class="blue"></td>
      <td class="blue"></td>
      <td class="blue"></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td class="red"></td>
      <td></td>
      <td class="red"></td>
      <td></td>
      <td class="green"></td>
      <td></td>
      <td class="green"></td>
      <td></td>
      <td class="yellow"></td>
      <td></td>
      <td class="yellow"></td>
      <td></td>
      <td class="blue"></td>
      <td></td>
      <td class="blue"></td>
      <td></td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style>
table {
  width: 100%;
  height: 100%;
  background-color: grey;
}
td {
  text-align: center;
  border-radius: 50%;
  padding: 1em;
}
td.arrival {
  background-color: white;
  color: white;
}
td.black {
  background-color: black;
  color:black;
}
td.red {
  background-color: red;
  color: red;
}
td.green {
  background-color: green;
  color: green;
}
td.yellow {
  background-color: yellow;
  color: yellow;
}
td.blue {
  background-color: blue;
  color: blue;
}
</style>
