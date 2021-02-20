<template>
    <div>
      <about />
      <give-money/>
    </div>
     
</template>

<script>
import About from "../components/about/About";
import GiveMoney from '../components/about/GiveMoney';

export default {
  components: {
    about: About,
    giveMoney:GiveMoney,

  },
};
</script>