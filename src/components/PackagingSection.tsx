
import { packagingPhotos, productVideos } from "../lib/storefront";
import Image from "next/image";

export default function PackagingSection() {
  return (
    <section
      className="packaging section-pad"
      id="packaging"
    >
      <div className="packaging-heading">
        <div>
          <p className="eyebrow" style={{ fontSize: "15px", fontWeight: 700 }}>
            THE DETAILS MATTER
          </p>

          <h2>
            Made to
            <br />
            <em>be held.</em>
          </h2>
        </div>

        <p>
          A thick glass bottle, a borosilicate glass dropper, a soft
          leak-proof bulb and a gold collar. 30 ml of serum, finished
          the way a luxury serum should be.
        </p>
      </div>

      <div className="photo-grid">
        {packagingPhotos.map((photo) => (
          <figure
            className={`photo-card ${photo.className}`}
            key={photo.src}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
            />

            <figcaption>
              <span>{photo.number}</span> {photo.title}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="video-grid" id="ritual">
        {productVideos.map((video) => (
          <figure
            className="video-card"
            key={video.src}
          >
            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={video.poster}
              aria-label={video.alt}
            >
              <source
                src={video.src}
                type="video/mp4"
              />
            </video>

            <figcaption>{video.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
