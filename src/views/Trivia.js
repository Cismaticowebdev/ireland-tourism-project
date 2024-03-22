import { useState } from "react";

function Trivia() {
  const triviaQuestions = [
    {
      question: "Ireland has a passage tomb older than the Pyramids of Giza",
      rightAnswer: "true",
      description:
        "Newgrange is a Stone Age (Neolithic) monument in the Boyne Valley, County Meath, it is the jewel in the crown of Ireland's Ancient East. Newgrange was constructed about 5,200 years ago (3,200 B.C.) which makes it older than Stonehenge and the Great Pyramids of Giza. The mound is ringed by 97 large kerbstones, some of which are engraved with symbols called megalithic art; the most striking is the entrance stone.",
    },
    {
      question: "Halloween began in Ireland",
      rightAnswer: "true",
      description:
        "The Halloween holiday has its roots in the ancient Celtic festival of Samhain (a Gaelic word pronounced “SAH-win”), a pagan religious celebration to welcome the harvest at the end of summer, when people would light bonfires and wear costumes to ward off ghosts.",
    },
    {
      question: "Ireland have more than 10 species of snakes",
      rightAnswer: "false",
      description:
        "As the glaciers retreated about 10,000 years ago, animals and plants were able to recolonise from mainland Europe, to which Britain was connected by a land bridge. The Irish Sea, though, proved too big an obstacle for the three British species of snake - grass snake, smooth snake and adder - that had made it to Britain, so Ireland remained snake-free. Another reptile did make it though, and is now Ireland's only reptile: the common lizard. Looks like they were a little quicker off the mark than the snakes....",
    },
    {
      question: "The Cliffs of Moher are the highest cliffs in Ireland",
      rightAnswer: "false",
      description:
        "It's no secret that the Cliffs of Moher are Ireland's leading tourist attraction but what many people do not know is the cliffs are not the tallest cliffs in the country. In fact, there are two others that are 3 times larger, the first being Crogahun Cliffs on Achill Island in County Mayo. These beauties soar up to 688 meters in height. The second highest cliff in the Country is Slieve League Cliffs, in County Donegal. They are not far off from Crogahun, reaching an impressive 609 meters.",
    },
    {
      question: "Saint Patrick was not Irish",
      rightAnswer: "true",
      description:
        "This is not a well-known fact across the world, but Saint Patrick was actually Welsh. When he was 16 he was kidnapped and brought to Ireland as a slave. After 6 years, he escaped and converted to Christianity. That is when he had the vision to return to Ireland on a mission to convert the people to Christianity. And while the original purpose of Paddy's Day was to commemorate his death, it is now seen as a celebration of Irish culture and heritage.",
    },
    {
      question: "The Titanic was built in Belfast",
      rightAnswer: "true",
      description:
        "The Titanic is a tragic story that touched many people across the world but what most don't know is the famous ship was built in Belfast Northern Ireland. The Harland and Wolff shipyard began to construct the ship on the 31st of March 1909, and it took over two years to complete. The ship was launched on the 31st of May 1911, but it wasn't short of skepticism from the general public. And sadly, they were right to be concerned. There is now a museum in Belfast which lies on the footprint of the Titanic Shipyard, their people can learn about the tragic incident and the making of the ship.",
    },
    {
      question: "St. Valentine is buried in Dublin",
      rightAnswer: "true",
      description:
        "Another one of the most interesting facts about Ireland has to do with the famous St. Valentine. Did you know that he was buried in Whitefriar Street Church in Dublin? Every year on the 14th of February he is moved to the main altar and masses are held in his honor. It is also common for couples to visit his shire to ask for his blessings on their relationship. Whether you are religious, or simply looking for fun and different things to do in Dublin, this is definitely something worth checking out.",
    },
    {
      question: "Ireland has less than 5,500 pubs",
      rightAnswer: "false",
      description:
        "Ireland has OVER 7,000 pubs. And they come in all different shapes and sizes - some can fit a party of people, while others fit a small handful of locals. And before you presume, drinking is not the only reason people visit the pubs in Ireland. It is a place to catch up with your neighbors, dance, sing songs and have a laugh. It rains a lot in Ireland, so having somewhere dry and warm to go is very much needed.",
    },
    {
      question: "Ireland is home to the largest city park in the world",
      rightAnswer: "false",
      description:
        "The Phoenix Park holds the record for being the largest enclosed city park in all of Europe. It covers over 1,700 acres! It is a lovely place to spend an evening, especially for those looking to get out of the hustle and bustle of the city. The park is also home to numerous walking and cycling trails, making it a popular spot for outdoor enthusiasts and nature lovers.",
    },
    {
      question: "You can see the Northern Lights in Ireland",
      rightAnswer: "true",
      description:
        "While Ireland is located relatively far south, it is not unheard of to be able to spot the Aurora Borealis during periods of high solar activity. You are more likely to see this light display in Counties Donegal and Sligo along the Wild Atlantic Way due to their location and dark sky reserves. But the Northern Lights have also been seen as far south as Cork and Kerry, although this is quite an unusual occurrence.",
    },
    {
      question: "Ireland is home to Europe's oldest lighthouse",
      rightAnswer: "true",
      description:
        "Ireland is home to the oldest operational lighthouse in Europe, Hook, in County Wexford. The light has been in operation for more than 800 years, dating back to the 18th century. It stands at 36 meters tall and offers panoramic sea views of the Irish coastline.",
    },
    {
      question: "There are only 5 cities in Ireland",
      rightAnswer: "true",
      description:
        "Dublin: The capital and the largest city, Dublin is a hub of art, history and nightlife, famous for its literary history and the iconic Guinness Storehouse. Cork: Known as the “Rebel City,” Cork is rich in culture and maritime history, with attractions like the English Market and Blarney Castle. Limerick: Home to the historic King John's Castle and St Mary's Cathedral, Limerick is a city steeped in rich culture and medieval heritage. Galway: A harbor city on Ireland's west coast, Galway is renowned for its vibrant lifestyle and numerous festivals, such as the Galway International Arts Festival. Waterford: The oldest city in Ireland, Waterford is famous for the exquisite craftsmanship of Waterford Crystal and its Viking history.",
    },
  ];

  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [userChoice, setUserChoice] = useState("");
  function handleStart() {
    setCurrentQuestion(triviaQuestions[0]);
    setGameStarted(true);
  }

  function handleOption(option) {
    setUserChoice(option);
  }

  function handleNextQuestion() {
    shuffleArray(triviaQuestions);
    setCurrentQuestion(triviaQuestions[0]);
    setUserChoice("");
  }

  // This is the Fisher-Yates shuffle algorithm to randomize the array positions
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="trivia">
      <h2 className="trivia-title">
        Learn some interesting facts about Ireland playing this minigame!
      </h2>

      {!gameStarted && (
        <button className="trivia-button" onClick={handleStart}>
          Start
        </button>
      )}

      {gameStarted && (
        <section className="trivia-section">
          <h3 className="trivia-question">{currentQuestion.question}</h3>
          <div className="trivia-button-div">
            <button
              className="trivia-button"
              onClick={() => handleOption("true")}
              disabled={userChoice.length !== 0}
            >
              True
            </button>
            <button
              className="trivia-button"
              onClick={() => handleOption("false")}
              disabled={userChoice.length !== 0}
            >
              False
            </button>
          </div>

          {userChoice && (
            <section className="trivia-answer">
              {userChoice === currentQuestion.rightAnswer ? (
                <p>You are right!</p>
              ) : (
                <p>You are wrong!</p>
              )}
              <p className="trivia-description">
                {currentQuestion.description}
              </p>
              <button className="trivia-button" onClick={handleNextQuestion}>
                Next question
              </button>
            </section>
          )}
        </section>
      )}
    </div>
  );
}

export default Trivia;
