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

/** @type {import('ui/types').GPT[]} */
const GPT_LIST = [
  {
    title: 'Ansible Job',
    description: 'Launch an Ansible Job within Ansible Automation Platform',
    href: 'gpts/ansible-job',
    docUrl:
      'https://github.com/janus-idp/software-templates/tree/main/templates/github/launch-ansible-job',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/templates/github/launch-ansible-job',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/templates/github/launch-ansible-job',
  },
  {
    title: 'Add ArgoCD to an existing project',
    description: 'Add ArgoCD to an existing project',
    href: 'gpts/argocd',
    docUrl: 'https://github.com/janus-idp/software-templates/tree/main/templates/github/argocd',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/templates/github/argocd',
    sourceUrl: 'https://github.com/janus-idp/software-templates/tree/main/templates/github/argocd',
  },
  {
    title: '.NET Frontend application',
    description: 'Create a starter .NET frontend application with a CI pipeline',
    href: 'gpts/dotnet-frontend',
    docUrl:
      'https://github.com/janus-idp/software-templates/tree/main/templates/github/dotnet-frontend',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/templates/github/dotnet-frontend',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/templates/github/dotnet-frontend',
  },
  {
    title: 'Go Backend application',
    description: 'Create a starter Go backend application with a CI pipeline',
    href: 'gpts/go-backend',
    docUrl: 'https://github.com/janus-idp/software-templates/tree/main/templates/github/go-backend',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/templates/github/go-backend',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/templates/github/go-backend',
  },
  {
    title: 'Node.js Backend application',
    description: 'Create a starter Node.js backend application with a CI pipeline',
    href: 'gpts/nodejs-backend',
    docUrl:
      'https://github.com/janus-idp/software-templates/tree/main/templates/github/nodejs-backend',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/templates/github/nodejs-backend',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/templates/github/nodejs-backend',
  },
  {
    title: 'Python Backend application',
    description: 'Create a starter Python backend application with a CI pipeline',
    href: 'gpts/python-backend',
    docUrl:
      'https://github.com/janus-idp/software-templates/tree/main/templates/gitlab/python-backend',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/templates/gitlab/python-backend',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/templates/gitlab/python-backend',
  },
  {
    title: 'Quarkus Backend application',
    description: 'Create a starter Quarkus Backend application with a CI pipeline',
    href: `gpts/quarkus-backend`,
    docUrl: '',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/templates/github/quarkus-backend',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/templates/github/quarkus-backend',
  },
  {
    title: 'Spring Boot Backend application',
    description: 'Create a starter Spring Boot backend application with a CI pipeline',
    href: 'gpts/spring-boot-backend',
    docUrl:
      'https://github.com/janus-idp/software-templates/tree/main/templates/github/quarkus-web',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/templates/github/spring-boot-backend',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/templates/github/spring-boot-backend',
  },
];

module.exports = { GPT_LIST };
