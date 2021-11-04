
    var groupRuleER =
    `<p><u>Présent de l'indicatif</u></p>
    <p>Je XXXX<strong>e</strong></p>
    <p>Tu XXXX<strong>es</strong></p>
    <p>Il, elle XXXX<strong>e</strong></p>
    <p>Nous XXXX<strong>ons</strong></p>
    <p>Vous XXXX<strong>ez</strong></p>
    <p>Ils, elles XXXX<strong>ent</strong></p>`;
  var groupRuleIR =
    `<p><u>Présent de l'indicatif</u></p>
    <p>Je XXXX<strong>is</strong></p>
    <p>Tu XXXX<strong>is</strong></p>
    <p>Il, elle XXXX<strong>it</strong></p>
    <p>Nous XXXX<strong>issons</strong></p>
    <p>Vous XXXX<strong>issez</strong></p>
    <p>Ils, elles XXXX<strong>issent</strong></p>`;
  var groupRuleRE =
    `<p><u>Présent de l'indicatif</u></p>
    <p>Je XXXX<strong>s</strong></p>
    <p>Tu XXXX<strong>s</strong></p>
    <p>Il, elle XXXX<strong></strong></p>
    <p>Nous XXXX<strong>ons</strong></p>
    <p>Vous XXXX<strong>ez</strong></p>
    <p>Ils, elles XXXX<strong>ent</strong></p>`;

  // function conjugate() {
  //   var theVerb = document.getElementById('inputVerb').value;
  //   var theRoot = theVerb.substr(0, theVerb.length - 2);
  //   switch (theVerb.substr(-2)) {
  //       case 'er':
  //         getResponse(groupRuleER);
  //         break;
  //       case 'ir':
  //         getResponse(groupRuleIR);
  //         break;
  //       case 're':
  //         getResponse(groupRuleRE);
  //         break;
  //       default:
  //         document.getElementById('response').innerHTML = "I don't know how to conjugate this verb";
  //         break;
  //     }
  // }

  // function getResponse(theRule) {
  //   var theVerb = document.getElementById('inputVerb').value.toLowerCase();
  //   document.getElementById('response').innerHTML = theRule.replace(/XXXX/g, theVerb.substr(0, theVerb.length - 2));
  // }