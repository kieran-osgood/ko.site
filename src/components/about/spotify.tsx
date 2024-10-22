import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { useEffect } from "react";

const clientId = "";
const clientSecret = "";

type SpotifyProps = {};
export default function Spotify(props: SpotifyProps) {
  useEffect(() => {
    (async () => {
      const sdk = SpotifyApi.withUserAuthorization(
        clientId,
        "https://localhost:4321/about",
        ["user-read-recently-played"],
      );
      const a = await sdk.player.getCurrentlyPlayingTrack();
    })();
  }, []);

  if (!props.track) return null;

  const {
    track: { name, artists, external_urls },
  } = props;

  return (
    <>
      <div className="flex justify-between ">
        <div className="text-primary-text pt-8">
          <h2 className="text-xs text-secondary-text">I'm listening to...</h2>

          <p className="font-bold text-sm pt-8">{name}</p>
          <p className="text-sm">-&nbsp;{artists[0]?.name}</p>
        </div>
        {/* <SpotifyIcon className="mt-8" /> */}
      </div>
      <div className="max-w-xl pt-8">
        <a
          href={external_urls.spotify}
          className="text-xs text-secondary-text underline relative block truncate"
          target="_blank"
          rel="noreferrer"
        >
          Listen with me!
        </a>
      </div>
    </>
  );
}
