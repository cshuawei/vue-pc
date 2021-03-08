<template>
  <div class="ux-search-bar">
    <div class="top-bar">
      {{title}}
      <v-spacer></v-spacer>
      <v-btn text color="normal" @click="display = !display">
        <v-icon dense left>mdi-magnify</v-icon>{{display ? '收缩' : '展开'}}
      </v-btn>
    </div>
    <v-row align="end" ref="box" class="more-search" :class="{display: display}" :style="{maxHeight: maxHeight + 'px'}">
      <v-col v-for="(item, i) in items" :key="i">
        <template v-if="item.type === 'input'">
          <v-text-field
            v-model="params[item.key]"
            :label="item.label"
            hide-details></v-text-field>
        </template>
        <template v-else-if="item.type === 'select'">
          <v-select
            v-model="params[item.key]"
            :items="item.options"
            :label="item.label"
            hide-details
          ></v-select>
        </template>
        <template v-else-if="item.type === 'autocomplete'">
          <v-autocomplete
            v-model="params[item.key]"
            :items="item.options"
            :label="item.label"
            hide-details
          ></v-autocomplete>
        </template>
        <template v-else-if="item.type === 'datepicker'">
          <ux-date-picker :label="item.label" v-model="params[item.key]"></ux-date-picker>
        </template>
        <template v-else-if="item.type === 'datepicker.month'">
          <ux-date-picker type="month" :label="item.label" v-model="params[item.key]"></ux-date-picker>
        </template>
        <template v-else-if="item.type === 'timepicker'">
          <ux-time-picker :label="item.label" v-model="params[item.key]"></ux-time-picker>
        </template>
        <template v-else-if="item.type === 'daterange'">
          <ux-date-range :label="item.label" v-model="params[item.key]"></ux-date-range>
        </template>
        <template v-else>
          <v-text-field
            disabled
            label="未知的类型"
            hide-details></v-text-field>
        </template>
      </v-col>
      <v-col class="btns">
        <v-btn color="normal" @click="reset">
          重置
        </v-btn>
        <v-btn class="ml-2" :loading="isLoading" color="primary" @click="inquery">
          搜索
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ux-search-bar',
  data () {
    return {
      isLoading: false,
      display: false,
      maxHeight: 0,
      params: {}
    }
  },
  props: {
    title: {
      type: String,
      default: '列表'
    },
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    display (n) {
      if (n) {
        this.maxHeight = this.$refs.box.scrollHeight
        window.addEventListener('resize', this.setMaxHeight)
      } else {
        this.maxHeight = 0
        window.removeEventListener('resize', this.setMaxHeight)
      }
    },
    items: {
      handler (n) {
        n.forEach(ele => {
          if (ele.value) {
            this.params[ele.key] = ele.value
          }
        })
      },
      immediate: true
    }
  },
  methods: {
    setMaxHeight () {
      if (this.$refs.box) {
        this.maxHeight = this.$refs.box.scrollHeight
      }
    },
    inquery () {
      const data = this.$util.clone(this.params)
      for (const key in data) {
        const ele = data[key]
        if (key.indexOf(':') >= 0) {
          const karr = key.split(':')
          const type = karr[0]
          const name = karr[1]
          switch (type) {
            case 'daterange':
              if (ele.length === 2) {
                const a = new Date(ele[0]).getTime()
                const b = new Date(ele[1]).getTime()
                if (a > b) {
                  data[name] = ele[1] + '~' + ele[0]
                } else {
                  data[name] = ele.join('~')
                }
              } else if (ele.length === 1) {
                data[name] = ele[0] + '~'
              }
              delete data[key]
              break
            case 'timepicker':
              if (data[name]) {
                data[name] = data[name] + ' ' + ele
              }
              delete data[key]
              break
            default:
              break
          }
        }
      }
      this.$emit('inquery', data)
    },
    reset () {
      this.params = {}
    }
  }
}
</script>

<style lang="scss" scoped>
.ux-search-bar {
  width: 100%;
  .top-bar {
    display: flex;
    align-items: center;
  }
}
.more-search {
  max-height: 0;
  opacity: 0;
  padding: 0 15px;
  visibility: hidden;
  transform: scaleY(0);
  transform-origin: center top;
  transition: all 0.25s ease-in 0s;
  &.display {
    visibility: visible;
    opacity: 1;
    transform: scaleY(1);
    max-height: 200px;
  }
}
.row {
  .col {
    padding: 10px;
    flex: 0 0 270px;
    &.btns {
      flex: 0 0 160px;
    }
  }
}
@media (max-width: 690px) {
  .row {
    .col {
      flex: 0 0 100%;
    }
  }
}
</style>
