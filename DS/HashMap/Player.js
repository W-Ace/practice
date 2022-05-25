const team = [
  [
    {
      name: 'Messi',
      playingTime: 30,
    },
    {
      name: 'Rose',
      playingTime: 3,
    },
  ],
  [
    {
      name: 'Bill',
      playingTime: 30,
    },
    {
      name: 'Rose',
      playingTime: 27,
    },
  ],
];

const getLongestTimeOfPlayer = (data) => {
  const accMap = new Map();
  let member = [];
  let longestTime = 0;
  data.forEach((per) => {
    per.forEach((player) => {
      const { name, playingTime } = player;
      let accTime = playingTime;
      if (accMap.get(name)) {
        accTime += accMap.get(name);
      }

      accMap.set(name, accTime);

      if (accTime > longestTime) {
        member = [name];
        longestTime = accTime;
      } else if (accTime === longestTime) {
        member.push(name);
      }
    });
  });
  return member.sort().join(',');
};

console.log(getLongestTimeOfPlayer(team));
