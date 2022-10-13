import {
  MarkdownContent_default
} from "./chunk-BPXOLMLA.js";
import {
  AutoLink_default,
  Icon_default
} from "./chunk-6EMY7PL4.js";
import {
  client_exports
} from "./chunk-FECFGNAG.js";
import {
  isLinkExternal
} from "./chunk-LS4IQIE6.js";
import {
  RouterLink
} from "./chunk-U27KJSRC.js";
import "./chunk-YACYAO4R.js";
import {
  Transition,
  TransitionGroup,
  computed,
  defineComponent,
  h
} from "./chunk-4YVVQK3V.js";
import {
  isArray
} from "./chunk-XYQ66V4O.js";
import "./chunk-5E3NKPRU.js";

// node_modules/vuepress-theme-hope/lib/client/components/transitions/DropTransition.js
var DropTransition_default = defineComponent({
  name: "DropTransition",
  components: {
    Transition,
    TransitionGroup
  },
  props: {
    type: { type: String, default: "single" },
    delay: { type: Number, default: 0 },
    duration: { type: Number, default: 0.25 },
    appear: Boolean
  },
  setup(props, { slots }) {
    const setStyle = (item) => {
      item.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
      item.style.transform = "translateY(-20px)";
      item.style.opacity = "0";
    };
    const unsetStyle = (item) => {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    };
    return () => h(
      props.type === "single" ? Transition : TransitionGroup,
      {
        name: "drop",
        appear: props.appear,
        onAppear: setStyle,
        onAfterAppear: unsetStyle,
        onEnter: setStyle,
        onAfterEnter: unsetStyle,
        onBeforeLeave: setStyle
      },
      () => {
        var _a;
        return (_a = slots["default"]) == null ? void 0 : _a.call(slots);
      }
    );
  }
});

// node_modules/vuepress-theme-hope/lib/client/components/HomeFeatures.js
var HomeFeatures_default = defineComponent({
  name: "HomeFeatures",
  setup() {
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    const features = computed(() => {
      if (isArray(frontmatter.value.features))
        return frontmatter.value.features;
      return [];
    });
    return () => {
      var _a;
      return features.value.length ? h("div", { class: "features" }, (_a = frontmatter.value.features) == null ? void 0 : _a.map((feature) => {
        const children = [
          h(Icon_default, { icon: feature.icon }),
          h("h2", { innerHTML: feature.title }),
          h("p", { innerHTML: feature.details })
        ];
        return feature.link ? isLinkExternal(feature.link) ? h("a", {
          class: "feature link",
          href: feature.link,
          role: "navigation",
          "aria-label": feature.title,
          target: "_blank"
        }, children) : h(RouterLink, {
          class: "feature link",
          to: feature.link,
          role: "navigation",
          "aria-label": feature.title
        }, () => children) : h("div", { class: "feature" }, children);
      })) : null;
    };
  }
});

// node_modules/vuepress-theme-hope/lib/client/components/HomeHero.js
var HomeHero_default = defineComponent({
  name: "HomeHero",
  setup(_props, { slots }) {
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    const siteLocale = (0, client_exports.useSiteLocaleData)();
    const heroText = computed(() => {
      if (frontmatter.value.heroText === false)
        return false;
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === false)
        return false;
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const heroImage = computed(() => {
      if (!frontmatter.value.heroImage)
        return null;
      return (0, client_exports.withBase)(frontmatter.value.heroImage);
    });
    const heroImageDark = computed(() => {
      if (!frontmatter.value.heroImageDark)
        return null;
      return (0, client_exports.withBase)(frontmatter.value.heroImageDark);
    });
    const heroAlt = computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const actions = computed(() => isArray(frontmatter.value.actions) ? frontmatter.value.actions : []);
    return () => {
      var _a, _b;
      return h("header", { class: "hero" }, [
        ((_a = slots["heroImage"]) == null ? void 0 : _a.call(slots)) || h(DropTransition_default, { appear: true, type: "group" }, () => [
          heroImage.value ? h("img", {
            key: "light",
            class: { light: heroImageDark.value },
            src: heroImage.value,
            alt: heroAlt.value
          }) : null,
          heroImageDark.value ? h("img", {
            key: "dark",
            class: "dark",
            src: heroImageDark.value,
            alt: heroAlt.value
          }) : null
        ]),
        ((_b = slots["heroInfo"]) == null ? void 0 : _b.call(slots)) || h("div", { class: "hero-info" }, [
          heroText.value ? h(DropTransition_default, { appear: true, delay: 0.04 }, () => h("h1", { id: "main-title" }, heroText.value)) : null,
          tagline.value ? h(DropTransition_default, { appear: true, delay: 0.08 }, () => h("p", { class: "description" }, tagline.value)) : null,
          actions.value.length ? h(DropTransition_default, { appear: true, delay: 0.12 }, () => h("p", { class: "actions" }, actions.value.map((action) => h(AutoLink_default, {
            class: ["action-button", action.type || "default"],
            config: action,
            externalLinkIcon: false
          })))) : null
        ])
      ]);
    };
  }
});

// node_modules/vuepress-theme-hope/lib/client/components/HomePage.js
import "F:/JavaScript/ZarboDocs-v2/zarbo-docs/node_modules/vuepress-theme-hope/lib/client/styles/home-page.scss";
var HomePage_default = defineComponent({
  name: "HopePage",
  setup(_props, { slots }) {
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    return () => {
      var _a, _b, _c;
      return h("main", {
        class: "home project",
        id: "main-content",
        "aria-labelledby": frontmatter.value.heroText === null ? void 0 : "main-title"
      }, [
        (_a = slots["top"]) == null ? void 0 : _a.call(slots),
        h(HomeHero_default),
        h(DropTransition_default, { appear: true, delay: 0.16 }, () => h(HomeFeatures_default)),
        (_b = slots["center"]) == null ? void 0 : _b.call(slots),
        h(DropTransition_default, { appear: true, delay: 0.24 }, () => h(MarkdownContent_default, { custom: true })),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});

// dep:@theme-hope_components_HomePage__js
var theme_hope_components_HomePage_js_default = HomePage_default;
export {
  theme_hope_components_HomePage_js_default as default
};
//# sourceMappingURL=@theme-hope_components_HomePage__js.js.map
