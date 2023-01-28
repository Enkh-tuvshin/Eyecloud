export const Focus = () => {
  const focuses = [
    {
      image: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
      names: "Peaceful Piano",
      text: "Relax and indluge with beautiful piano peaces",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5",
      names: "Deep Focus",
      text: "Keep calm and focus with ambient and post-rock music",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000025d87659dcadef82dd0e73f56",
      names: "Instrumental Study",
      text: "Focus with soft study music in the background.",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000025ea54b91b073c2776b966e7b",
      names: "Jazz Vibes",
      text: "The original chill instrumental beats...",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000025b0a7b8408322a3b9ed15e1e",
      names: "chill lofi study beats",
      text: "The perfect study beats. Find your ficus,crush...",
    },
    {
      image: "https://i.scdn.co/image/ab67706f00000002863b311d4b787ed621f7e696",
      names: "Coding mode",
      text: "Dedicated to all the programmers out there.",
    },
  ];
  return (
    <div>
      <div>
        <div>
          {focuses.map((focus, index) => {
            <div>
                <img/>
                <h3></h3>
                <p></p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};
