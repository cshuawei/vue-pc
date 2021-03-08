<template>
  <v-dialog
    v-model="dialog"
    width="85%"
    max-width="500"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        color="primary"
        v-on="on"
      >
        {{btnLabel}}
      </v-btn>
    </template>
    <v-card
      class="mx-auto"
    >
      <v-sheet class="pa-4 primary lighten-2">
        <v-text-field
          v-model="search"
          :label="searchLabel"
          dark
          flat
          solo-inverted
          hide-details
          clearable
          clear-icon="mdi-close-circle-outline"
        ></v-text-field>
      </v-sheet>
      <v-card-text>
        <v-treeview
          selectable
          return-object
          :items="items"
          :search="search"
          :filter="filter"
          :open.sync="open"
          v-model="selection"
        >
        </v-treeview>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ux-treeview',
  data () {
    return {
      dialog: false,
      open: [1, 2],
      search: null,
      selection: []
    }
  },
  props: {
    btnLabel: {
      type: String,
      default: '配置城市范围'
    },
    searchLabel: {
      type: String,
      default: '输入城市'
    },
    items: {
      type: Array,
      default () {
        return [
          {
            id: 1,
            name: '中国',
            children: [
              {
                id: 2,
                name: '上海',
                children: [
                  {
                    id: 21,
                    name: '浦东新区'
                  },
                  {
                    id: 22,
                    name: '徐汇区'
                  },
                  {
                    id: 23,
                    name: '长宁区'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  computed: {
    filter () {
      return (item, search, textKey) => item[textKey].indexOf(search) > -1
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep.theme--dark.v-input > .v-input__control > .v-input__slot input {
  caret-color: #666;
}
</style>
