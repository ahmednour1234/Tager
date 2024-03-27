<template>
  <div v-if="loading" class="load-spinner-container">
    <div class="wrapper">
  <span>T</span>
  <span>-</span>
  <span>A</span>
  <span>-</span>
  <span>G</span>
  <span>-</span>
  <span>E</span>
  <span>-</span>
  <span>R</span>
  <div class="loader d-lg-none">
  <div class="inner one"></div>
  <div class="inner two"></div>
  <div class="inner three"></div>
</div>
</div>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>
  
<script>
export default {
  name: 'load-Hello',
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    // Simulate loading time (replace this with your actual loading logic)
    setTimeout(() => {
      this.loading = false;
    }, 10000); // Simulated loading time: 2000 milliseconds (2 seconds)
  },

};
</script>
  
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Titan+One&display=swap");
.wrapper {
  width: 100vw;
  text-align: center;
  span {
    -webkit-text-stroke-width: 1.25px;
    -webkit-text-stroke-color: #000;
    font-size: 100px;
    text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
    transform: translate(0, 100%) rotate(4deg);
    animation: jump 2s ease-in-out infinite;
    display: inline-block;
    font-family: "Titan One", cursive;
    color: #fff;

    @for $i from 1 through 7 {
      &:nth-child(#{$i}) {
        animation-delay: 120ms * $i;
      }
    }
  }
}
@keyframes jump {
  33% {
    text-shadow: 0 60px #f37121, 0 150px #f2aaaa;
  }
  50% {
    transform: translate(0, 0) rotate(-4deg);
    text-shadow: 0 0px #8fc0a9, 0 0px #84a9ac;
  }
  66.67% {
    text-shadow: 0 -60px #d54062, 0 -150px #8fc0a9;
  }
}
html {
  width: 100%;
  height: 100vh;
}
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #000;
}
@media screen and (max-height: 200px) {
  .wrapper {
    transform: scale(0.3,0.3);
  }
}
@media screen and (max-width: 576px) {
  .wrapper {
    span {
      font-size: 50px;
    }
  }
}
.loader {
margin-top: 30%;
margin-left: 40%;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
}

.inner {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;  
}

.inner.one {
  left: 0%;
  top: 0%;
  animation: rotate-one 1s linear infinite;
  border-bottom: 3px solid #0000ff;
}

.inner.two {
  right: 0%;
  top: 0%;
  animation: rotate-two 1s linear infinite;
  border-right: 3px solid #0000ff;
}

.inner.three {
  right: 0%;
  bottom: 0%;
  animation: rotate-three 1s linear infinite;
  border-top: 3px solid #0000ff;
}

@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}</style>
  