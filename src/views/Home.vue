<template>
  <div>

  </div>
</template>

<script>
import { getMeetUps } from '../data/data.js';
export default {
    data: function() {
        return {
            list: []
        }
    },
    created() {
        this.list = getMeetUps()
    }
}
</script>

<style>

</style>