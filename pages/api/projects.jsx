export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/1067082456760602634/1118450219357589595/IMG_5212.gif",
      name: "Dark Community",
      description: "Arkadaşlarınızla, insanlarla vakit geçirip oyun oynayabileceğiniz, sohbet edip arkadaş edinebileceğiniz bir Roblox Topluluğuna gelmeye ne dersiniz.",
      link: "https://discord.gg/XDrbvp9ERm",
    },
    {
      id: 2,
      image: "https://media.discordapp.net/attachments/1067082456760602634/1118447965812572200/discord-avatar-512-57HWP.gif",
      name: "Hataza Botlist",
      description: "Discord'un jet hızında olan botlist sunucusuna botunu eklemek istemezmisin? Botuna 1 sunucu, 600+ üye kazandır!",
      link: "https://discord.gg/H3hr6gdMJr",
    }
  ];
  res.status(200).json(data);
};
