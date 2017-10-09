    var for_you=[], chosen_pokemon;

    function get_user_info(){
       var personality = document.querySelector('input[name="personality"]:checked').value,
       zodiac=document.getElementById("zodiac").value,
       visit=document.getElementById("visit").value;
        //console.log(personality + zodiac + visit);
        $("#top").css("position", "relative").css("top", "-10px");
        setInterval(function(){
            $("#top").css("position", "static").css("top", "+10px");
            }, 500);

        personality_pokemon(personality);
        zodiac_pokemon(zodiac);
        visit_pokemon(visit);
        show_chosen_pokemon();
        get_pokemon_info()
    }

    function personality_pokemon(personality){
        
        switch(personality) {
            case "Intense":
                for_you.push("Venusaur","Blastoise","Charizard","Arcanine","Mewtwo","Rapidash","Rhydon","Gyarados","Tauros","Zapdos","Moltres");
                break;
            case "Calm":
                for_you.push("Metapod","Snorlax","Psyduck","Persian","Abra","Slowpoke","Slowbro","Drowzee");
                break;
            case "Shy":
                for_you.push("Jigglypuff","Ghastly","Haunter","Pidgey","Bulbasaur","Articuno","Shellder","Chansey","Lapras","Caterpie","Cubone");
                break;
             case "Funny":
                for_you.push("Mr. Mime","Meowth","Doduo","Grimer","Muk","Exeggutor","Lickitung");
                break;
        }
    }

    function visit_pokemon(visit){
        switch(visit){
            //Since where you visit matters more, I add twice the amount
            case "Beach":
                for_you.push("Staryu","Squirtle","Blastoise","Seel","Goldeen","Seadra","Tentacool","Krabby","Machamp","Staryu","Squirtle","Blastoise","Seel","Goldeen","Seadra","Tentacool","Krabby","Machamp");
                break;

            case "Lake":
                for_you.push("Goldeen","Squirtle","Psyduck","Golduck","Vaporeon","Goldeen","Squirtle","Psyduck","Golduck","Vaporeon");
                break;

            case "Jungle":
                for_you.push("Bulbasaur","Ivysaur","Venusaur","Beedrill","Kakuna","Venonat","Paras","Oddish","Gloom","Vileplume","Mankey","Bulbasaur","Ivysaur","Venusaur","Beedrill","Kakuna","Venonat","Paras","Oddish","Gloom","Vileplume","Mankey");
                break;

            case "Mountains":
                for_you.push("Onix","Geodude","Graveler","Sandshrew","Diglett","Dugtrio","Onix","Geodude","Graveler","Sandshrew","Diglett","Dugtrio");
                break;

            case "Desert":
                for_you.push("Charmander","Sandshrew",'Sandslash',"Ekans","Aerodactyl","Omanyte","Kabutops","Moltres","Charmander","Sandshrew",'Sandslash',"Ekans","Aerodactyl","Omanyte","Kabutops","Moltres")
                break;

            case "Snow":
                for_you.push("Seel","Dewgong","Shellder","Cloyster","Articuno","Charmeleon","Moltres","Charizard","Magmar","Seel","Dewgong","Shellder","Cloyster","Articuno","Charmeleon","Moltres","Charizard","Magmar");
                break;

            case "Countryside":
                for_you.push("Rapidash","Jigglypuff","Tauros","Rapidash","Jigglypuff","Tauros");
                break;
        }
    }


        function zodiac_pokemon(zodiac){
        switch(zodiac){
            case "Aries":
            for_you.push("Pikachu","Raichu","Electrode");
                break;
            case "Taurus":
            for_you.push("Tauros","Chansey","Jynx","Cubone","Meowth");
                break;
            case "Gemini":
            for_you.push("Ditto","Mewtwo");
                break;
            case "Cancer":
            for_you.push("Kangaskhan","Sandshrew","Jigglypuff","Marowak");
                break;
            case "Leo":
            for_you.push("Mew","Arcanine","Growlithe");
                break;
            case "Virgo":
            for_you.push("Mewtwo","Alakazam","Kadabra","Clefairy");
                break;
            case "Libra":
            for_you.push("Lapras","Chansey","Jynx","Bulbasaur","Weezing");
                break;
            case "Scorpio":
            for_you.push("Victreebel","Graveler","Voltorb","Dragonair");
                break;
            case "Saggitarius":
            for_you.push("Kadabra","Alakazam","Pikachu","Snorlax");
                break;
            case "Capricorn":
            for_you.push("Arbok","Weezing","Meowth","Machoke","Gengar");
                break;
            case "Acquarius":
            for_you.push("Staryu","Starmie","Poliwhirl","Golduck","Kingler","Eevee");
                break;
            case "Pisces":
            for_you.push("Seaking","Farfetch\'d","Jigglypuff","Cubone","Tangela");
                break;
        }
    }

    function show_chosen_pokemon(){
        var ranum=Math.floor(Math.random() * for_you.length);
        chosen_pokemon=for_you[ranum];
        $("#pokemon").text("received "+chosen_pokemon+"!"); 
    }

    function get_pokemon_info(){
      var p=(pokemon.indexOf(chosen_pokemon)+1);
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/"+p,
      dataType: 'json',

      success: function(data) {
        console.log(data.name.toUpperCase()+ " weighs "+data.weight + " lbs.");
        //Add more
      }

    });
       
    }


    var pokemon=["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch\'d","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

    