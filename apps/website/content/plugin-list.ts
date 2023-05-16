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

import { Feature } from 'ui/types';

export const PLUGINS_LIST: Feature[] = [
  {
    title: '3scale',
    icon: '/images/plugins/3scale.svg',
    description: 'Need description',
    href: '/plugins/3scale',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/3scale-backend/README.md',
    npmUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-3scale-backend',
  },
  {
    title: 'Authentication and Authorization with Keycloak',
    icon: '/images/plugins/keycloak.svg',
    description:
      'Load users and groups from Keycloak, enabling use of multiple authentication providers to be applied to Backstage entities.',
    href: '/plugins/keycloak',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/keycloak-backend/README.md',
    npmUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-keycloak-backend',
  },
  {
    title: 'Container Image Registry for ACR',
    icon: '/images/plugins/oci-acr.svg',
    description: 'View container image details from ACR in Backstage.',
    href: '/plugins/acr',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/openshift-image-registry/README.md',
    npmUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-openshift-image-registry',
  },
  {
    title: 'Container Image Registry for JFrog Artifactory',
    icon: '/images/plugins/oci-jfrog.svg',
    description: 'View container image details from Quay in Backstage.',
    href: '/plugins/jfrog-artifactory',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/jfrog-artifactory/README.md',
    npmUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-jfrog-artifactory',
  },
  {
    title: 'Container Image Registry for Quay',
    icon: '/images/plugins/oci-quay.svg',
    description: 'View container image details from Quay in Backstage.',
    href: '/plugins/quay',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/quay/README.md',
    npmUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-quay',
  },
  {
    title: 'Multi Cluster View with OCM',
    icon: '/images/plugins/ocm.svg',
    description: "View clusters from OCM's MultiClusterHub and MultiCluster Engine in Backstage.",
    href: '/plugins/ocm',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/ocm/README.md',
    npmUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-ocm',
  },
  {
    title: 'Application Topology for Kubernetes',
    icon: '/images/plugins/topology.svg',
    description:
      'Visualize the deployment status and related resources of your applications deployed on any Kubernetes cluster.',
    href: '/plugins/topology',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/topology/README.md',
    npmUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-topology',
  },
  {
    title: 'Pipelines with Tekton',
    icon: '/images/plugins/tekton.svg',
    description: 'Easily view Tekton PipelineRun status for your services in Backstage.',
    href: '/plugins/tekton',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/backstage-plugins/main/plugins/tekton/README.md',
    npmUrl: 'https://www.npmjs.com/package/@janus-idp/backstage-plugin-tekton',
  },
];
