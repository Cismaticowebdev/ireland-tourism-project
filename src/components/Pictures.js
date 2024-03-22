import giantCauseway from "../images/giant-causeway.jpg";
import cliffsOfMoher from "../images/cliffs-of-moher.jpg";
import guinessStorehouse from "../images/guiness-storehouse.jpg";
import glendalough from "../images/glendalough.jpg";
import rockOfCashel from "../images/rock-of-cashel.jpg";
import killarneyNationalPark from "../images/killarney-national-park.jpg";
import PictureCard from "./PictureCard";

function Pictures() {
  const photos = [
    {
      id: 1,
      name: "Giant's Causeway",
      path: giantCauseway,
      alt: "Giant's Causeway",
      description:
        "Area of about 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption. It is located in County Antrim on the north coast of Northern Ireland, about three miles (4.8 km) northeast of the town of Bushmills.",
    },
    {
      id: 2,
      name: "Cliffs of Moher",
      path: cliffsOfMoher,
      alt: "Cliffs of Moher",
      description:
        "Sea cliffs located at the southwestern edge of the Burren region in County Clare, Ireland. They run for about 14 kilometres (9 miles). The cliffs rank among the most visited tourist sites in Ireland, with around 1.5 million visits per year.",
    },
    {
      id: 3,
      name: "Guiness Storehouse",
      path: guinessStorehouse,
      alt: "Guiness Storehouse gate",
      description:
        "Guinness Storehouse is a tourist attraction at St. James's Gate Brewery in Dublin, Ireland. Since opening in 2000, it has received over twenty million visitors. The Storehouse covers seven floors surrounding a glass atrium shaped in the form of a pint of Guinness.",
    },
    {
      id: 4,
      name: "Glendalough",
      path: glendalough,
      alt: "Glendalough",
      description:
        "Glacial valley in County Wicklow, Ireland, renowned for an Early Medieval monastic settlement founded in the 6th century by St Kevin. From 1825 to 1957, the head of the Glendalough Valley was the site of a galena lead mine. Glendalough is also a recreational area for picnics, for walking along networks of maintained trails of varying difficulty, and also for rock climbing.",
    },
    {
      id: 5,
      name: "Rock of Cashel",
      path: rockOfCashel,
      alt: "Rock of Cashel",
      description:
        "The Rock of Cashel, also known as Cashel of the Kings and St. Patrick's Rock, is a historical site located at Cashel, County Tipperary, Ireland. According to local legends, the Rock of Cashel originated in the Devil's Bit, a mountain 20 miles (30 km) north of Cashel when St. Patrick banished Satan from a cave, resulting in the Rock's landing in Cashel.",
    },
    {
      id: 6,
      name: "Killarney National Park",
      path: killarneyNationalPark,
      alt: "A waterfall in Killarney National Park",
      description:
        "Near the town of Killarney, County Kerry, was the first national park in Ireland, created when the Muckross Estate was donated to the Irish Free State in 1932. The park is of high ecological value because of the quality, diversity, and extensiveness of many of its habitats and the wide variety of species that they accommodate",
    },
  ];

  return (
    <div className="pictures">
      {photos.map((photo) => (
        <PictureCard
          key={photo.id}
          name={photo.name}
          path={photo.path}
          description={photo.description}
          alt={photo.alt}
        />
      ))}
    </div>
  );
}

export default Pictures;
