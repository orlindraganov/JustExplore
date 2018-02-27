const databaseFunction = (function() {
  return {
    data: {
      name: "JUST EXPLORE",
      isHome: "true",
      childNodes: [{
        name: "Sofia",
        desc: "Sofia is the capital of Bulgaria",
        likesCount: 48,
        parentName: "JUST EXPLORE",
        childNodes: [{
          name: "Telerik Academy",
          desc: "Telerik Academy provides the best IT training in stimulating and positive atmosphere.",
          imgSrc: "./images/cities/sofia/telerik-academy.jpg",
          likesCount: 45,
          parentName: "Sofia"
        }, {
          name: "The Hoof TV Tower",
          desc: "The view from the Hoof is magnificent and people often climb up there to watch the sunset",
          imgSrc: "./images/cities/sofia/the-hoof.jpg",
          likesCount: 3,
          parentName: "Sofia"
        }]
      }, {
        name: "Samokov",
        desc: "Samokov is famous for it's delicious potatoes and it's closeness to Rila",
        likesCount: 10,
        parentName: "JUST EXPLORE",
        childNodes: [{
          name: "Borovets",
          desc: "Borovets is the white gate of Rila mountain",
          imgSrc: "./images/cities/samokov/borovets.jpg",
          likesCount: 10,
          parentName: "Samokov"
        }]
      }, {
        name: "Lisets",
        desc: "Lisets is a town near Lovech",
        likesCount: 35,
        parentName: "JUST EXPLORE",
        childNodes: [{
          name: "Irina's house",
          desc: "A masterpiece of pre-war architecture, Irina's house welcomes you with cosy atmosphere and nice tea",
          imgSrc: "./images/cities/lisets/irinas-house.jpg",
          likesCount: 35,
          parentName: "Lisets"
        }]
      }, {
        name: "Burgas",
        desc: "Burgas is a big city and important port on the black sea coast",
        likesCount: 36,
        parentName: "JUST EXPLORE",
        childNodes: [{
          name: "Getting beaten by Batkas",
          desc: "Oh the long forgotten call of the wild. Oh the sounds of steps behind you.",
          imgSrc: "./images/cities/burgas/getting-beaten-by-batkas.jpg",
          likesCount: 35,
          parentName: "Burgas"
        }, {
          name: "The bridge",
          desc: "The Burgas bridge is popular place for jumping in the water, taking girls on romantic and cheap walks and general lollygagging",
          imgSrc: "./images/cities/burgas/burgas-bridge.jpg",
          likesCount: 1,
          parentName: "Burgas"
        }]
      }]
    }
  };
})();