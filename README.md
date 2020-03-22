---
pageClass: homepage
---

 <div class="hero">
 <!-- <img src="images/cover.jpg" style="width:100%;min-height:20vh;margin:0;height:40vh;"> -->
 <img src="./images/red.svg" width=20px style="width:auto;min-height:20vh;margin:0;height:40vh;">
 </div>

<div class="mainContent grid-container">
<div>
<h1>Heya Makers!</h1>
<div style="top:100px;width: 300px;">
<p>
HUE is aimed to be a makerspace at NRTI, to promote "makers" philosophy. 
We also wish to test our mettle in various competitions around. 

</p>
</div>

</div>
<div>
<img class="blob" src="./images/blob-shape.svg" width=300px>
</div>
</div>
</div>

<div class = "grid-container">
<div style="padding:50px;">
<img src="./images/team.gif" width="600px">
</div>
<div style="width: 300px;padding-top: 70px;"> 
<p>
By any chance, you interested? 
To know what the team is for, <a href="">check this out</a>
<br>
We would be releasing a form soon.
Keep checking. 
<br>
Also, you could subscribe to our newsletter here.
<a href="">Newsletter</a></p>
</div>
</div>

<style>
.mainContent{
    margin: 4rem 10rem;
}

.grid-container {
  display: grid;
  grid-template: 350px / auto 480px;
  grid-gap: 20px;
  padding: 10px;
}

.grid-container > div {
  padding: 20px 0;
}

@media only screen and (max-width: 600px) {
    .mainContent{
    margin:1rem;
}
    .grid-container {
  display: grid;
  grid-template: 150px / auto ;
  grid-gap: 0px;
  padding: 0px;
}

.grid-container > div {
  padding: 0 0;
  margin: 0;
}
.blob{
    display: none;
}
}

</style>