<template>
  <div class="bg-[url(~/assets/images/shade.png)] bg-no-repeat bg-fixed">
    <div class="fixed w-full bg-black/50 backdrop-blur-xl px-6 py-8 sm:px-14 z-50" data-aos="fade-down">
      <nav class="flex items-center justify-between">
        <div class="flex items-center">
          <a href="#" class="flex items-center">
            <img src="~/assets/logo.png" class="w-12" />
            <span class="pl-2 text-2xl font-medium text-white font-rubik">Autonomous Enterprises</span>
          </a>
          <ul class="items-center hidden pl-12 space-x-6 text-gray-300 md:flex">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <a
          href="#access"
          class="hidden px-6 py-3 font-bold bg-white md:inline-block text-white bg-gradient-to-r from-secondary to-primary rounded-xl whitespace-nowrap"
          >
          Get early access
        </a>
      </nav>
    </div>
    <slot />
    <footer class="footer footer-center p-10 bg-black">
      <div class="" data-aos="fade-down">
        <div>
          <a href="#" class="flex items-center">
            <img src="~/assets/logo.png" class="w-12" />
            <span class="pl-2 text-2xl font-medium text-white font-rubik">Autonomous Enterprises</span>
          </a>
          <p class="md:font-bold">
            Built to run Online Businesses on Autopilot
          </p>
          <p>Copyright © {{new Date().getFullYear()}} - All right reserved</p>
        </div>
        <div>
          <div class="grid grid-flow-col gap-4">
            <a href="https://twitter.com/jrtiquez" target="_blank">
              <i class="lab la-twitter text-4xl"></i>
            </a>
            <a href="https://github.com/ossphilippines/nuxtwind-daisy" target="_blank">
              <i class="lab la-github text-4xl"></i>
            </a>
            <a href="https://facebook.com/ossph.org" target="_blank">
              <i class="lab la-facebook text-4xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup script>

</script>
