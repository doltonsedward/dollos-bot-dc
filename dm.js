// require("dotenv").config();
// const { Client, GatewayIntentBits } = require("discord.js");

// const client = new Client({
//   intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages],
// });

// client.login(process.env.TOKEN);

// const guildId = "1006001920638460035";
// // const messageContent =
// //   "Pesan yang ingin kamu kirim ke semua member di dalam server Discord kamu.";

// client.once("ready", async () => {
//   console.log(`Logged in as ${client.user.tag}`);
//   // console.log(client, "halo");
//   const guild = await client.guilds.fetch(guildId);
//   const members = await guild.members.fetch();
//   console.log("testing");

//   members.forEach(async (member) => {
//     try {
//       const dmChannel = await member.createDM();
//       const dm = await dmChannel.send("hai");
//       console.log(dm);
//     } catch (err) {
//       console.error(
//         `Gagal mengirim pesan langsung ke ${member.user.tag} dengan alasan: `,
//         err
//       );
//     }
//   });
// });
