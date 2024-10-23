import type { z } from "astro/zod";
import type { TrackSchema } from "src/pages/api/spotify";

type SpotifyProps = {
  track: z.infer<typeof TrackSchema>;
};

export default function Spotify(props: SpotifyProps) {
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
