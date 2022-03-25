//button
let bouton;
let playButton;
let pauseButton;
let slide;
let textSlide;

//parts
let myPart;

//boolean
let chosen = false;

//instruments
let hardInstru;
let mediumInstru;
let cymbalsInstru;


  //arrays
let beatsHard = [];
let beatsMedium = [];
let beatsCymbals = [];
let rand;


  //loading
let counter = 0;
let loading = true;
let totalSounds = 37;

//hardPat
let hardPat0 = [0,0,2,0,0,2,0,0,2,0,0,2];
let hardPat1 = [0,0,2,0,0,2,0,0,2,0,0,0];
let hardPat2 = [0,0,2,0,2,0,0,0,2,0,2,0];
let hardPat3 = [0,0,2,0,2,0,0,0,2,0,2,0];
let hardPatAll = [];
let hardPatChosen = [];
let hardPhrase;

//mediumPat
let mediumPat0 = [0,0,0,1,1,0,1,1,0,0,0,0];
let mediumPat1 = [0,1,0,0,1,0,0,0,0,1,1,0];
let mediumPat2 = [1,1,0,0,1,0,0,1,0,0,0,0];
let mediumPat3 = [0,0,0,0,0,0,0,1,0,1,0,0];
let mediumPatAll = [];
let mediumPatChosen = [];
let mediumPhrase;

//cymbalsPart
let cymbalsPat0 = [0,0,0,0,0,0,0,0,0,0,0,2];
let cymbalsPat1 = [0,0,0,0,0,2,0,0,0,0,0,2];
let cymbalsPat2 = [0,0,0,0,0,2,0,0,0,0,0,2];
let cymbalsPat3 = [0,0,0,0,0,2,0,0,0,0,0,2];
let cymbalsPatAll = [];
let cymbalsPatChosen = [];
let cymbalsPhrase;

function beatsHardLoading(filename) {
    loadSound(filename, beatsHardLoaded);

    function beatsHardLoaded(sound) {
      beatsHard.push(sound);

      counter++;
      if (counter == totalSounds) {
        loading = false;
      }
    }
  }
  
function beatsMediumLoading(filename) {
    loadSound(filename, beatsMediumLoaded);

    function beatsMediumLoaded(sound) {
      beatsMedium.push(sound);

      counter++;
      if (counter == totalSounds) {
        loading = false;
      }
    }
  }
  
function beatsCymbalsLoading(filename) {
    loadSound(filename, beatsCymbalsLoaded);

    function beatsCymbalsLoaded(sound) {
      beatsCymbals.push(sound);

      counter++;
      if (counter == totalSounds) {
        loading = false;
      }
    }
  }
  


  
setup = function() {
 
  //beats hard
beatsHardLoading("sounds/hard/clack.wav");
beatsHardLoading("sounds/hard/clack1.wav");
beatsHardLoading("sounds/hard/clap.wav");
beatsHardLoading("sounds/hard/fingerclack.wav");
beatsHardLoading("sounds/hard/fingerclack1.wav");
beatsHardLoading("sounds/hard/hit.wav");
beatsHardLoading("sounds/hard/keyboard.wav");
beatsHardLoading("sounds/hard/pop.wav");
beatsHardLoading("sounds/hard/pop1.wav");
beatsHardLoading("sounds/hard/smack.wav");
beatsHardLoading("sounds/hard/tak.wav");
beatsHardLoading("sounds/hard/tak1.wav");
beatsHardLoading("sounds/hard/woodclink.wav");

  //beats medium
beatsMediumLoading("sounds/medium/clink.wav");
beatsMediumLoading("sounds/medium/closefla.wav");
beatsMediumLoading("sounds/medium/crunch.wav");
beatsMediumLoading("sounds/medium/ff.wav");
beatsMediumLoading("sounds/medium/fla.wav");
beatsMediumLoading("sounds/medium/friction.wav");
beatsMediumLoading("sounds/medium/frrr.wav");
beatsMediumLoading("sounds/medium/gasp.wav");
beatsMediumLoading("sounds/medium/hk.wav");
beatsMediumLoading("sounds/medium/hou.wav");
beatsMediumLoading("sounds/medium/inhale.wav");
beatsMediumLoading("sounds/medium/scratch.wav");
beatsMediumLoading("sounds/medium/shh.wav");
beatsMediumLoading("sounds/medium/slide.wav");
beatsMediumLoading("sounds/medium/slide1.wav");
beatsMediumLoading("sounds/medium/ss.wav");
beatsMediumLoading("sounds/medium/ssss.wav");
beatsMediumLoading("sounds/medium/wood.wav");
  
  //cymbals
beatsCymbalsLoading("sounds/cymbals/bell.wav");
beatsCymbalsLoading("sounds/cymbals/ding.wav");
beatsCymbalsLoading("sounds/cymbals/doubleding.wav");
beatsCymbalsLoading("sounds/cymbals/metalclink.wav");
beatsCymbalsLoading("sounds/cymbals/singleding.wav");
beatsCymbalsLoading("sounds/cymbals/softding.wav");
  
  
  cnv = createCanvas(400,400);
  cnv.position(windowWidth/2-200,windowHeight/2-200);
  cnv.mousePressed(playBeats)
  background(255);
  
  
  //button
  bouton = createButton("Nouvelle combinaison");
  bouton.position(windowWidth/2-200,windowHeight/2-200);
  bouton.size(200,30);
  bouton.mousePressed(chooseInstru);
  bouton.hide();
  
   
  playButton = createImg("playbutton.png", "Play");
  playButton.position(windowWidth/2-100,windowHeight/2-100);
  playButton.size(200,200);
  playButton.mousePressed(playBeats);
  playButton.hide();
  
  pauseButton = createImg("pausebutton.png", "Pause");
  pauseButton.position(windowWidth/2-100,windowHeight/2-100);
  pauseButton.size(200,200);
  pauseButton.mousePressed(pauseBeats);
  pauseButton.hide();
  
  
 slide = createSlider(50, 90, 65, 5);
slide.position(windowWidth/2-20,windowHeight/2+150);
  slide.hide();
  
  
  hardPatAll.push(hardPat0);
  hardPatAll.push(hardPat1);
  hardPatAll.push(hardPat2);
  hardPatAll.push(hardPat3);
  
  mediumPatAll.push(mediumPat0);
  mediumPatAll.push(mediumPat1);
  mediumPatAll.push(mediumPat2);
  mediumPatAll.push(mediumPat3);
  
  cymbalsPatAll.push(cymbalsPat0);
  cymbalsPatAll.push(cymbalsPat1);
  cymbalsPatAll.push(cymbalsPat2);
  cymbalsPatAll.push(cymbalsPat3);  
  
}


playHard = function(time, playbackRate){
hardInstru.rate(playbackRate);
hardInstru.play(time);  
}

playMedium = function(time, playbackRate){
 
mediumInstru.rate(playbackRate);
mediumInstru.play(time);  
}

playCymbals = function(time, playbackRate){
 
cymbalsInstru.rate(playbackRate);
cymbalsInstru.play(time);  

}


  
playBeats = function(){
  
  playButton.hide();
  pauseButton.show();
   userStartAudio();
  myPart.pause();
   myPart.start();
  
  myPart.loop();
}

pauseBeats = function(){
  pauseButton.hide();
  playButton.show();
   myPart.stop();
}

draw = function() {
  if (loading) {
      background(0);
      stroke(255);
      noFill();
      rect(windowWidth/2-100, windowHeight/2-10, 200, 20);

      noStroke();
      fill(255);
      var w = (200 * counter) / totalSounds;
      rect(windowWidth/2-100, windowHeight/2-10, w, 20);
     
    } else {
background(255,0,150);
textSize(20);
text("Vitesse:",100,365)      
      if(chosen){
      myPart.setBPM(slide.value()); 
      }

      if (!chosen){
        chooseInstru();  
        bouton.show();
        playButton.show();
        slide.show();
        
      }
         
    }
}




chooseInstru = function(){
  

    //instruments
  
  //hard
  rand = floor(random(beatsHard.length));
  
  hardInstru = beatsHard[rand];
  hardInstru.amp(40);
  
  
  //medium
   rand = floor(random(beatsMedium.length));
  
  mediumInstru = beatsMedium[rand];
  mediumInstru.amp(40);
  
  //cymbals
  rand = floor(random(beatsCymbals.length));
  
  cymbalsInstru = beatsCymbals[rand];
  cymbalsInstru.amp(5); 
  
  
  
   //beats
  
  //hard
   
  
    for(i=0;i<12;i++){
  rand = floor(random(4));
  hardPatChosen.push(hardPatAll[3][1]);
  }
  hardPatAll.splice(rand,1);
  
  
   for(i=0;i<12;i++){
  rand = floor(random(3));
  hardPatChosen.push(hardPatAll[rand][i]);
   }
  hardPatAll.splice(rand,1);
   
  
   for(i=0;i<12;i++){
  rand = floor(random(2));
  hardPatChosen.push(hardPatAll[rand][i]);
   }
  hardPatAll.splice(rand,1);
   
  
   for(i=0;i<12;i++){
  hardPatChosen.push(hardPatAll[0][i]);
   }
  hardPatAll.splice(0,1);
   
  

  //medium
  
   for(i=0;i<12;i++){
  rand = floor(random(4));
  mediumPatChosen.push(mediumPatAll[rand][i]);
   }
  mediumPatAll.splice(rand,1);
   
  
    for(i=0;i<12;i++){
  rand = floor(random(3));
  mediumPatChosen.push(mediumPatAll[rand][i]);
    }
  mediumPatAll.splice(rand,1);
  
  
    for(i=0;i<12;i++){
  rand = floor(random(2));
  mediumPatChosen.push(mediumPatAll[rand][i]);
    }
  mediumPatAll.splice(rand,1);
    
  
  for(i=0;i<12;i++){
  mediumPatChosen.push(mediumPatAll[0][i]);
  }
  mediumPatAll.splice(0,1);
  

  
  //cymbals
  
   for(i=0;i<12;i++){
  rand = floor(random(4));
  cymbalsPatChosen.push(cymbalsPatAll[rand][i]);
   }
  cymbalsPatAll.splice(rand,1);
   
  
   for(i=0;i<12;i++){
  rand = floor(random(3));
  cymbalsPatChosen.push(cymbalsPatAll[rand][i]);
   }
  cymbalsPatAll.splice(rand,1);
   
  
   for(i=0;i<12;i++){
  rand = floor(random(2));
  cymbalsPatChosen.push(cymbalsPatAll[rand][i]);
   }
  cymbalsPatAll.splice(rand,1);
   
     
   for(i=0;i<12;i++){
  cymbalsPatChosen.push(cymbalsPatAll[0][i]);
   }
  cymbalsPatAll.splice(0,1);
  
  
  
      //reset beats
  hardPatAll.push(hardPat0);
  hardPatAll.push(hardPat1);
  hardPatAll.push(hardPat2);
  hardPatAll.push(hardPat3);
  
  mediumPatAll.push(mediumPat0);
  mediumPatAll.push(mediumPat1);
  mediumPatAll.push(mediumPat2);
  mediumPatAll.push(mediumPat3);
  
  cymbalsPatAll.push(cymbalsPat0);
  cymbalsPatAll.push(cymbalsPat1);
  cymbalsPatAll.push(cymbalsPat2);
  cymbalsPatAll.push(cymbalsPat3);  
  
    if(!chosen){
    //Phrases
hardPhrase = new p5.Phrase("hard", playHard, hardPatChosen);  
mediumPhrase = new p5.Phrase("medium", playMedium, mediumPatChosen);  
cymbalsPhrase = new p5.Phrase("cymbals", playCymbals, cymbalsPatChosen);
  
  //Parts
myPart = new p5.Part();
myPart.addPhrase(hardPhrase);
myPart.addPhrase(mediumPhrase);
myPart.addPhrase(cymbalsPhrase);
myPart.setBPM(slide.value());
    }

  
  chosen = true;
}
