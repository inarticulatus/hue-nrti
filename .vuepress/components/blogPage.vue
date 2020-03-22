<template>
    <div class = "blog_page">
      <slot></slot>
    </div>
</template>

<script>
 export default {
   name: 'blogPage'
 }
</script>

<style>
@media only screen and (min-width: 600px) {
.blog_page{
    top: -30vh;
    width:70vw; 
    padding: 50px;
    z-index: 2;
    min-height:500px; 
    box-shadow:0 0 8px 0 rgba(0,0,0,.4); 
    margin:0 auto; 
    position:relative;
    background-color: white;
}

.blog_page:before {
  position:absolute;
  bottom:0; 
  width:80%;
  z-index: -1; 
  height:40%; 
  content:''; 
  background: linear-gradient(transparent 0%,#fff 100%);
  transform:scale(1.4);
}
}

@media only screen and (max-width: 600px) {
  .blog_page {
    top: 0;
    padding: 50px;
    z-index: 2;
    margin:0 auto; 
    position:relative;
    background-color: white;
  }
}
</style>