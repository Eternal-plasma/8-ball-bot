const Discord = require('discord.js');
var quotes = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes – definitely', 'You may rely on it', 'As I see it yes', 'Most likely', 'Outlook good', 'Yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don’t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']
const bot = new Discord.Client();
const token = 'token_here';
bot.login(token);
bot.on('ready', () =>{
    console.log('This bot is on')
});

                                                                                                                           
bot.on('message', msg=>{                                                                                                   
                                                                                                                           
    function randomQuote() {                                                                                               
        return quotes[Math.floor(Math.random() * quotes.length)];                                                          
    };                                                                                                                     
    const prefix = "?";                                                                                                    
                                                                                                                           
    if (msg.content.endsWith(prefix))                                                                                      
    {                                                                                                                      
        msg.reply(randomQuote());                                                                                          
    } 
    if (msg.author.bot == false){
        if (msg.content.includes("kill"))
        {
            msg.reply("My sources say there should be no killing of yourself or others, please call the suicide hotline 800-273-8255 to get help. You are loved");
        }      
    }
                                                                                                                   
});
