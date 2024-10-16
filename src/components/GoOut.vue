<template>
  <div class="main-window">
    <div class="text">Подтвердите выход</div>
    <div class="btns">
      <v-btn class="btn" >Остаться</v-btn>
      <v-btn  class="btn" @click="$router.push('/')">Выход</v-btn>
    </div>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.main-window {
  padding: 10px;
  width: 20vw;
  height: 20vh;
  background-color: #eafaf1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.text {
  font-size: xx-large;
}

.btns {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.btn {
  margin: 0px;
  width: 105px;
  min-height: 50px;
  font-weight: 600;
  border: 1px solid #148f77;
  &:hover {
    background: #148f77;
    color: #eafaf1;
  }
}
</style>