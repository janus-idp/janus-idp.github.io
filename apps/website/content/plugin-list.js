/**
 * Copyright 2023 Janus Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @type {import('ui/types').Plugin[]} */
const PLUGINS_LIST = [
  {
    title: '3scale',
    icon: '/images/plugins/3scale.svg',
    description: 'Synchronize 3scale content into the Backstage catalog.',
    href: '/plugins/3scale',
    docUrl: 'https://github.com/janus-idp/backstage-plugins/tree/main/plugins/3scale-backend',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/3scale-backend',
    sourceUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-3scale-backend',
    category: 'Backend',
  },
  {
    title: 'Authentication and Authorization with Keycloak',
    icon: '/images/plugins/keycloak.svg',
    description:
      'Load users and groups from Keycloak, enabling use of multiple authentication providers to be applied to Backstage entities.',
    href: '/plugins/keycloak',
    docUrl: 'https://github.com/janus-idp/backstage-plugins/tree/main/plugins/keycloak-backend',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/keycloak-backend',
    sourceUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-keycloak-backend',
    category: 'Backend',
  },
  {
    title: 'Container Image Registry for ACR',
    icon: '/images/plugins/oci-acr.svg',
    description: 'View container image details from ACR in Backstage.',
    href: '/plugins/acr',
    docUrl: 'https://github.com/janus-idp/backstage-plugins/tree/main/plugins/acr',
    rawDocUrl: 'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/acr',
    sourceUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-acr',
    category: 'Frontend',
  },
  {
    title: 'Container Image Registry for JFrog Artifactory',
    icon: '/images/plugins/jfrog-artifactory.svg',
    description: 'View container image details from JFrog in Backstage.',
    href: '/plugins/jfrog-artifactory',
    docUrl: 'https://github.com/janus-idp/backstage-plugins/tree/main/plugins/jfrog-artifactory',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/jfrog-artifactory',
    sourceUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-jfrog-artifactory',
    category: 'Frontend',
  },
  {
    title: 'Container Image Registry for Quay',
    icon: '/images/plugins/quay.svg',
    description: 'View container image details from Quay in Backstage.',
    href: '/plugins/quay',
    docUrl: 'https://github.com/janus-idp/backstage-plugins/tree/main/plugins/quay',
    rawDocUrl: 'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/quay',
    sourceUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-quay',
    category: 'Frontend',
  },
  {
    title: 'Multi Cluster View with OCM',
    icon: '/images/plugins/ocm.svg',
    description: "View clusters from OCM's MultiClusterHub and MultiCluster Engine in Backstage.",
    href: '/plugins/ocm',
    docUrl: 'https://github.com/janus-idp/backstage-plugins/tree/main/plugins/ocm',
    rawDocUrl: 'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/ocm',
    sourceUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-ocm',
    category: 'Frontend',
  },
  {
    title: 'Application Topology for Kubernetes',
    icon: '/images/plugins/topology.svg',
    description:
      'Visualize the deployment status and related resources of your applications deployed on any Kubernetes cluster.',
    href: '/plugins/topology',
    docUrl: 'https://github.com/janus-idp/backstage-plugins/tree/main/plugins/topology',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/topology',
    sourceUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-topology',
    category: 'Frontend',
  },
  {
    title: 'Kiali Service Mesh',
    icon: '/images/plugins/kiali.svg',
    description: 'Configure, visualize, validate and troubleshoot your mesh',
    href: '/plugins/kiali',
    docUrl: 'https://github.com/janus-idp/backstage-plugins/tree/main/plugins/kiali',
    rawDocUrl: 'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/kiali',
    sourceUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-kiali',
    category: 'Frontend',
  },
  {
    title: 'Pipelines with Tekton',
    icon: '/images/plugins/tekton.svg',
    description: 'Easily view Tekton PipelineRun status for your services in Backstage.',
    href: '/plugins/tekton',
    docUrl: 'https://github.com/janus-idp/backstage-plugins/tree/main/plugins/tekton',
    rawDocUrl: 'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/tekton',
    sourceUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-tekton',
    category: 'Frontend',
  },
];

module.exports = { PLUGINS_LIST };
