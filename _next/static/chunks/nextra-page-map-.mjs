import meta from "../../../pages/_meta.js";
import docs_meta from "../../../pages/docs/_meta.js";
import docs_api_reference_meta from "../../../pages/docs/api-reference/_meta.js";
import docs_getting_started_meta from "../../../pages/docs/getting-started/_meta.js";
import docs_getting_started_installation_meta from "../../../pages/docs/getting-started/installation/_meta.js";
import docs_user_guide_meta from "../../../pages/docs/user-guide/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "docs",
  route: "/docs",
  children: [{
    data: docs_meta
  }, {
    name: "api-reference",
    route: "/docs/api-reference",
    children: [{
      data: docs_api_reference_meta
    }, {
      name: "v1alpha1",
      route: "/docs/api-reference/v1alpha1",
      frontMatter: {
        "sidebarTitle": "V1alpha1"
      }
    }]
  }, {
    name: "copyright",
    route: "/docs/copyright",
    frontMatter: {
      "sidebarTitle": "Copyright"
    }
  }, {
    name: "getting-started",
    route: "/docs/getting-started",
    children: [{
      data: docs_getting_started_meta
    }, {
      name: "architecture",
      route: "/docs/getting-started/architecture",
      frontMatter: {
        "sidebarTitle": "Architecture"
      }
    }, {
      name: "installation",
      route: "/docs/getting-started/installation",
      children: [{
        data: docs_getting_started_installation_meta
      }, {
        name: "helm",
        route: "/docs/getting-started/installation/helm",
        frontMatter: {
          "sidebarTitle": "Helm"
        }
      }]
    }, {
      name: "installation",
      route: "/docs/getting-started/installation",
      frontMatter: {
        "sidebarTitle": "Installation"
      }
    }, {
      name: "introduction",
      route: "/docs/getting-started/introduction",
      frontMatter: {
        "sidebarTitle": "Introduction"
      }
    }]
  }, {
    name: "index",
    route: "/docs",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "user-guide",
    route: "/docs/user-guide",
    children: [{
      data: docs_user_guide_meta
    }, {
      name: "agents",
      route: "/docs/user-guide/agents",
      frontMatter: {
        "sidebarTitle": "Agents"
      }
    }, {
      name: "concepts",
      route: "/docs/user-guide/concepts",
      frontMatter: {
        "sidebarTitle": "Concepts"
      }
    }, {
      name: "kafka-basics",
      route: "/docs/user-guide/kafka-basics",
      frontMatter: {
        "sidebarTitle": "Kafka Basics"
      }
    }, {
      name: "scheduler",
      route: "/docs/user-guide/scheduler",
      frontMatter: {
        "sidebarTitle": "Scheduler"
      }
    }]
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Kaspr – Event Streaming for Kubernetes"
  }
}];