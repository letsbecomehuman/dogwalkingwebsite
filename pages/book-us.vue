<template>
<b-container class="page animate__animated animate__fadeIn">
  <b-row class="mx-auto signupcta col-md-8">

    <b-col cols="col-md-8 col-lg-8 ">
      <h2>Discuss Our Services 💌</h2>

      <p class="text-left">
        If you have any question about our services or just want to say hi, and we will get back to you as soon as possible!
      </p>


      <b-button type="submit" variant="primary" href="https://airtable.com/shrOWyEGEJknCN9Yl" target="_blank" style="font-size: large;">Get in Touch</b-button>
      </b-form>
    </b-col>
    <b-col cols="col-md-4 col-lg-4 " class="mx-auto d-flex align-items-center justify-content-center d-none d-md-block vanishsmall">
      <b-img src="../assets/bigcitydogwalk.png" id="avatar-img" alt="Itsuka" />
    </b-col>

  </b-row>
</b-container>
</template>
<script>
export default {
  head: {
    title: "Big City Dog Walkers | Contact",
    meta: [{
        hid: "description",
        name: "description",
        content: "Want to learn more about our services? Fill out our contact form.",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Big City Dog Walkers | Contact",
      },
      {
        property: "og:description",
        content: "Want to learn more about our services? Fill out our contact form.",
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require(`@/assets/dogwalking.jpeg`)
      },
    ],
  },
};
</script>
<style scoped>
.container {
  margin-top: 120px;
}

form {
  margin-top: 40px;
  text-align: left;
}

.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
