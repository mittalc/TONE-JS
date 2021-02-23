
//create a synth and connect it to the main output (your speakers)
function play1(){
   var synth = new Tone.Synth().toDestination();
   console.log(synth);
    play(synth);
}

function play2(){
    var synth = new Tone.AMSynth().toDestination();
    console.log(synth);
    play(synth);
 }

 function play3(){
    var synth = new Tone.FMSynth().toDestination();
    console.log(synth);
    play(synth);
    
 }
function play(synth){
    console.log("now"+synth)

    
     
    // const btn = document.querySelector('#btn');
    // // handle click button
    // btn.onclick = function () {
    //     const rbs = document.querySelectorAll('input[name="choice"]');
    //     let selectedValue;
    //     for (const rb of rbs) {
    //         if (rb.checked) {
    //             selectedValue = rb.value;
    //             console.log(selectedValue)
    //             break;
    //         }
    //     }
    // };


    //     if(selectedValue="am"){
    //       synth = new Tone.AMSynth().toDestination();
    //    }else if(selectedValue="fm"){
    //         synth = new Tone.FMSynth().toDestination();
    //    }else {
    //         synth = new Tone.Synth().toDestination();
    //          }           
    //    console.log(synth);  
synth.oscillator.type = "sine";
synth.toMaster();

const piano = document.getElementById("piano");

piano.addEventListener("mousedown", e => {
  synth.triggerAttack(e.target.dataset.note);
});

piano.addEventListener("mouseup", e => {
  synth.triggerRelease();
});

document.addEventListener("keydown", e => {
  switch (e.key) {
    case "C4":
      return synth.triggerAttackRelease("C4","now");
    case "C#4":
      return synth.triggerAttack("C#4","now");
    case "D4":
      return synth.triggerAttack("D4","now");
    case "D#4":
      return synth.triggerAttack("D#4","now");
    case "E4":
      return synth.triggerAttack("E4","now");
    case "F4":
      return synth.triggerAttack("F4","now");
    case "F#4":
      return synth.triggerAttack("F#4","now");
    case "G4":
      return synth.triggerAttack("G4","now");
    case "G#4":
      return synth.triggerAttack("G#4","now");
    case "A4":
      return synth.triggerAttack("A4","now");
    case "A#4":
      return synth.triggerAttack("A#4","now");
    case "B4":
      return synth.triggerAttack("B4","now");
      case "C5":
        return synth.triggerAttackRelease("C5","now");
      case "C#5":
        return synth.triggerAttack("C#5","now");
      case "D5":
        return synth.triggerAttack("D5","now");
      case "D#5":
        return synth.triggerAttack("D#5","now");
      case "E5":
        return synth.triggerAttack("E5","now");
      case "F5":
        return synth.triggerAttack("F5","now");
      case "F#5":
        return synth.triggerAttack("F#5","now");
      case "G5":
        return synth.triggerAttack("G5","now");
      case "G#5":
        return synth.triggerAttack("G#5","now");
      case "A5":
        return synth.triggerAttack("A5","now");
      case "A#5":
        return synth.triggerAttack("A#5","now");
      case "B5":
        return synth.triggerAttack("B5","now");  
    default:
      return;
  }
});

document.addEventListener("keyup", e => {
  switch (e.key) {
    case "C4":
    case "C#4":
    case "D4":
    case "D#4":
    case "E4":
    case "F4":
    case "F#4":
    case "G4":
    case "G#4":
    case "A4":
    case "A#4":
    case "B4":
    case "C5":
    case "C#5":
    case "D5":
    case "D#5":
    case "E5":
    case "F5":
    case "F#5":
    case "G5":
    case "G#5":
    case "A5":
    case "A#5":
    case "B5":    
       synth.triggerRelease(); 
  }
});
}