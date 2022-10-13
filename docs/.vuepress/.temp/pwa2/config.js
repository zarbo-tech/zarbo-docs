import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "F:/JavaScript/ZarboDocs-v2/zarbo-docs/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "F:/JavaScript/ZarboDocs-v2/zarbo-docs/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});