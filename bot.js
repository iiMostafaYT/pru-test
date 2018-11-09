const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const moment = require('moment');

const jimp = require('jimp');

const Canvas = require('canvas');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

const prefix = "#";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {

    client.user.setActivity("Test Premium",{type: 'Streaming'})

});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})


  
client.on("ready", () => {
  function lol() {
    client.guilds.get('509936556165824536').roles.find("name", "Disco").setColor("RANDOM");
  }
  setInterval(lol, 6000);
})



   
 
  






 
 

client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'test');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
      
         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:yumz});          
         
    



const w = ['./img/w1.png'];

         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
          

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to ${member.guild.name}`, 300, 130);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                          
                
                             
welcomer.sendFile(canvas.toBuffer())



      
      
                    }  )  
      
                    

})
      });                    
 }
});





 


 
 client.on('message', message => {

	    var prefix = "#";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Arabe Test";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('سيرفر', message.guild.name)
       .addField('المرسل', message.author.username)
       .addField('الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
 
client.on("message", message => {
	var prefix = "#";
 if (message.content === "#help") {
	 message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setDescription(`
      وصف عن البوت
      :gem: البوت فيه كثير ميزات حلوة و جميلة
      
       :rocket: البوت يعمل 24 ساعه
      
   
`)
   message.author.sendEmbed(embed)
    
   }
   }); 


   client.on("message", message => {
	var prefix = "#";
 if (message.content === "#help") {
	 message.channel.send(' ');
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setDescription(`
      __**Administrative Commands**__
    **  『#move @user / لسحب الشخص الى روومك』
      『#bc / رسالة جماعية الى كل اعضاء السيرفر』
      『#hchannel / اخفاء الشات』
      『#schannel / اضهار الشات المخفية』
      『#clear / مسح الشات』
      『#mute @user <reason> / اعطاء العضو ميوت لازم رتبة <Muted>』
      『#unmute @user / لفك الميوت عن الشخص 』
      『#kick @user <reason> / طرد الشخص من السيرفر』
      『#ban @user <reason> / حضر الشخص من السيرفر』
      『#mutechannel / تقفيل الشات』
      『#unmutechannel / فتح الشات』
      『#ct <name> / انشاء شات』
      『#cv <name> / انشاء رووم فويس』**
      
`)
   message.author.sendEmbed(embed)
    
   }
   }); 


   
   client.on("message", message => {
	var prefix = "#";
 if (message.content === "#help") {
	 message.channel.send('');
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setDescription(`
      __**General Commands**__
      **『#server / يعرض لك معلومات عن السيرفر』
      『#fm / عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』
      『#id /  معلومات عنك』
      『#allbots /  لعرض جميع البوتات الي بالسيرفر』
      『#savatar / صورة السيرفر』
      『#avatar / صورتك او صورة الي تمنشنة』**
      
      
`)
   message.author.sendEmbed(embed)
    
   }
   }); 


   client.on("message", message => {
	var prefix = "#";
 if (message.content === "#help") {
	 message.channel.send('');
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setDescription(`
      __**Music Commands**__
    **  『#play / لتشغيل اغنية』
      『#skip / تخطي الأغنية』
      『#join / دخول رومك الصوتي』
      『#stop / الخروج من رومك الصوتي』
      『#pause / ايقاف الاغنية مؤقتا』
      『#np / اظهار الاغنية اللي انت مشغلها حاليا』
      『#resume / تكملة الاغنية』
      『#queue  / اظهار قائمة التشغيل』**
`)
   message.author.sendEmbed(embed)
    
   }
   }); 

client.on('message', function(msg) {
  if(msg.content.startsWith ('#server')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '#'; 
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});

client.on("message", msg => {
  if(msg.content === '#' + "user") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})




   client.on('message', async message =>{
    if (message.author.boss) return;
      var prefix = "#";
  
  if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
       command = command.slice(prefix.length);
      let args = message.content.split(" ").slice(1);
      if (command == "mute") {
          if (!message.channel.guild) return;
          if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
          let user = message.mentions.users.first();
          let muteRole = message.guild.roles.find("name", "Muted");
          if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
          if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
          let reason = message.content.split(" ").slice(2).join(" ");
          message.guild.member(user).addRole(muteRole);
          const muteembed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setThumbnail(user.displayAvatarURL)
          .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
          .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
          .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
          .addField("User", user, true)
          message.channel.send({embed : muteembed});
          var muteembeddm = new Discord.RichEmbed()
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setDescription(`      
  ${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
  ${message.author.tag} تمت معاقبتك بواسطة
  [ ${reason} ] : السبب
  اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
  `)
          .setFooter(`في سيرفر : ${message.guild.name}`)
          .setColor("RANDOM")
      user.send( muteembeddm);
    }
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))
  
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
  
    let role = message.guild.roles.find (r => r.name === "Muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
  
    await toMute.removeRole(role)
    message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
  
    return;
  
    }
  
  });

  client.on('message', message => {
	var prefix = "#"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "#"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


 


client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#9c9c9c",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("ميوت بسبب نشر")
            .addField(`**لقد تم إعطائك ميوت كتابي **` , `**السبب: نشر رابط سيرفر في الديسكورد**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**`لقد تم إعطاء ميوت بسبب النشر إذا كان عن طريق الخطا فتكلم مع الإدارة`**');

              
              
              
              }
})


 client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "#";
               if(message.content.startsWith(prefix + 'allbots')) {

   
   if (message.author.bot) return;
   let i = 1;
       const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.tag, message.author.avatarURL)
         .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

client.on('message', message => {
	var prefix = "#";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

client.on('message', message => {
    var prefix = "#";
          if(message.content === prefix + "hchannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: false
     })
                  message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
     }
    });
    
    
    client.on('message', message => {
    var prefix = "#";
          if(message.content === prefix + "schannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: true
     })
                  message.channel.send('Done  ')
     }
    });
    
    client.on("message", message => {
        const prefix = "#"
                  
              if(!message.channel.guild) return;
       if(message.author.bot) return;
          if(message.content === prefix + "savatar"){ 
              const embed = new Discord.RichEmbed()
      
          .setTitle(`${message.guild.name}.png`)
      .setAuthor(message.author.username, message.guild.iconrURL)
        .setColor(0x164fe3)
        .setImage(message.guild.iconURL)
        .setURL(message.guild.iconrURL)
                        .setTimestamp()
    
       message.channel.send({embed});
          }
      });
    
      client.on('message',function(message) {
        if (message.author.bot) return;
      var prefix = "#";
                        if(!message.channel.guild) return;
      
                          if (message.content === prefix + "fm") {
       const embed = new Discord.RichEmbed()
      
          .setDescription(`**Members info :sparkles:
      :green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
      :heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
      :yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
      :diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
      :bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
               message.channel.send({embed});
      
          }
            });  

     client.on('message', message => {
                    var prefix = "#";
                           if(message.content === prefix + "mutechannel") {
                                               if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
                       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                                  message.channel.overwritePermissions(message.guild.id, {
                                SEND_MESSAGES: false
                    
                                  }).then(() => {
                                      message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                                  });
                                    }
                    //FIRE BOT
                        if(message.content === prefix + "unmutechannel") {
                                            if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
                       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                                  message.channel.overwritePermissions(message.guild.id, {
                                SEND_MESSAGES: true
                    
                                  }).then(() => {
                                      message.reply("**__تم فتح الشات__:white_check_mark:**")
                                  });
                        }
                           
                    });   

                    client.on('message', omar => {
                        var prefix = "#";
                        if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
                        if (!omar.channel.guild) return;
                        if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
                        if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
                        omar.guild.channels.forEach(m => {
                        m.delete();
                        });
                        }
                        if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
                        if (!omar.channel.guild) return;
                        if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
                        if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
                        omar.guild.roles.forEach(m => {
                        m.delete();
                        });
                        omar.reply("`تم حذف جميع الرتب بنجاح`")
                        }
                        });
                        
                        client.on('message', message => {
                            var prefix = "#";
                           if(!message.channel.guild) return;
                        if(message.content.startsWith(prefix + 'clear')) {
                        if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
                        if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
                        let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
                        let request = `Requested By ${message.author.username}`;
                        message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
                        msg.react('✅')
                        .then(() => msg.react('❌'))
                        .then(() =>msg.react('✅'))
                        
                        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
                        let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
                        
                        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
                        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
                        reaction1.on("collect", r => {
                        message.channel.send(`Chat will delete`).then(m => m.delete(5000));
                        var msg;
                                msg = parseInt();
                        
                              message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
                              message.channel.sendMessage("", {embed: {
                                title: "`` Chat Deleted ``",
                                color: 0x06DF00,
                                footer: {
                        
                                }
                              }}).then(msg => {msg.delete(3000)});
                        
                        })
                        reaction2.on("collect", r => {
                        message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
                        msg.delete();
                        })
                        })
                        }
                        });
                        
                        client.on("message", (message) => {
                        if (message.content.startsWith("#ct")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'text');
                        message.channel.sendMessage('تـم إنـشاء روم كـتابـي')
                        
                        }
                        });
                        
                        
                        client.on("message", (message) => {
                        if (message.content.startsWith("#cv")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'voice');
                            message.channel.sendMessage('تـم إنـشاء روم صـوتي')
                            
                        }
                        });
                        
                        
                        client.on("message", (message) => {
                            if (message.content.startsWith('#delete')) {
                                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                        
                                let args = message.content.split(' ').slice(1);
                                let channel = message.client.channels.find('name', args.join(' '));
                                if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
                                channel.delete()
                            }
                        });  

                       client.on('message', async msg => { 
                            if (msg.author.bot) return undefined;
                            if (!msg.content.startsWith(prefix)) return undefined;
                            
                            const args = msg.content.split(' ');
                            const searchString = args.slice(1).join(' ');
                            
                            const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
                            const serverQueue = queue.get(msg.guild.id);
                        
                            let command = msg.content.toLowerCase().split(" ")[0];
                            command = command.slice(prefix.length)
                        
                            if (command === `play`) {
                                const voiceChannel = msg.member.voiceChannel;
                                
                                if (!voiceChannel) return msg.channel.send("I can't find you in any voice channel!");
                                
                                const permissions = voiceChannel.permissionsFor(msg.client.user);
                                
                                if (!permissions.has('CONNECT')) {
                        
                                    return msg.channel.send("I don't have enough permissions to join your voice channel!");
                                }
                                
                                if (!permissions.has('SPEAK')) {
                        
                                    return msg.channel.send("I don't have enough permissions to speak in your voice channel!");
                                }
                        
                                if (!permissions.has('EMBED_LINKS')) {
                        
                                    return msg.channel.sendMessage("I don't have enough permissions to insert a URLs!")
                                }
                        
                                if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                        
                                    const playlist = await youtube.getPlaylist(url);
                                    const videos = await playlist.getVideos();
                                    
                        
                                    for (const video of Object.values(videos)) {
                                        
                                        const video2 = await youtube.getVideoByID(video.id); 
                                        await handleVideo(video2, msg, voiceChannel, true); 
                                    }
                                    return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
                                } else {
                        
                                    try {
                        
                                        var video = await youtube.getVideo(url);
                                        
                                    } catch (error) {
                                        try {
                        
                                            var videos = await youtube.searchVideos(searchString, 5);
                                            let index = 0;
                                            const embed1 = new Discord.RichEmbed()
                                            .setTitle(":mag_right:  YouTube Search Results :")
                                            .setDescription(`
                                            ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                                            
                                            .setColor("#f7abab")
                                            msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
                                            
                        /////////////////					
                                            try {
                        
                                                var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                                                    maxMatches: 1,
                                                    time: 15000,
                                                    errors: ['time']
                                                });
                                            } catch (err) {
                                                console.error(err);
                                                return msg.channel.send('No one respone a number!!');
                                            }
                                            
                                            const videoIndex = parseInt(response.first().content);
                                            var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                                            
                                        } catch (err) {
                        
                                            console.error(err);
                                            return msg.channel.send("I didn't find any results!");
                                        }
                                    }
                        
                                    return handleVideo(video, msg, voiceChannel);
                                    
                                }
                                
                            } else if (command === `skip`) {
                        
                                if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
                                if (!serverQueue) return msg.channel.send("There is no Queue to skip!!");
                        
                                serverQueue.connection.dispatcher.end('Ok, skipped!');
                                return undefined;
                                
                            } else if (command === `stop`) {
                        
                                if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
                                if (!serverQueue) return msg.channel.send("There is no Queue to stop!!");
                                
                                serverQueue.songs = [];
                                serverQueue.connection.dispatcher.end('Ok, stopped & disconnected from your Voice channel');
                                return undefined;
                                
                            } else if (command === `vol`) {
                        
                                if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
                                if (!serverQueue) return msg.channel.send('You only can use this command while music is playing!');
                                if (!args[1]) return msg.channel.send(`The bot volume is **${serverQueue.volume}**`);
                                
                                serverQueue.volume = args[1];
                                serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
                                
                                return msg.channel.send(`Volume Now is **${args[1]}**`);
                        
                            } else if (command === `np`) {
                        
                                if (!serverQueue) return msg.channel.send('There is no Queue!');
                                const embedNP = new Discord.RichEmbed()
                                .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
                                return msg.channel.sendEmbed(embedNP);
                                
                            } else if (command === `queue`) {
                                
                                if (!serverQueue) return msg.channel.send('There is no Queue!!');
                                let index = 0;
                        //	//	//
                                const embedqu = new Discord.RichEmbed()
                                .setTitle("The Queue Songs :")
                                .setDescription(`
                                ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('\n')}
                        **Now playing :** **${serverQueue.songs[0].title}**`)
                                .setColor("#f7abab")
                                return msg.channel.sendEmbed(embedqu);
                            } else if (command === `pause`) {
                                if (serverQueue && serverQueue.playing) {
                                    serverQueue.playing = false;
                                    serverQueue.connection.dispatcher.pause();
                                    return msg.channel.send('Ok, paused');
                                }
                                return msg.channel.send('There is no Queue to Pause!');
                            } else if (command === "resume") {
                        
                                if (serverQueue && !serverQueue.playing) {
                                    serverQueue.playing = true;
                                    serverQueue.connection.dispatcher.resume();
                                    return msg.channel.send('Ok, resumed!');
                                    
                                }
                                return msg.channel.send('Queue is empty!');
                            }
                        
                            return undefined;
                        });
                        
                        async function handleVideo(video, msg, voiceChannel, playlist = false) {
                            const serverQueue = queue.get(msg.guild.id);
                            console.log(video);
                            
                        
                            const song = {
                                id: video.id,
                                title: Util.escapeMarkdown(video.title),
                                url: `https://www.youtube.com/watch?v=${video.id}`
                            };
                            if (!serverQueue) {
                                const queueConstruct = {
                                    textChannel: msg.channel,
                                    voiceChannel: voiceChannel,
                                    connection: null,
                                    songs: [],
                                    volume: 5,
                                    playing: true
                                };
                                queue.set(msg.guild.id, queueConstruct);
                        
                                queueConstruct.songs.push(song);
                        
                                try {
                                    var connection = await voiceChannel.join();
                                    queueConstruct.connection = connection;
                                    play(msg.guild, queueConstruct.songs[0]);
                                } catch (error) {
                                    console.error(`I could not join the voice channel: ${error}!`);
                                    queue.delete(msg.guild.id);
                                    return msg.channel.send(`Can't join this channel: ${error}!`);
                                }
                            } else {
                                serverQueue.songs.push(song);
                                console.log(serverQueue.songs);
                                if (playlist) return undefined;
                                else return msg.channel.send(`**${song.title}**, just added to the queue! `);
                            } 
                            return undefined;
                        }
                        
                        function play(guild, song) {
                            const serverQueue = queue.get(guild.id);
                        
                            if (!song) {
                                serverQueue.voiceChannel.leave();
                                queue.delete(guild.id);
                                return;
                            }
                            console.log(serverQueue.songs);
                        
                            const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
                                .on('end', reason => {
                                    if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
                                    else console.log(reason);
                                    serverQueue.songs.shift();
                                    play(guild, serverQueue.songs[0]);
                                })
                                .on('error', error => console.error(error));
                            dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
                        
                            serverQueue.textChannel.send(`**${song.title}**, is now playing!`);
                        }


client.on('message', message => { 

	var prefix ="-";
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`Arabe Codes`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });




client.login(process.env.BOT_TOKEN);
