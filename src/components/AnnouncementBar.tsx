
export default function AnnouncementBar() {
  const message = (
    <>
      A little glow goes a long way <strong className="announcement-brand">YAASHAB_COSMTICS</strong> Discover your new daily ritual
    </>
  );

  return (
    <div className="announcement" aria-label="A little glow goes a long way. Yaashab Cosmetics. Discover your new daily ritual.">
      <div className="announcement-track">
        {[false, true].map((isDuplicate) => (
          <div className="announcement-set" aria-hidden={isDuplicate || undefined} key={String(isDuplicate)}>
            {[0, 1, 2].map((copy) => (
              <span className="announcement-copy" key={copy}>{message}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
