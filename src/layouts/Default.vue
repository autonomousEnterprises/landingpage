<template>
  <div class="bg-[url(~/assets/images/shade.png)] bg-no-repeat bg-fixed">
    <slot />
    <footer class="p-10 bg-black footer footer-center border-t border-gray-900">
      <div class="text-gray-400" data-aos="fade-down">
        <div>
          <a href="#" class="flex items-center justify-center space-x-3">
            <img src="~/assets/logo.png" alt="NujinAI Logo" class="w-8 h-8 object-contain" />
            <span class="text-xl font-bold text-white font-rubik">NujinAI</span>
          </a>
          <p class="pt-3 font-medium text-gray-300 max-w-md mx-auto text-sm">
            Universal Quantitative Trading Engine as an Autonomous Agent Skill.
          </p>
          <p class="pt-1 text-xs text-gray-500">
            Democratizing institutional quant research. Built for human freedom.
          </p>
          <p class="pt-3 text-xs text-gray-600">Copyright © {{new Date().getFullYear()}} NujinAI - Open Source & Community Driven</p>
        </div>
        <div>
          <div class="grid grid-flow-col gap-6 pt-2 items-center">
            <a href="https://www.linkedin.com/company/nujinai/" target="_blank" class="text-gray-400 hover:text-emerald-400 transition" title="Follow NujinAI on LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20"><path fill="currentColor" d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44m1.484 10.85h-2.97V7.5h2.97zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0z"/></svg>
            </a>
            <a href="https://github.com/nujinAI/nujinSkills" target="_blank" class="text-gray-400 hover:text-emerald-400 transition" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/christonomous" target="_blank" class="text-gray-400 hover:text-emerald-400 transition" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><path fill="currentColor" d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44m1.484 10.85h-2.97V7.5h2.97zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0z"/></svg>
            </a>
            <a href="https://chris.nujin.ai/" target="_blank" class="text-gray-400 hover:text-emerald-400 transition" title="Christopher Müller Website">
              <span class="text-xs font-mono uppercase tracking-wider border border-gray-800 hover:border-emerald-500 rounded px-2 py-1">Founder</span>
            </a>
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
