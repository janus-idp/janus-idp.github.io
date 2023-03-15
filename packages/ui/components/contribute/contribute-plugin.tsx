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

import Link from 'next/link';
import { SocialLink } from '../social/social';

type ContributePluginProps = {
  repoHref?: string;
};

export function ContributePlugin(props: ContributePluginProps): JSX.Element {
  const { repoHref } = props;

  return (
    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
      {repoHref && (
        <span>
          To contribute to this plugin, report issues, or provide feedback, visit the plugin&apos;s{' '}
          <Link href={repoHref} className="text-nextra-blue">
            repository
          </Link>
          .
        </span>
      )}{' '}
      To learn more about other Backstage plugins in the Janus community, visit the janus plugin{' '}
      <Link href="https://github.com/janus-idp/backstage-plugins" className="text-nextra-blue">
        repository
      </Link>{' '}
      or join us on the <SocialLink social="slack" text="janus-idp" /> Slack!
    </p>
  );
}
