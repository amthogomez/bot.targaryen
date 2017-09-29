const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");





client.on("ready", () => {
   console.log("Estoy listo!");
});

client.on("ready", () => {
  console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
  client.user.setGame(`-help | Estoy en ${client.guilds.size} servidores.`);
  
  client.on("ready", () => {
    console.log("Estoy listo!");
   
    client.user.setGame(prefix+'help |amthogomez bot');
 
 });
 
});

var prefix = config.prefix;

client.on("guildMemberAdd", (member) => {
    console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
    var canal = client.channels.get('123456789112455845'); 
    canal.send(`${member.user}, bienvenido al servidor pasala bien.`);
    
 });



client.on("message", (message) => {
  
    const content = message.content.split(' ').slice(1);
    const args = content.join(' ');

  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix +"Valar Morghulis")) {
    message.channel.send("Valar Dohaeris");
  }
  if (message.content.startsWith(prefix +"embed")){
    message.channel.send({embed: {
      color: 3447003,
      description: "En el invierno debemos estar unidos"
    }});
}
if (message.content.startsWith(prefix +"embed")){
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Bienvenidos!!",
      url: "http://www.discordianos.com",
      description: "Bot personalizado por amthogomez",
      fields: [{
          name: "Leer las reglas ",
          value: "se encuentran en reglas-bot"
        },
        {
          name: "Aviso",
          value: "Cada rol dispone de un bot determinado y esta disponible el canal 18+"
        },
        {
          name: "Sugerencia",
          value: "Puedes poner todos los Markdown *cursiva* **__Marcado__** en texto."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "amthogomez"
      }
    }
});
}
if(message.content.startsWith(prefix + 'decir')){
    
    if(!args) return message.channel.send(`Escriba un contenido pára decir.`);
    message.channel.send(`${args}`);
    
}
if(message.content.startsWith(prefix + '8ball')){
    
        var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];
        if (!args) return message.reply(`Escriba una pregunta.`);
        message.channel.send(message.member.user+' a su pregunta `'+args+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
    
    }
    if(message.content.startsWith(prefix + 'kick' )){
        
            let user = message.mentions.users.first();
            let razon = args.split(' ').slice(1).join(' ');
            
            if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
            if (!razon) return message.channel.send('Escriba una razón, `-kick @username [razón]`');
            if (!message.guild.member(user).kickable) return message.reply('No puedo patear al usuario mencionado.');
             
            message.guild.member(user).kick(razon);
            message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);
        
        }
        if(message.content.startsWith(prefix + 'avatar')){
            
                  let img = message.mentions.users.first()
                  if (!img) {
            
                      const embed = new Discord.RichEmbed()
                      .setImage(`${message.author.avatarURL}`)
                      .setColor(0x66b3ff)
                      .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
                      message.channel.send({ embed });
            
                  } else if (img.avatarURL === null) {
            
                      message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");
            
                  } else {
            
                      const embed = new Discord.RichEmbed()
                      .setImage(`${img.avatarURL}`)
                      .setColor(0x66b3ff)
                      .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
                      message.channel.send({ embed });
            
                  };
            
              }
              if (message.content.startsWith(prefix + "ping")) {
                
                    let mensajes = Date.now() - message.createdTimestamp;
                    let ping = Math.floor(message.client.ping);
                    
                    message.channel.send(":ping_pong: Pong!")
                      .then(m => {
                
                          m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(mensajes/100)} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
                      
                      });
                    
                  }
                  if(message.content.startsWith(prefix + 'ban' )){
                    
                        let user = message.mentions.users.first();
                        let razon = args.split(' ').slice(1).join(' ');
                    
                        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
                        if(!razon) return message.channel.send('Escriba un razón, `-ban @username [razón]`');
                        if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');
                        
                    
                        message.guild.member(user).ban(razon);
                        message.channel.send(`**${user.username}**, fue baneado del servidor, razón: ${razon}.`);
                    
                  }
                  if(message.content.startsWith(prefix + 'decir')){
                    
                    if(!args) return message.channel.send(`Escriba un contenido pára decir.`);
                    message.channel.send(`${args}`);
                
                  }
                  if(message.content.startsWith(prefix + 'server')){
                    
                        var server = message.guild;
                      
                        const embed = new Discord.RichEmbed()
                        .setThumbnail(server.iconURL)
                        .setAuthor(server.name, server.iconURL)
                        .addField('ID', server.id, true)
                        .addField('Region', server.region, true)
                        .addField('Creado el', server.joinedAt.toDateString(), true)
                        .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
                        .addField('Miembros', server.memberCount, true)
                        .addField('Roles', server.roles.size, true)
                        .setColor(0x66b3ff)
                        
                       message.channel.send({ embed });
                    
                      }
                      if(message.content.startsWith(prefix + 'user')){
                        let userm = message.mentions.users.first()
                        if(!userm){
                          var user = message.author;
                          
                            const embed = new Discord.RichEmbed()
                            .setThumbnail(user.avatarURL)
                            .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
                            .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
                            .addField('ID', user.id, true)
                            .addField('Estado', user.presence.status, true)
                            .addField('Apodo', message.member.nickname, true)
                            .addField('Cuenta Creada', user.createdAt.toDateString(), true)
                            .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
                            .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
                            .setColor(0x66b3ff)
                            
                           message.channel.send({ embed });
                        }else{
                          const embed = new Discord.RichEmbed()
                          .setThumbnail(userm.avatarURL)
                          .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
                          .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
                          .addField('ID', userm.id, true)
                          .addField('Estado', userm.presence.status, true)
                          .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
                          .setColor(0x66b3ff)
                          
                         message.channel.send({ embed });
                        }
                        
                      }
                      client.on("ready", () => {
                        console.log("Estoy listo!");
                       
                        client.user.setGame(prefix+'help |amthogomez Targaryen Bot');
                     
                     });
                     if(message.content.startsWith(prefix + 'help')){
                        
                            message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
                            message.author.send('**COMANDOS Targaryen**\n```\n'+
                                                '-> '+prefix+'ping           :: Comprueba la latencia del bot y de tus mensajes.\n'+
                                                '-> '+prefix+'avatar <@user> :: Muestra el avatar de un usuario.\n'+
                                                '-> '+prefix+'decir          :: Hace que el bot diga un mensaje.\n'+
                                                '-> '+prefix+'user <@user>   :: Muestra información sobre un usuario mencionado.\n'+
                                                '-> '+prefix+'server         :: Muestra información de un servidor determinado.\n'+
                                                '-> '+prefix+'8ball          :: El bot respondera a tus preguntas.\n'+
                                                '-> '+prefix+'ban <@user>    :: Banear a un usuario del servidor incluye razon.\n'+
                                                '-> '+prefix+'kick <@user>   :: Patear a un usuario del servidor incluye razon.\n'+
                                                '-> '+prefix+'Valar Morghulis           :: Retorna un saludo como mensaje.\n```\n\n'+
                                                '**Targaryen Bot - Server guía y de soporte Únete :**\nhttps://www.discordianos.com');
                            
                          }

                          if(message.content.startsWith(prefix + 'rol')){
                            
                                if(!args) return message.channel.send('Ingrese nombre del rol.');
                                let mirol = message.guild.roles.find("name", args);
                                if(!mirol) return message.channel.send('Rol no encontrado en el servidor.');
                            
                                if(message.member.roles.has(mirol.id)) {
                                  message.channel.send('Si tienes el rol: `'+mirol.name+"`.");
                                } else {
                                  message.channel.send('No tienes el rol: `'+mirol.name+".`");
                                }
                            
                              }
                              if(message.content.startsWith(prefix + 'miembrosrol')){
                                
                            if(!args) return message.channel.send('Ingrese nombre del rol.');
                            let rol = message.guild.roles.find("name", args);
                            if(!rol) return message.channel.send('Rol no encontrado en el servidor.');
                            let miembroroles = message.guild.roles.get(rol.id).members;
                            message.channel.send(`Tienes a **${miembroroles.size}** miembro(s) con el rol **${args}**.`);
                            
                          }
                          if(message.content.startsWith(prefix + 'removerol')){
                            
                                let miembro = message.mentions.members.first();
                                let nombrerol = args.split(' ').slice(1).join(' ');
                            
                                let role = message.guild.roles.find("name", nombrerol);
                                let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");
                            
                                if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
                                 
                                if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
                                if(!nombrerol) return message.channel.send('Escriba el nombre del rol a remover, `-removerol @miembro [rol]`');
                                if(!role) return message.channel.send('Rol no encontrado en el servidor.');
                                
                                miembro.addRole(role).catch(console.error);
                                message.channel.send(`El rol **${role.name}** del miembro **${miembro.user.username}** fue removido  correctamente.`);
                            
                              }
                              if(message.content.startsWith(prefix + 'addrol')){
                                
                                    let miembro = message.mentions.members.first();
                                    let nombrerol = args.split(' ').slice(1).join(' ');
                                
                                    let role = message.guild.roles.find("name", nombrerol);
                                    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");
                                
                                    if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
                                     
                                    if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
                                    if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar, `-addrol @username [rol]`');
                                    if(!role) return message.channel.send('Rol no encontrado en el servidor.');
                                    
                                    miembro.addRole(role).catch(console.error);
                                    message.channel.send(`El rol **${role.name}** fue agregado correctamente a **${miembro.user.username}**.`);
                                
                                  }
                                  if(message.content.startsWith(prefix + 'miembrosrol')){
                                    
                                if(!args) return message.channel.send('Ingrese nombre del rol.');
                                let rol = message.guild.roles.find("name", args);
                                if(!rol) return message.channel.send('Rol no encontrado en el servidor.');
                                let miembroroles = message.guild.roles.get(rol.id).members;
                                message.channel.send(`Tienes a **${miembroroles.size}** miembro(s) con el rol **${args}**.`);
                                
                              }
                              if (message.content. startsWith(prefix + 'join')) { 
                                let Canalvoz = message.member.voiceChannel;
                                if (!Canalvoz || Canalvoz.type !== 'voice') {
                                message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
                                } else if (message.guild.voiceConnection) {
                                message.channel.send('Ya estoy conectado en un canal de voz.');
                                } else {
                                 message.channel.send('Conectando...').then(m => {
                                      Canalvoz.join().then(() => {
                                           m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
                                     }).catch(error => message.channel.send(error));
                                 }).catch(error => message.channel.send(error));
                                }
                            }
                            if (message.content.startsWith(prefix + 'leave')) { 
                                let Canalvoz = message.member.voiceChannel;
                                if (!Canalvoz) {
                                    message.channel.send('No estoy en un canal de voz.');
                                } else {
                                    message.channel.send('Dejando el canal de voz.').then(() => {
                                    Canalvoz.leave();
                                    }).catch(error => message.channel.send(error));
                                }   
                            }
                            if (message.content.startsWith(prefix + 'play')) {
                                if (!message.guild.voiceConnection) return message.channel.send('¡No estoy en un canal de voz!, use `-join` para unirme a un canal.').catch(error => message.channel.send(error));
                                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/Desktop/musica/audio.mp3`);
                            }
                            if (message.content.startsWith(prefix + 'ytplay')) {
                                const ytdl = require('ytdl-core');
                            
                                let voiceChannel = message.member.voiceChannel;
                                if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
                                if(!args) return message.channel.send('Ingrese un enlace de youtube para poder reproducirlo.');
                                voiceChannel.join()
                                  .then(connection => {
                                    const url = ytdl(args, { filter : 'audioonly' });
                                    const dispatcher = connection.playStream(url);
                                    message.channel.send('Reproduciendo ahora: '+ args);
                                    message.delete();
                                  })
                                  .catch(console.error);
                              }
                              


});
client.login(config.token);     
 
   
            

        
