(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Camel",image:"http://pngimg.com/uploads/camel/camel_PNG2920.png",clicks:0},{id:2,name:"Tiger",image:"http://pluspng.com/img-png/cute-wild-animal-png-animals-clipart-png-cartoon-animals-png-cute-animal-png-wild-animals-png-animals-png-image-cute-animal-png-4-1091.png",clicks:0},{id:3,name:"Bear",image:"http://pluspng.com/img-png/animal-png-grizzly-bear-photo-600.png",clicks:0},{id:4,name:"Squirrel",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhl-WTYMrCBL385x3_cYVHAbBi0wuuMd7xplERt8mzd7-_ruI6Aw",clicks:0},{id:5,name:"Snake",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVIyER_w0R8lQsMwJt1tIF83iY69ZH1C6lFN8daZqGxhvOxA3",clicks:0},{id:6,name:"Kittens",image:"https://morepng.com/public/uploads/thumbnail//animals-png-3-11527493501btsbc8nql4.png",clicks:0},{id:7,name:"Bunny",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kwqx8yrk_lUYJy93vNjy6QsZET_iksxzSV3maNG1pJTaAvqM",clicks:0},{id:8,name:"Dog",image:"https://morepng.com/public/uploads/thumbnail//animals-png-28-11527496414zuaxpbtafu.png",clicks:0},{id:9,name:"Bird",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YhUFXih0V9J5Xcs3UUy795fIsBxVT0Gw7Ozwzes1Nnq2rF77",clicks:0},{id:10,name:"Deer",image:"https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/06/30085643/Deer-PNG-Image.png",clicks:0},{id:11,name:"Cat",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2P3lWm0So8QU7u1ytqz_uJrm9ZMOrTucyX57Iz_TS0ARHmXX6IQ",clicks:0},{id:12,name:"Dog2",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Q182vlrOqHHUKceanYqvWJR1cjY3xG9h693gaf5YEXsEKI_rMw",clicks:0}]},,,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),s=a.n(i),r=a(4),m=a(5),l=a(7),o=a(6),p=a(8);a(15);var g=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.clickImage(e.id)}})))},u=(a(17),function(e){return c.a.createElement("div",{className:"true"===e.moveWrap?"wrapperShake":"wrapper"},e.children)}),d=a(1);a(19);var h=function(e){return c.a.createElement("div",{className:"title"},c.a.createElement("div",{className:"score"},e.children))},k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={image:d,message:"",score:0,topScore:0,clicked:[],move:"false"},a.clickImage=function(e){var t=a.shuffleArray(d);a.setState({image:t}),a.state.clicked.includes(e)?a.setState({score:0,clicked:[],message:"You guessed incorrectly!",move:"true"}):a.setState({clicked:a.state.clicked.concat([e]),score:a.state.score+1,message:"Correct!",move:"false"}),a.state.score>a.state.topScore&&a.setState({topScore:a.state.score})},a.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(u,null,c.a.createElement(h,null,c.a.createElement("p",null,"Score: ",this.state.score),c.a.createElement("p",null," ",this.state.message," "),c.a.createElement("p",null,"Top Score: ",this.state.topScore," ")),this.state.image.map(function(t){return c.a.createElement(g,{clickImage:e.clickImage,id:t.id,key:t.id,image:t.image,score:e.state.score})}))}}]),t}(n.Component);a(21);s.a.render(c.a.createElement(k,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.d61c69d1.chunk.js.map