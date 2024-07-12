<template>
  <v-row>
    <v-col cols="6"></v-col>

    <v-col cols="6">
      <v-text-field
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
        v-model="keyword"
        @input="getKeyword"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-data-table
        :headers="header"
        :items="data"
        v-model:items-per-page="itemsPerPage"
        :items-length="totalItems"
        v-model:page="page"
        sort-asc-icon="mdi-menu-down"
        sort-desc-icon="mdi-menu-up"
        class="products-table"
        :search="search_keyword"
      >
        <template
          v-for="heading in header"
          v-slot:[`item.${heading.value}`]="{ item, index }"
        >
          <div v-if="heading.value === 'price'">
            {{ $config.public.currency }} {{ item[heading.value] ?? "N/A" }}
          </div>
          <div v-else-if="heading.value !== 'category'">
            {{ item[heading.value] ?? "N/A " }}
          </div>
          <div v-else :class="'data-table-' + item[heading.value]">
            <span class="pa-1">
              {{ item[heading.value] ?? "N/A" }}
            </span>
          </div>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script setup>
const props = defineProps({
  header: Array,
  data: Array,
  tableLoading: Boolean,
  page: Number,
  totalItems: Number,
});
const page = ref(1);
const itemsPerPage = ref(5);

const itemsPerPageOptions = [
  { value: 5, title: "5" },
  { value: 10, title: "10" },
  { value: 25, title: "25" },
  { value: 50, title: "50" },
  { value: 100, title: "100" },
  { value: -1, title: "All" },
];
const keyword = ref("");
const search_keyword = ref("");
const getKeyword = () => {
  search_keyword.value = keyword.value;
  console.log(search_keyword.value);
};
</script>

<style lang="scss" scoped></style>
