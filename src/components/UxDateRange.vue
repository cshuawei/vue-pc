<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="datesText"
        :label="label"
        prepend-icon="mdi-calendar-multiple"
        readonly
        clearable
        v-on="on"
        :dense="dense"
        :hide-details="hideDetails"
        :error-messages="errorMessages"
        :single-line="singleLine"
        @click:clear="dates = []; $emit('change', [])"
        @blur="$emit('change', dates)"
      ></v-text-field>
    </template>
    <v-date-picker v-model="dates" locale="zh-cn" selected-items-text="2个选中" range @click:date="$emit('change', dates)"></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'ux-date-range',
  data () {
    return {
      menu: false,
      dates: this.value
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    range: {
      type: Boolean,
      default: false
    },
    hideDetails: {
      type: Boolean,
      default: true
    },
    errorMessages: {
      type: [String, Array],
      default: ''
    },
    singleLine: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    datesText: {
      get () {
        if (this.dates.length === 2) {
          const a = new Date(this.dates[0]).getTime()
          const b = new Date(this.dates[1]).getTime()
          if (a > b) {
            return this.dates[1] + '~' + this.dates[0]
          } else {
            return this.dates[0] + '~' + this.dates[1]
          }
        } else if (this.dates.length === 1) {
          return this.dates[0] + '~'
        }
        return ''
      },
      set () {}
    }
  },
  watch: {
    'value' (n, o) {
      this.dates = n
    }
  }
}
</script>
