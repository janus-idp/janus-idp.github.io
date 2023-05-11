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

import Link from '@docusaurus/Link';
import React, { memo, type ComponentProps } from 'react';
import { EnvironmentContext } from 'ui/contexts';

const LinkWrapper = memo((props: ComponentProps<'a'>) => {
  const { href, ...rest } = props;

  return <Link {...rest} to={href} />;
});

export function EnvironmentProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <EnvironmentContext.Provider
      // LinkWrapper has been memoized to avoid unnecessary re-renders
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        Link: LinkWrapper,
      }}
    >
      {children}
    </EnvironmentContext.Provider>
  );
}
