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
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/ansible-job',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/ansible-job',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/ansible-job',
  },
  {
    title: 'Add ArgoCD to an existing project',
    description: 'Add ArgoCD to an existing project',
    href: 'gpts/argocd',
    docUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/argocd-template',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/argocd-template',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/argocd-template',
  },
  {
    title: '.NET Frontend application',
    description: 'Create a starter .NET frontend application with a CI pipeline',
    href: 'gpts/dotnet-frontend',
    docUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/dotnet-frontend-template',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/dotnet-frontend-template',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/dotnet-frontend-template',
  },
  {
    title: 'Go Backend application',
    description: 'Create a starter Go backend application with a CI pipeline',
    href: 'gpts/go-backend',
    docUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/go-backend-template',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/go-backend-template',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/go-backend-template',
  },
  {
    title: 'Node.js Backend application',
    description: 'Create a starter Node.js backend application with a CI pipeline',
    href: 'gpts/nodejs-backend',
    docUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/nodejs-backend-template',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/nodejs-backend-template',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/nodejs-backend-template',
  },
  {
    title: 'Python Backend application',
    description: 'Create a starter Python backend application with a CI pipeline',
    href: 'gpts/python-backend',
    docUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/python-backend-template',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/python-backend-template',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/python-backend-template',
  },
  {
    title: 'Quarkus Backend application',
    description: 'Create a starter Quarkus Backend application with a CI pipeline',
    href: `gpts/quarkus-backend`,
    docUrl: '',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/quarkus-backend-template',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/quarkus-backend-template',
  },
  {
    title: 'Spring Boot Backend application',
    description: 'Create a starter Spring Boot backend application with a CI pipeline',
    href: 'gpts/spring-boot-backend',
    docUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/quarkus-web-template',
    rawDocUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/spring-boot-backend-template',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/spring-boot-backend-template',
  },
];

module.exports = { GPT_LIST };
