<script>
export default {
    props: ['name', 'descr', 'max', 'value', 'last_recorded_value', 'max_resolve', 'min_resolve', 'visible', 'is_up_to_date', 'alignment']
}
</script>

<template>
  <div :class="{
    'clock-bar': true,
    'clock-bar-up-to-date': is_up_to_date,
    'clock-bar-out-of-date': !is_up_to_date,
    'clock-bar-neutral': alignment === 'neutral',
    'clock-bar-hostile': alignment === 'hostile',
    'clock-bar-friendly': alignment === 'friendly'
  }">
    <div class="clock-bar-title"><h4>{{ visible.includes('name') ? name : '??' }}</h4></div>
    <div class="clock-bar-container">
        <div class="clock-bar-left-label">{{ visible.includes('min_resolve') ? min_resolve : '??' }}</div>
        <div class="clock-bar-outer">
          <div class="clock-bar-inner"
           v-if="visible.includes('progress')" 
           :style="{ width: `${(100 * (last_recorded_value / max)).toFixed(2)}%`}">
          </div>
        </div>
        <div class="clock-bar-progress">{{ visible.includes('progress') ? last_recorded_value : '??'}} / {{ max }}</div>
        <div class="clock-bar-right-label">{{ visible.includes('max_resolve') ? max_resolve : '??' }}</div>
    </div>
    <div class="clock-bar-descr">
      {{ visible.includes('descr') ? descr : '??' }}
    </div>
  </div>
</template>