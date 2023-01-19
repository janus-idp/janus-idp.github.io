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

export function SlackLogo(): JSX.Element {
  return (
    <svg className="h-5 w-auto fill-none" viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M94.12 283.1C94.12 309 72.96 330.16 47.06 330.16C21.16 330.16 0 309 0 283.1C0 257.2 21.16 236.04 47.06 236.04H94.12V283.1ZM117.84 283.1C117.84 257.2 139 236.04 164.9 236.04C190.8 236.04 211.96 257.2 211.96 283.1V400.94C211.96 426.84 190.8 448 164.9 448C139 448 117.84 426.84 117.84 400.94V283.1ZM164.9 94.12C139 94.12 117.84 72.96 117.84 47.06C117.84 21.16 139 0 164.9 0C190.8 0 211.96 21.16 211.96 47.06V94.12H164.9ZM164.9 117.84C190.8 117.84 211.96 139 211.96 164.9C211.96 190.8 190.8 211.96 164.9 211.96H47.06C21.16 211.96 0 190.8 0 164.9C0 139 21.16 117.84 47.06 117.84H164.9ZM353.88 164.9C353.88 139 375.04 117.84 400.94 117.84C426.84 117.84 448 139 448 164.9C448 190.8 426.84 211.96 400.94 211.96H353.88V164.9ZM330.16 164.9C330.16 190.8 309 211.96 283.1 211.96C257.2 211.96 236.04 190.8 236.04 164.9V47.06C236.04 21.16 257.2 0 283.1 0C309 0 330.16 21.16 330.16 47.06V164.9ZM283.1 353.88C309 353.88 330.16 375.04 330.16 400.94C330.16 426.84 309 448 283.1 448C257.2 448 236.04 426.84 236.04 400.94V353.88H283.1ZM283.1 330.16C257.2 330.16 236.04 309 236.04 283.1C236.04 257.2 257.2 236.04 283.1 236.04H400.94C426.84 236.04 448 257.2 448 283.1C448 309 426.84 330.16 400.94 330.16H283.1Z"
        className="fill-black dark:fill-white"
      />
    </svg>
  );
}
