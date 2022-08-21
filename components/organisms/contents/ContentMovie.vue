<template>
  <div>
    <LabelTitle class="pt-4" :title="title" />
    <div class="d-flex content-movie pa-8">
      <div class="content-movie__overview">{{ overview }}</div>
      <div class="content-movie__credit pl-12 pr-4">
        <span>Casts:</span>
        <div v-for="(cast, index) in casts" :key="index" :title="cast">
          {{ cast }}
        </div>
      </div>
      <div class="content-movie__credit">
        <span>Director:</span>
        <div :title="director">
          {{ director }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    overview: { type: String, default: '' },
    credit: { type: Object, default: () => ({}) },
  },
  computed: {
    casts() {
      return this.credit.cast.map(({ name }) => name).slice(0, 4)
    },
    director() {
      const director = this.credit.crew.find(({ job }) => job === 'Director')
      return director ? director.name : ''
    },
  },
}
</script>

<style lang="scss" scoped>
.content-movie {
  font-size: 18px;
  .content-movie__overview {
    width: 50%;
    line-height: 2;
  }
  .content-movie__credit {
    width: 25%;
    div {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
