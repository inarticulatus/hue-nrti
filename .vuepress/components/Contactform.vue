<template>
<iframe class="iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSd0n1NQKKME9y8D-ui9lu1e1OSNps_RPgk9EvNqT-MxrQiOKw/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style>
.iframe{
    width:100vw;
    height: 800px;
    position: absolute;
    left:0px;
}

@media only screen and (max-width: 600px) {
    .iframe{
        width:100vw;
        height: 800px;
}
}
</style>