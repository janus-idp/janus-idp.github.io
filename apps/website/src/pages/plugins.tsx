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

import { useEffect } from 'react';

export default function Plugins(): JSX.Element {
  useEffect(() => {
    // Redirect to the janus sunset update blog post with plugin migrations section
    window.location.href = '/blog/2025/06/24/janus-sunset-update#plugin-migrations';
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Redirecting...</h1>
      <p>
        Plugin information has moved. You will be redirected to the{' '}
        <a href="/blog/2025/06/24/janus-sunset-update#plugin-migrations">
          Janus Sunset Update - Plugin Migrations
        </a>{' '}
        page.
      </p>
    </div>
  );
}
