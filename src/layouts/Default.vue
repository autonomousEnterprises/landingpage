<template>
  <div class="bg-[url(~/assets/images/shade.png)] bg-no-repeat bg-fixed">
    <div class="md:fixed w-full px-6 py-8 sm:px-14 z-50" :class="{ 'bg-black/30 backdrop-blur-xl shadow': displayY }">
      <nav class="flex items-center justify-between">
        <div class="flex items-center">
          <a href="#" class="flex items-center">
            <img src="~/assets/logo.png" class="w-12" />
            <span class="pl-2 text-2xl font-medium text-white font-rubik">Autonomous Enterprises</span>
          </a>
          <ul class="items-center hidden pl-12 space-x-6 text-gray-300 md:flex">
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
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
      <div class=" text-gray-400" data-aos="fade-down">
        <div>
          <a href="#" class="flex items-center">
            <img src="~/assets/logo.png" class="w-12" />
            <span class="pl-2 text-2xl font-medium text-white font-rubik">Autonomous Enterprises</span>
          </a>
          <p class="md:font-bold pt-4">
            Built to run Online Businesses on Autopilot
          </p>
          <p>Copyright © {{new Date().getFullYear()}} - All right reserved</p>
        </div>
        <div>
          <div class="grid grid-flow-col gap-4 pt-6">
            <a href="https://linkedin.com/company/autonomousenterprises" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="white" d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44m1.484 10.85h-2.97V7.5h2.97zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0z"/></svg>
            </a>
            <!-- <a href="https://github.com/ossphilippines/nuxtwind-daisy" target="_blank">
              <i class="lab la-github text-4xl"></i>
            </a>
            <a href="https://facebook.com/ossph.org" target="_blank">
              <i class="lab la-facebook text-4xl"></i>
            </a> -->
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup script>
const { x, y } = useWindowScroll()
const displayY = computed(() => {
  return y.value
})
</script>
