const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-contentful-js": hot(preferDefault(require("/Users/luis/coding_proyects/luisro.co/src/templates/blog-post-contentful.js"))),
  "component---src-templates-past-work-contentful-js": hot(preferDefault(require("/Users/luis/coding_proyects/luisro.co/src/templates/past-work-contentful.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/luis/coding_proyects/luisro.co/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/luis/coding_proyects/luisro.co/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/luis/coding_proyects/luisro.co/src/pages/index.js"))),
  "component---src-pages-page-2-jsx": hot(preferDefault(require("/Users/luis/coding_proyects/luisro.co/src/pages/page-2.jsx"))),
  "component---src-pages-past-work-js": hot(preferDefault(require("/Users/luis/coding_proyects/luisro.co/src/pages/pastWork.js"))),
  "component---src-pages-resume-jsx": hot(preferDefault(require("/Users/luis/coding_proyects/luisro.co/src/pages/resume.jsx"))),
  "component---src-pages-think-about-js": hot(preferDefault(require("/Users/luis/coding_proyects/luisro.co/src/pages/thinkAbout.js")))
}

