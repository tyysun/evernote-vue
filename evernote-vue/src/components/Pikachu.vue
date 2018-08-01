<template>
  <div id="pikachu" >
    <div class="pikachu-wrapper">
    <div class="nose"></div>
    <div class="eye left"></div>
    <div class="eye right"></div>
    <div class="face left"></div>
    <div class="face right"></div>
    <div class="upperLip left"></div>
    <div class="upperLip right"></div>
    <div class="lowerLip-wrapper">
      <div class="lowerLip"></div>
    </div>
  </div>
  </div>
</template>

<script>



export default {
  
  data () {
    return {
      
    }
  },
  

  
}
</script>

<style scoped>
    *{margin: 0; padding: 0; box-sizing: border-box;}
    *::after{
      box-sizing: border-box;
    }
    *::before{
      box-sizing: border-box;
    }
    #pikachu{
      height: 500px;
      width: 530px;
      border: 1px solid green;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FEE433;
    }
    .pikachu-wrapper{
      width: 100%;
      height: 165px;
      position: relative;
    }
    .nose{
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 12px;
      border-color: black transparent transparent;
      border-radius: 11px;
      position: absolute;
      left: 50%;
      top: 28px;
      margin-left: -12px;
    }
    .eye{
      width: 49px;
      height: 49px;
      background: #2E2E2E;
      position: absolute;
      border-radius: 50%;
      border: 2px solid #000000;
    }
    .eye::before{
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      background: white;
      position: absolute;
      border-radius: 50%;
      left: 6px;
      top:-1px;
      border: 2px solid #000;
    }
    .eye.left{
      right: 50%;
      margin-right: 90px;
    }
    .eye.right{
      left: 50%;
      margin-left: 90px;
    }
    .face{
      width: 68px;
      height: 68px;
      background: #FC0D1C;
      border: 2px solid black;
      border-radius: 50%;
      position: absolute;
      top: 85px;
    }
    .face.left{
      right: 50%;
      margin-right: 116px;
    }
    .face.right{
      left: 50%;
      margin-left: 116px;
    }
    .upperLip{
      height: 25px;
      width: 80px;
      border: 2px solid black;
      position: absolute;
      top: 50px;
      background: #FDE348;
    }
    .upperLip.left{
      right: 50%;
      border-bottom-left-radius: 40px 25px;
      border-top: none;
      border-right: none;
      z-index: 1;
      transform: rotate(-20deg);
    }
    .upperLip.right{
      left: 50%;
      border-bottom-right-radius: 40px 25px;
      border-top: none;
      border-left: none;
      z-index: 1;
      transform: rotate(20deg);
    }
    .lowerLip-wrapper{
      bottom: -35px;
      position: absolute;
      left: 50%;
      margin-left: -150px;
      z-index: 0;
      height: 140px;
      overflow: hidden;
      width: 300px;
    }
    .lowerLip{
      height: 3500px;
      width: 300px;
      background: #990513;
      border-radius: 200px/2000px;
      border: 2px solid black;
      position: absolute;
      bottom: 0px;
      overflow: hidden;
    }
    .lowerLip::after{
      content: '';
      position: absolute;
      bottom: -1px;
      width: 100px;
      height: 100px;
      background: #FC4A62;
      left: 50%;
      margin-left: -50px;
      border-radius: 50px;
    }
</style>