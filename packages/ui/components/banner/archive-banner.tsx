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

export default function ArchiveBanner(): JSX.Element {
  return (
    <div className="m-2 bg-red-200 p-4 text-center text-red-900">
      As of July 1, 2024, all Janus IDP blogs have been archived and will no longer be updated. Some
      information in these posts may be outdated and may not work as described.
    </div>
  );
}
