import meta from "../../../pages/_meta.js";
import api_reference_meta from "../../../pages/api-reference/_meta.js";
import getting_started_meta from "../../../pages/getting-started/_meta.js";
import getting_started_installation_meta from "../../../pages/getting-started/installation/_meta.js";
import user_guide_meta from "../../../pages/user-guide/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "api-reference",
  route: "/api-reference",
  children: [{
    data: api_reference_meta
  }, {
    name: "v1alpha1",
    route: "/api-reference/v1alpha1",
    frontMatter: {
      "sidebarTitle": "V1alpha1"
    }
  }]
}, {
  name: "contact",
  route: "/contact",
  frontMatter: {
    "sidebarTitle": "Contact"
  }
}, {
  name: "copyright",
  route: "/copyright",
  frontMatter: {
    "sidebarTitle": "Copyright"
  }
}, {
  name: "getting-started",
  route: "/getting-started",
  children: [{
    data: getting_started_meta
  }, {
    name: "architecture",
    route: "/getting-started/architecture",
    frontMatter: {
      "sidebarTitle": "Architecture"
    }
  }, {
    name: "compatibility",
    route: "/getting-started/compatibility",
    frontMatter: {
      "sidebarTitle": "Compatibility"
    }
  }, {
    name: "installation",
    route: "/getting-started/installation",
    children: [{
      data: getting_started_installation_meta
    }, {
      name: "helm",
      route: "/getting-started/installation/helm",
      frontMatter: {
        "sidebarTitle": "Helm"
      }
    }, {
      name: "yaml",
      route: "/getting-started/installation/yaml",
      frontMatter: {
        "sidebarTitle": "Yaml"
      }
    }]
  }, {
    name: "introduction",
    route: "/getting-started/introduction",
    frontMatter: {
      "sidebarTitle": "Introduction"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "user-guide",
  route: "/user-guide",
  children: [{
    data: user_guide_meta
  }, {
    name: "agents",
    route: "/user-guide/agents",
    frontMatter: {
      "sidebarTitle": "Agents"
    }
  }, {
    name: "concepts",
    route: "/user-guide/concepts",
    frontMatter: {
      "sidebarTitle": "Concepts"
    }
  }, {
    name: "kafka-basics",
    route: "/user-guide/kafka-basics",
    frontMatter: {
      "sidebarTitle": "Kafka Basics"
    }
  }]
}];