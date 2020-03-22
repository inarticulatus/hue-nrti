<template>
<div class="post-container">
<router-link v-for="page in pages" :to="page.path">
<div class="post-card">
<img class="thumbnail" :src="require(`../../blog/${page.frontmatter.image}`)" :alt="selectedDog">
<div class="page-detail">
<div class="page-title">{{ page.title }}</div>
<div class="page-description">{{ page.frontmatter.description }}</div>
<div class="page-author">Author: {{ page.frontmatter.author }}</div>
</div>
</div>
</router-link>
</div>
</template>
<script>
export default {
data() {
return {
pages: []
}
},
mounted() {
this.$site.pages.forEach(page => {
if (page.frontmatter.type === 'article') {
this.pages.push(page)
}
})
}
}
</script>

<style>
.post-card{
  background-color: #f7f7f7;
  width: 40vw;
  padding: 50px;
  margin:30px 0;
  box-shadow: 3px 2px 3px grey;
}
.post-card:hover{
  box-shadow: 5px 5px 10px grey;
}
.post-container {
  width: fit-content;
}

@media only screen and (max-width: 600px) {
  .post-card{
  background-color: #f7f7f7;
  width: fit-content;
  padding: 50px;
  margin: 30px;
  box-shadow: 3px 2px 3px grey;
}
.post-card:hover{
  box-shadow: 5px 5px 10px grey;
}
.post-container {
  width: 100%;
}


}

.thumbnail {
  width: auto;
  height: 25px;
  margin: 20px 0px;
}
</style>