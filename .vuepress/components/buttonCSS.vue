<template>
    <div class="buttonCSS card">
    <slot></slot>
    </div>
</template>

<style>
.buttonCSS {
  width: fit-content;
  padding: 10px 20px;
  }

.card{
  background-color: #f7f7f7;
  box-shadow: 3px 2px 3px grey;
}
.card:hover{
  box-shadow: 5px 5px 10px grey;
}

</style>