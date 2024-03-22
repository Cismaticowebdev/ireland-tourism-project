import irelandMap from "../images/ireland-map.jpg";

function Home() {
  return (
    <section className="home">
      <h1>DISCOVER THE BEST PLACES TO VISIT ON THE EMERALD ISLE!</h1>
      <img src={irelandMap} alt="Ireland's map" />
      <p className="home-p">
        The Isle of Ireland, encompassing both the Republic of Ireland and
        Northern Ireland, is widely favored by travelers. Brimming with renowned
        landmarks like the Cliffs of Moher, it boasts numerous attributes that
        render it a perfect vacation spot. This picturesque destination offers
        excellent opportunities for hiking, castle exploration, indulging in
        seafood delicacies, and enjoying fine whiskey. In addition to its
        vibrant urban centers, visitors can immerse themselves in the
        breathtaking natural marvels and charming rural communities that dot the
        countryside.
      </p>
    </section>
  );
}

export default Home;
