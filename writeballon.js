$(function(){
    $('#career').balloon({
     position: "right", showDuration: 500, hideDuration: 0,
     css: {
       "font-family": "Good Times",
       "opacity": "0.8",
       "color": "#26d0c9",
       "font-size": "16px",
       "border-radius": "10px",
       "border": "solid 2px #26d0c9",
       "padding": "10px"
     },
     contents: '<p>Apr 2014 - current B.Sc IT <a href = "http://www.seikei.ac.jp/university/eng/" class = "bright">Seikei Uni</a><br><br>'
              +'　　　　　　　　　　　　　MJR : Computer & Information Science<br>'
              +'　　　　　　　　　　　　　<a href = "http://www.yomiuri.co.jp/adv/seikei/interview07.html" class = "bright">International course</a><br>'
              +'　　　　　　　　　　　　　1st prize of long distance race (2015)<br><br><br><br>'
              +'Mar 2016 - current <a href = "https://lifeistech.co.jp/en/" class = "bright">Life is Tech!</a> Mentor / Internship<br><br>'
              +'　　　　　　　　　　　　　Minecraft / MediaArt / Maya Mentor<br>'
              +'　　　　　　　　　　　　　<a href = "https://en.mozer.io/" class = "bright">MOZER</a> - IT learning text developer<br><br><br><br>'
              +'Feb 2017 - current <a href = "https://www.youtube.com/channel/UCUwe_HaOMhG1-4hpL-OhYcA/videos" class = "bright">Youtube</a> youtuber</p>',
    html:true
    });

   $('#skill').balloon({
    position: "right", offsetY: 100, showDuration: 500, hideDuration: 0,
    css: {
      "font-family": "Good Times",
      "opacity": "0.8",
      "color": "#26d0c9",
      "font-size": "16px",
      "border-radius": "10px",
      "border": "solid 2px #26d0c9",
      "padding": "10px"
    },
    contents: '<p>programming<br><br>'
             +'<p class = "back"><img src = "img/cpp.png"><img src = "img/java.png"><img src = "img/js.png"><img src = "img/perl.png"><img src = "img/html.png"><img src = "img/css.png"></p><br><br>'
             +'creative<br><br>'
             +'<p class = "back"><img src = "img/ps.png"><img src = "img/ai.png"><img src = "img/pr.png"><img src = "img/ae.png"><img src = "img/maya.png"><img src = "img/im.png"></p><br><br>'
             +'language<br><br>'
             +'　　Japanese　　English　　korean<br>',
    html:true
   });
   $('#mind').balloon({
    position: "right", offsetY: 100, showDuration: 500, hideDuration: 0,
    css: {
      "font-family": "Good Times",
      "opacity": "0.8",
      "color": "#26d0c9",
      "font-size": "16px",
      "border-radius": "10px",
      "border": "solid 2px #26d0c9",
      "padding": "10px"
    },
    contents: '<p class = "big">Always thinking about new & interesting things<br><br>'
              +'if I make you happy, you also make me happy<br><br>'
              +'Im gonna make it, so dont be hurry<br></p>',
    html:true
   });
  });