/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
//
interface ImportMetaEnv {
  readonly SPOTIFY_AUTHORIZATION: string;
  readonly REFRESH_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
