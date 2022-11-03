<template>
  <div class="social-icons animate__animated animate__fadeInUp animate__delay-1s"  >
    <social-link :to="socialLinks.mail">
      <MailIcon />
    </social-link>

    <social-link :to="socialLinks.instagram">
      <InstagramIcon />
    </social-link>
  </div>
</template>

<script>
require("vue-ionicons/ionicons.css");
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import LinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
import TwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
import FacebookIcon from "vue-ionicons/dist/logo-facebook.vue";
import YoutubeIcon from "vue-ionicons/dist/logo-youtube.vue";
import InstagramIcon from "vue-ionicons/dist/logo-instagram.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";

export default {
  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    FacebookIcon,
    YoutubeIcon,
    MailIcon,
    InstagramIcon,
  },
  data() {
    return {
      avatar: require("@/assets/avatar-1.webp"),
      // ADD YOUR SOCIAL LINKS HERE 👇
      socialLinks: {
        instagram: "https://instagram.com/bigcitydogwalkers",
        mail: "mailto:hello@bigcitydogwalkers.com"
      },
    };
  },
};
</script>
<style scoped>

</style>
