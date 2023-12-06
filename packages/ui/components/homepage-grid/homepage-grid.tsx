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

import { Homepage } from '../../types';

type HomepageTileProps = Homepage;

function HomepageTile({ icon, title, description }: HomepageTileProps): JSX.Element {
  return (
    <div>
      <div className="text--center">
        <img className="h-[200px] w-[200px]" src={icon} alt={`${title} icon`} />
      </div>
      <div className="text-center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

type HomepageFeaturesProps = {
  homepageList: Homepage[];
};

export function HomepageGrid({ homepageList }: HomepageFeaturesProps): JSX.Element {
  return (
    <section className="container flex items-center px-0 py-8">
      <div className="grid grid-cols-3 gap-4">
        {homepageList.map((plugin) => (
          <HomepageTile key={plugin.title} {...plugin} />
        ))}
      </div>
    </section>
  );
}
