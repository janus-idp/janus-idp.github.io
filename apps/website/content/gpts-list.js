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
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/ansible-job/README.md',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/ansible-job',
  },
  {
    title: 'Add ArgoCD to an existing project',
    description: 'Add ArgoCD to an existing project',
    href: 'gpts/argocd',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/argocd-template/README.md',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/argocd-template',
  },
  {
    title: '.NET Frontend application',
    description: 'Create a starter .NET frontend application with a CI pipeline',
    href: 'gpts/dotnet-frontend',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/dotnet-frontend-template/README.md',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/dotnet-frontend-template',
  },
  {
    title: 'Go Backend application',
    description: 'Create a starter Go backend application with a CI pipeline',
    href: 'gpts/go-backend',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/go-backend-template/README.md',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/go-backend-template',
  },
  {
    title: 'Node.js Backend application',
    description: 'Create a starter Node.js backend application with a CI pipeline',
    href: 'gpts/nodejs-backend',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/nodejs-backend-template/README.md',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/nodejs-backend-template',
  },
  {
    title: 'Python Backend application',
    description: 'Create a starter Python backend application with a CI pipeline',
    href: 'gpts/python-backend',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/python-backend-template/README.md',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/python-backend-template',
  },
  {
    title: 'Quarkus Backend application',
    description: 'Create a starter Quarkus Backend application with a CI pipeline',
    href: `gpts/quarkus-backend`,
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/quarkus-backend-template/README.md',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/quarkus-backend-template',
  },
  {
    title: 'Spring Boot Backend application',
    description: 'Create a starter Spring Boot backend application with a CI pipeline',
    href: 'gpts/spring-boot-backend',
    githubUrl:
      'https://raw.githubusercontent.com/janus-idp/software-templates/main/scaffolder-templates/spring-boot-backend-template/README.md',
    sourceUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/spring-boot-backend-template',
  },
];

module.exports = { GPT_LIST };
