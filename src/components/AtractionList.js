import Attraction from "./Attraction";

function AttractionList({ attractions }) {
  return (
    <section className="attraction-list">
      {attractions.results &&
        attractions.results.map((attraction, index) => {
          return (
            <Attraction
              key={index}
              name={attraction.name}
              region={attraction.address.addressRegion}
              city={attraction.address.addressLocality}
              url={attraction.url}
            />
          );
        })}
    </section>
  );
}

export default AttractionList;
