<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        :label="label"
        v-model="color"
        readonly
        clearable
        :dense="dense"
        v-on="on"
        hide-details
        prepend-icon="mdi-eyedropper-variant"
        @click:clear="$emit('input', '')"
      >
        <template v-slot:append-outer>
          <v-icon :color="color">mdi-palette</v-icon>
        </template>
      </v-text-field>
    </template>
    <v-color-picker :mode="mode" v-model="color" @input="$emit('input', color)"></v-color-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'ux-color-picker',
  data () {
    return {
      menu: false,
      color: this.value
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    label: {
      type: String,
      default: '拾色器'
    },
    mode: {
      type: String,
      default: 'rgba'
    },
    dense: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    'value' (n, o) {
      this.color = n
    }
  }
}
</script>
