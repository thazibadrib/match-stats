const axios = require("axios");
const matches = [
  {
    title: "UFC 100: Lesnar vs Mir",
    imageUrl:
      "https://images.tapology.com/poster_images/16/profile/UFC_100_Poster.jpg?1301950210",
    description: `Lesnar, who made his fame as a WWE superstar, decided to transition to MMA in 2008, and
    after just one fight was signed by the UFC. It was an unprecedented move, but Lesnar wanted to
    fight at the highest level of the sport from the outset, and he was granted his wish when he was
    booked against former Heavyweight champion Mir in his promotional debut at UFC 81 in
    February 2008.
    He started strong by taking Mir down and pounding on him with strikes, but then an illegal blow
    caused the referee to restart the action, giving Mir the opportunity to grab ahold of Lesnar&#39;s leg
    and finish his inexperienced foe by first-round submission. To say the rematch went differently
    would be an understatement.
    The second Lesnar vs. Mir fight was booked to headline the historic UFC 100 event, but it wasn&#39;t
    much of a fight. Lesnar displayed his massive improvements, smashing Mir for nearly every
    second of the fight until he trapped him in the corner of the cage then used his 4XL sized gloves
    to pound Mir&#39;s face into a bloody mess then put him unconscious in freighting fashion for the
    second-round knockout.`,
  },
  {
    title: "The Ultimate Fighter 1 Finale",
    imageUrl: "The Ultimate Fighter 1 Finale(img",
    description: `Soon the battle took on its own rhythm. One man wading in with looping punches while the
  other hung back, waiting to counter. Then the messy struggle in close, knees and short uppercuts
  from the clinch, each man searching for the other’s breaking point.
  In the second is where it really got messy, thanks to a cut around Griffin’s eye. Soon the blood
  was flowing and the pace only seemed to increase, as if just the sight of the blood jacked up both
  men’s intensity.
  But as the fighters tired at a more or less identical rate, that’s when the fight began to feel more
  desperate, more urgent. Each man seemed like he could barely stand, or like he might be one
  more good shot away from being planted on the mat for good. And yet each time that shot came,
  he weathered it, absorbed it, and fired back with one of his own. It didn’t seem like it could
  possibly last, but somehow also felt like it might never end.
  It was this quality, more than any other, that most effectively served the UFC’s purposes at the
  time. As UFC and Spike TV executives would later recall, it was a battle made for TV ratings, as
  people seemed to be reaching out to friends mid-fight, telling them to turn on their TVs and look
  at this crazy, bloody mess.
  By the end, picking a winner was almost like flipping a coin. Buffer got on the mic and informed
  fans that they had just witnessed “three rounds of the greatest action seen inside the octagon in
  the history of the UFC.” Already the legend was building.
  The judges went unanimously for Griffin, who could only smile in mild surprise as he raised his
  arms.`,
  },
  {
    title: "UFC 1: The Beginning",
    imageUrl:
      "https://images.tapology.com/poster_images/120/profile/ufc1.jpg?1551290043",
    description: `UFC 1 was co-created by Rorion Gracie and the Torrance-based UFC promoter Art Davie, who decided to take locally famous Gracie Garage Challenge fights versus California's martial artists to a new level, televised nationally, with the opponents picked internationally. 
  They did not come up with a 16-man tournament, as the big-name martial artists, mainly kickboxers, namely Dennis Alexio, Benny Urquidez, Stan Longinidis, Jean-Yves Thériault, Rick Roufus, Stan Longinidis, Maurice Smith, Bart Vale, Hee Il Cho, George Dillman, Gene LeBell, Rob Kaman, Peter Aerts, Ernesto Hoost, Masaaki Satake, were among the others "publicly invited" by Art Davie, but had shown no interest in participating. Davie placed ads in martial arts magazines to recruit fighters. He found less than a dozen who answered the call. The promoters came up with an eight-man tournament format, with the winner receiving $50,000. The tournament featured fights with no weight classes, rounds, or judges. The three rules, no biting, no eye gouging, and no groin shots were to be enforced only by a $1,500 fine. The match only ended by submission, knockout, or the fighter's corner throwing in the towel, although the referee stopped the first fight at 26 seconds. Gloves were allowed, as Art Jimmerson showed in his quarterfinal bout against Royce Gracie, which he fought with one boxing glove.
  Royce Gracie won the tournament by defeating Gerard Gordeau via submission due to a rear naked choke.[13] The referees for UFC 1 were João Alberto Barreto and Hélio Vigio, two veteran vale tudo referees from Brazil
  `,
  },
  {
    title: "UFC 189: Mendes vs McGregor",
    imageUrl:
      "https://images.tapology.com/poster_images/26946/profile/UFC_189_Mendes_vs._McGregor_Poster.jpg?1436205032",
    description: `Those who said Mendes could take down McGregor were proven correct rather quickly. Those who said McGregor could spring right back up were also correct. Mendes got McGregor to the mat early in the first round, but The Notorious One worked to his feet and the fight went back to stand-up exchanges. 
  The takedowns weren't done yet, though. Mendes went on to take down McGregor twice more in the opening frame. He ended the round on top and doing damage to a bloodied McGregor. 
  Mendes once again went to the wrestling in the second frame. After McGregor landed a few strikes on the feet, Mendes scored another takedown and went to work with elbows to McGregor.
  McGregor's knockout power proved to be too much, however. After the two fighters scrambled to their feet late in the second round, McGregor started throwing combinations with a great sense of urgency. Mendes had the early edge, but the 26-year-old Irishman got the decisive blow when he caught his opponent with a left-handed punch to the jaw. Mendes fell to the floor, ultimately causing Herb Dean to call an end to the fight. 
  `,
  },
  {
    title: "UFC 139: Shogun vs Henderson",
    imageUrl:
      "https://images.tapology.com/poster_images/9822/profile/UFC-139-Shogun-vs-Henderson-Hendo-poster.jpg?1321161170",
    description: `Henderson and Rua put on one of the best fights in the history of MMA.
  At least that is how Dana White put it.
  Normally the UFC promoter is known to have bouts of hyperbole in which he tries to make the
  fight or event grander then it was. UFC 139 was not one of these times. When White said that it
  was one of his top three fights of all time, he might not have had his promoter persona on.
  He might have just been what anyone else was who witnessed that fight Saturday night.
  
  An excited fan.
  It started as a one-sided beatdown by Henderson, but quickly changed as Rua was able to knock
  Henderson down. When Henderson finally was on top of Rua and seemingly in control, the
  Brazilian warrior was able to get his leg and almost submit him.
  Between a bunch of swung leather and submission attempts, the fight had it all. It was so
  impressive that by the time the fourth and fifth rounds came and both fighters were exhausted,
  the crowd was willing to forgive any absences in the action.
  It was a fight that stood out on a card that had Martin Kampmann-Rick Story, Urijah Faber-Brian
  Bowles and Wanderlei Silva-Cung Le. Each of these fights delivered with the next one being
  better than the last.
  After the Silva-Le fight it would be hard to imagine a better fight than that. The main event just
  couldn&#39;t be as great; it almost never happens.
  But miracles happen. MMA fans got a rare treat and were able to see the most exciting type of
  fight in all of sports combat: two brilliant fighters pushing a technically sound, fast-paced,
  aggressive fight. They took it to the wall, the cage floor and the center of the Octagon. No part of
  the battlefield went unused.
  And even though the fight might have been stopped a few different times, it wasn&#39;t, and fans got
  to see Rua make a comeback and end up taking the fight to Henderson.
  By the late rounds, Rua was getting in more offense. It was too little too late to get the decision
  win, but it was awe-inspiring.
  When the final bell rang, there was only one way the match could have been spoiled. It had
  already been saved from incompetent refereeing and now all it needed was decent judges.
  And when the scores were read 48-47 in favor of Henderson, fans got to see the perfect fight,
  with perfect refereeing and perfect judging.`,
  },
  {
    title: "UFC 205: Alvarez vs McGregor",
    imageUrl:
      "https://images.tapology.com/poster_images/39362/profile/UFC_205_Alvarez_vs._McGregor_Poster.jpg?1476155665",
    description: `The event was headlined by a UFC Lightweight Championship bout between then
  champion Eddie Alvarez and UFC Featherweight Champion Conor McGregor. This was the
  second time in UFC history that champions in different divisions fought for the same title. The
  first time was at UFC 94 on January 31, 2009, when then-welterweight champion Georges St-
  Pierre defended his title against then-lightweight champion B.J. Penn.
  Alvarez was originally expected to make his first title defense against undefeated
  contender  Khabib Nurmagomedov , but it was announced on September 21 that Alvarez missed
  the contract deadline for the bout and in consequence it was expected to take place at UFC 206 in
  December. ]  Meanwhile, McGregor was previously expected to challenge for the lightweight title
  at UFC 196 in February against then champion Rafael dos Anjos. Dos Anjos eventually pulled
  out due to a broken foot and the bout never materialized.`,
  },
  {
    title: "UFC 116: Lesnar vs Carwin",
    imageUrl:
      "https://images.tapology.com/poster_images/313/profile/UFC_116_Lesnar_vs_Carwin_Poster.jpg?1301975595",
    description: `At the bell, Carwin and Lesnar circled each other warily, Lesnar shooting out a couple jabs that
  fell short. As the champion moved closer, Carwin scored with a short right hand and Lesnar shot
  
  for a takedown that was turned away. In an ensuing exchange, Carwin rocked Lesnar with an
  uppercut and sent him sprawling across the Octagon. Carwin threw a series of unanswered
  blows, but wasn’t able to Finish Lesnar off. Lesnar briefly cleared his head and tried to score
  with a knee, but Carwin got his foe to the mat and again began teeing off. Lesnar, his face now
  bloodied from a cut over his left eye, amazingly didn’t give in to the increasing assault, doing
  just enough to keep referee Josh Rosenthal from stopping the fight. With less than two minutes
  left, Lesnar finally made his move and got back to his feet. This time, Lesnar’s knee landed hard
  as the two locked up against the fence, and though Carwin avoided a late takedown attempt, at
  the bell it looked like a brand new fight was about to begin.
  Lesnar smiled as the second round began and he touched gloves with Carwin at the bell. This
  time Lesnar made the move to get off first, and after a right hand didn’t do the trick, a takedown
  moments later did. Now in control on the mat, Lesnar locked in an arm triangle with a little over
  three minutes left. And though Carwin gallantly tried to break loose, he was eventually forced to
  tap at the 2:19 mark.`,
  },
  {
    title: "UFC 117: Silva vs Sonen",
    imageUrl:
      "https://images.tapology.com/poster_images/309/profile/UFC_117_Silva_vs_Sonnen_Poster.jpg?1301979155",
    description: `Anderson Silva, the previously elusive fighter who once mocked his competition, was
  successful in a desperate attempt at a submission of who ended up being a better overall fighter:
  Chael Sonnen.
  Sonnen talked a bunch of trash, and after ruffling the feathers of so many MMA and Silva fans,
  he came out and gave the best fight of his career and revealed Silva&#39;s weaknesses.
  Nobody really gave Sonnen a chance before UFC 117. Everyone compared his Dan Hardy-like
  trash talk to Dan Hardy&#39;s effectiveness against Georges St. Pierre. Big mistake.
  After beating Silva up for 5 rounds, Sonnen may have officially lost the fight, but what did he
  gain in the process? The respect of every MMA fan in the world.
  Up until the last two minutes of the fight, Silva looked like a joke for the entire 5 rounds. He
  landed a submission out of desperation, and he was lucky.`,
  },
  {
    title: "UFC 217: Bisping vs St. Pierre",
    imageUrl:
      "https://images.tapology.com/poster_images/46980/profile/UFC_217_Bisping_vs._St._Pierre_Poster.jpg?1506993005",
    description: `Georges St-Pierre returned in historic fashion after four years away from the game and became
  the fourth fighter in UFC history to win a championship in a second weight class after submitting
  Michael Bisping with a rear naked choke at 4:23 of the third round. St-Pierre came out strong in
  the first round, dropping Bisping and landing a takedown. But the now former champ Bisping
  came back out in the second round and started to gain some momentum. He stood up after a GSP
  takedown and then stumbled him at one point. In the third GSP landed a takedown but BIsping
  was landing the better strikes from his back. After the two got back up, St-Pierre was looking to
  time the left hook counter and he finally landed it, stopping Bisping in his tracks and dropping
  him once again. He went wild by swarming to the ground and then landing elbows in bunches
  before Bisping gave up his back and St-Pierre was able to choke him out.Ï`,
  },
  {
    title: "UFC 202: Diaz vs McGregor 2",
    imageUrl:
      "https://images.tapology.com/poster_images/39739/profile/UFC_202_Diaz_vs._McGregor_2_Poster.jpg?1468510143",
    description: `McGregor started the bout with a more deliberate pace than he did the first time around,
  working kicks to Diaz&#39;s lead leg and patiently countering with a precise overhand left to the
  head. It was rinse, lather and repeat early in the second frame, as McGregor continued to
  tenderize Diaz&#39;s lead leg with kicks and land clean shots to the head. He again floored Diaz early
  
  in the round with an overhand left but refused to engage his opponent on the ground. However, a
  Diaz brother won&#39;t go down without a fight, and shades of the first bout began to emerge in the
  latter half of the second round as Diaz upped his volume and started catching McGregor more
  and more. The third round descended into an all-out brawl as McGregor&#39;s energy dwindled, and
  Diaz used unrelenting pressure to take the round. The fight took another turn in the
  championship rounds, as McGregor appeared to catch something of a second wind. His defense
  still suffered, but he was able to return fire with regularity, including elbows in the clinch. The
  fifth and final round was an encapsulation of the entire fight, as both bloodied fighters took turns
  landing big shots between deep breaths. Diaz punctuated the final round with a big takedown just
  before the final bell rang, bringing the epic fight to its conclusion.`,
  },
];

matches.forEach((m) => {
  axios.post("http://localhost:5000/match/createMatch", m).then((res) => {
    console.log(res.data);
  });
});
