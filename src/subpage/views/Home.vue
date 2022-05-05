<template>
  <div class="home">
    <h1>subpage</h1>
    <input type="file" name="filename" @change="onFileChange"><span>请上传</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    onFileChange(e){
      console.log(e);
      const file = e.target.files[0]
      console.log(file);
    }
  }
}
</script>
