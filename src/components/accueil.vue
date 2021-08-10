<template>
  <div id="app">
    <img alt="Vue logo" id="logo" src="@/assets/logo.png">
    <div id="left">
      
      <span id='sub-title'> EST 2021 </span>
    
        <h1 id="title">
         L'AGENCE 306°
        </h1>
        <p id="text-title">
          Branding Développement web réseaux sociaux production video 
        </p>
        <button>
            En savoir plus
        </button>
    </div>
    


  </div>
</template>

<script>

</script>
<style>

#logo{
  width: 280px;
}
button{
  width: 150px;
  padding: 1%;
  border: none;
  background-color: black;
  color: aliceblue;
}
#title{
  color: black;
  font-size: 50px;
  font-weight: bold;
}
#sub-title{
  font-weight: bold;
  color: black;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing: 1em;
}
#text-title{
  font-weight: bold;
  letter-spacing: 0.2em;
}
.bm-burger-button {
    height: 45px ;
    width: 54px;
    /* padding: 2%; */
}
#left{
  display: flex;
  flex-direction: column;
  margin-left: 5%;
}
</style>
