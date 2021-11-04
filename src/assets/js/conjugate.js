let theVerb = document.querySelector('#inputVerb');
let buttonConjugate = document.querySelector('#conjugate-button');
let errMessage = document.querySelector('#error-message');

buttonConjugate.addEventListener('click', e => {
  e.preventDefault();
  if (!theVerb.value) {
    errMessage.textContent = 'Enter a verb!';
    return false;
  } else {
    conjugate();
    return false;
  }
})

// The entry point function
async function conjugate() {
  let allVerbs = await getVerbs();
  let theVerbForms = await getVerbConjugations(theVerb, allVerbs);
  console.info("Made it to getHTML")
  getHTML(theVerbForms);
}

// Read verb.js file and return all verbs
async function getVerbs() {
  let url = '/assets/js/verbs.json';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("ERROR - func getVerbs: " + error);
  }
};

// Read all verbs and retrieve conjugated raw verb forms
async function getVerbConjugations(theVerb, allVerbs) {
  try {
    for (let i = 0; i < allVerbs.length; i++) {
      console.info(allVerbs[i].infinitif.présent[0].value)
      if (allVerbs[i].infinitif.présent == theVerb.value) {
        return allVerbs[i];
      }
    }
  } catch (error) {
    console.error("ERROR - func getVerbConjugations: " + error);
  }
};

// Functions for generating correct tenses
// Indicatif
function getGeneral(tense) {
  let table = "<p>Je " + tense[0] + "<br>" +
  "Tu " + tense[1] + "<br>" +
  "Il, elle " + tense[2] + "<br>" +
  "Nous " + tense[3] + "<br>" +
  "Vous " + tense[4] + "<br>" +
  "Ils, elles " + tense[5] + "</p>";
  return table;
}
function getPasséComposé(tense) {
  let table = "<p>J'ai " + tense[0] + "<br>" +
  "Tu as " + tense[1] + "<br>" +
  "Il, elle a " + tense[2] + "<br>" +
  "Nous avons " + tense[3] + "<br>" +
  "Vous avez " + tense[4] + "<br>" +
  "Ils, elles avaient " + tense[5] + "</p>";
  return table;
}
function getPlusQueParfait(tense) {
  let table = "<p>J'avais " + tense[0] + "<br>" +
  "Tu avais " + tense[1] + "<br>" +
  "Il, elle avait " + tense[2] + "<br>" +
  "Nous avions " + tense[3] + "<br>" +
  "Vous aviez " + tense[4] + "<br>" +
  "Ils, elles avaient " + tense[5] + "</p>";
  return table;
}
function getFuturAntérieur(tense) {
  let table = "<p>J'aurai " + tense[0] + "<br>" +
  "Tu auras " + tense[1] + "<br>" +
  "Il, elle aura " + tense[2] + "<br>" +
  "Nous aurons " + tense[3] + "<br>" +
  "Vous aurez " + tense[4] + "<br>" +
  "Ils, elles auront " + tense[5] + "</p>";
  return table;
}
function getPasséAntérieur(tense) {
  let table = "<p>J'eus " + tense[0] + "<br>" +
  "Tu eus " + tense[1] + "<br>" +
  "Il, elle eut " + tense[2] + "<br>" +
  "Nous eûmes " + tense[3] + "<br>" +
  "Vous eûtes " + tense[4] + "<br>" +
  "Ils, elles euront " + tense[5] + "</p>";
  return table;
}
// Subjonctif
function getSubjPrésent(tense) {
  let table = "<p>que je " + tense[0] + "<br>" +
  "que tu " + tense[1] + "<br>" +
  "qu'il, qu'elle " + tense[2] + "<br>" +
  "que nous " + tense[3] + "<br>" +
  "que vous " + tense[4] + "<br>" +
  "qu'ils, qu'elles " + tense[5] + "</p>";
  return table;
}
function getSubjPassé(tense) {
  let table = "<p>que j'aie " + tense[0] + "<br>" +
  "que tu aies " + tense[1] + "<br>" +
  "qu'il, qu'elle ait " + tense[2] + "<br>" +
  "que nous ayons " + tense[3] + "<br>" +
  "que vous ayez " + tense[4] + "<br>" +
  "qu'ils, qu'elles aient " + tense[5] + "</p>";
  return table;
}
function getSubjImparfait(tense) {
  let table = "<p>que je " + tense[0] + "<br>" +
  "que tu " + tense[1] + "<br>" +
  "qu'il, qu'elle " + tense[2] + "<br>" +
  "que nous " + tense[3] + "<br>" +
  "que vous " + tense[4] + "<br>" +
  "qu'ils, qu'elles " + tense[5] + "</p>";
  return table;
}
function getSubjPlusQueParfait(tense) {
  let table = "<p>que j'eusse " + tense[0] + "<br>" +
  "que tu eusses " + tense[1] + "<br>" +
  "qu'il, qu'elle eût " + tense[2] + "<br>" +
  "que nous eussions " + tense[3] + "<br>" +
  "que vous eussiez " + tense[4] + "<br>" +
  "qu'ils, qu'elles eussent " + tense[5] + "</p>";
  return table;
}
// Conditionnel
function getCondPrésent(tense) {
  let table = "<p>Je " + tense[0] + "<br>" +
  "Tu " + tense[1] + "<br>" +
  "Il, elle " + tense[2] + "<br>" +
  "Nous " + tense[3] + "<br>" +
  "Vous " + tense[4] + "<br>" +
  "Ils, elles " + tense[5] + "</p>";
  return table;
}
function getCondPassé1(tense) {
  let table = "<p>J'aurais " + tense[0] + "<br>" +
  "Tu aurais " + tense[1] + "<br>" +
  "Il, elle aurait " + tense[2] + "<br>" +
  "Nous aurions " + tense[3] + "<br>" +
  "Vous auriez " + tense[4] + "<br>" +
  "Ils, elles auraient " + tense[5] + "</p>";
  return table;
}
function getCondPassé2(tense) {
  let table = "<p>J'eusse " + tense[0] + "<br>" +
  "Tu eusses " + tense[1] + "<br>" +
  "Il, elle eût " + tense[2] + "<br>" +
  "Nous eussions " + tense[3] + "<br>" +
  "Vous eussiez " + tense[4] + "<br>" +
  "Ils, elles eussent " + tense[5] + "</p>";
  return table;
}


function getHTML(verb) {
  // document.getElementById('theVerb').innerHTML = verb.infinitif.présent;
  // Indicatif
  document.getElementById('indicative-présent').innerHTML = getGeneral(verb.indicatif["présent"]);
  document.getElementById('indicatif-passé-composé').innerHTML = getPasséComposé(verb.indicatif["passé composé"]);
  document.getElementById('indicatif-imparfait').innerHTML = getGeneral(verb.indicatif["imparfait"]);
  document.getElementById('indicatif-plus-que-parfait').innerHTML = getPlusQueParfait(verb.indicatif["plus-que-parfait"]);
  document.getElementById('indicatif-passé-simple').innerHTML = getGeneral(verb.indicatif["passé simple"]);
  document.getElementById('indicatif-passé-antérieur').innerHTML = getPasséAntérieur(verb.indicatif["passé composé"]);
  document.getElementById('indicatif-futur-simple').innerHTML = getGeneral(verb.indicatif["futur simple"]);
  document.getElementById('indicatif-futur-antérieur').innerHTML = getFuturAntérieur(verb.indicatif["futur antérieur"]);
  // Subjonctif
  document.getElementById('subjonctif-présent').innerHTML = getSubjPrésent(verb.subjonctif["présent"]);
  document.getElementById('subjonctif-passé').innerHTML = getSubjPassé(verb.subjonctif["passé"]);
  document.getElementById('subjonctif-imparfait').innerHTML = getSubjImparfait(verb.subjonctif["imparfait"]);
  document.getElementById('subjonctif-plus-que-parfait').innerHTML = getSubjPlusQueParfait(verb.subjonctif["plus-que-parfait"]);
  // Conditionnel
  document.getElementById('conditionnel-présent').innerHTML = getCondPrésent(verb.conditionnel["présent"]);
  document.getElementById('conditionnel-passé-1').innerHTML = getCondPassé1(verb.conditionnel["passé 1ère forme"]);
  document.getElementById('conditionnel-passé-2').innerHTML = getCondPassé2(verb.conditionnel["passé 2ème forme"]);

  // Impératif

  // infinitif

  // Participe


}