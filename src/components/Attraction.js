function Attraction({ name, region, city, url }) {
  return (
    <section className="attraction">
      <p>Name: {name}</p>
      <p>Region: {region}</p>
      <p>City: {city}</p>
      {url && (
        <p>
          Website:
          <a
            className="attraction-link"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {url}
          </a>
        </p>
      )}
      {!url && <p>Website: Not available</p>}
    </section>
  );
}

export default Attraction;
