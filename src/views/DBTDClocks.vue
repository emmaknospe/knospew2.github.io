<script lang="ts">
      import Clock from "../components/Clock.vue"
      import type { ClockType } from "../types"

      export default{
          data() {
              return {
                  clocks: [],
                  loaded: false
              } as {clocks: ClockType[], loaded: boolean}
          },
          methods: {
            async getData() {
              const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:eyXtWEG6/clocks");
              this.clocks = (await res.json()) as ClockType[];
              this.loaded = true;
            }
          },
          computed: {
            visibleClocks() {
              return this.clocks.filter(function(clock) {
                return clock.visible && clock.visible.length > 0;
              }).sort(function(clock_a: ClockType, clock_b: ClockType) {
                if (clock_a.name > clock_b.name) {
                  return 1;
                } 
                if (clock_b.name > clock_a.name) {
                  return -1;
                }
                return 0;
              })
            }
          },
          components: {
              Clock
          },
          mounted() {
            this.getData()
          }
      }
      
</script>
<template>
  <main>
    <h2>DBTD Clocks</h2>
    <div v-if="!loaded">
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div> 
    <Clock 
    v-for="clock in visibleClocks"
    :key="clock.name" 
    :name="clock.name" 
    :descr="clock.descr" 
    :max="clock.max" 
    :last_recorded_value="clock.last_recorded_value"
    :value="clock.value"
    :max_resolve="clock.max_resolve"
    :min_resolve="clock.min_resolve"
    :visible="clock.visible"/>
  </main>
</template>

<style>

</style>
