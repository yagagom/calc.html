function zero(){
  document.getElementById('SecondNumber').value = document.getElementById('SecondNumber').value + "0"; }
 
function un(){
  document.getElementById('SecondNumber').value = document.getElementById('SecondNumber').value + "1"; }
 
function deux(){
  document.getElementById('SecondNumber').value = document.getElementById('SecondNumber').value + "2"; }
 
function trois(){
  document.getElementById('SecondNumber').value = document.getElementById('SecondNumber').value + "3"; }
 
function quatre(){
  document.getElementById('SecondNumber').value = document.getElementById('SecondNumber').value + "4"; }
 
function cinq(){
  document.getElementById('SecondNumber').value = document.getElementById('SecondNumber').value + "5"; }
 
function six(){
  document.getElementById('SecondNumber').value = document.getElementById('SecondNumber').value + "6"; }
 
function sept(){
  document.getElementById('SecondNumber').value = document.getElementById('SecondNumber').value + "7"; }
 
function huit(){
  document.getElementById('SecondNumber').value = document.getElementById('SecondNumber').value + "8"; }
 
function neuf(){
  document.getElementById('SecondNumber').value = document.getElementById('SecondNumber').value + "9"; }
 
function virgule(){
  document.getElementById('SecondNumber').value = document.getElementById('SecondNumber').value + "."; } /*Marche pas*/
 
 
 
var FirstNumberSigne;
var resultat;
 
function changeCases(){
  document.getElementById('FirstNumber').value = document.getElementById('SecondNumber').value;
  document.getElementById('SecondNumber').value = ""; }
 
function clearAll(){
  document.getElementById('SecondNumber').value = "";
  document.getElementById ('FirstNumber').value = "";
  FirstNumberSigne = 0;
  resultat = 0;}
 
function plus(){                                                             /*  Exemple valable pour les fonctions du même genre :  */
  if(document.getElementById('FirstNumber').value == "") {changeCases();}             /*  if FirstNumber vide on écrit la valeur de l'input SecondNumber dans la FirstNumber et on clearAll le SecondNumber  */
  else {egal();                                                                  /*  else on execute la f egal() (on fait l'opération avec le dernier signe demandé et on attribut la valeur à la var resultat ect.. (voir f egal() )) */
        document.getElementById('FirstNumber').value = resultat;                      /*  puis on met le resultat dans FirstNumber  */
        document.getElementById('SecondNumber').value = "";}                         /*  et on clearAll le SecondNumber  */
  FirstNumberSigne = 1; }                                                           /*  Pour finir on change FirstNumberSigne.  */
 
function moins(){
  if(document.getElementById('FirstNumber').value == "") {changeCases();}
  else  {egal();
        document.getElementById('FirstNumber').value = resultat;
        document.getElementById('SecondNumber').value = "";}
  FirstNumberSigne = 2; }
 
function fois(){
  if(document.getElementById('FirstNumber').value == "") {changeCases();}
  else  {egal();
        document.getElementById('FirstNumber').value = resultat;
        document.getElementById('SecondNumber').value = "";}
  FirstNumberSigne = 3; }
 
function divise(){
  if(document.getElementById('FirstNumber').value == "") {changeCases();}
  else  {egal();
        document.getElementById('FirstNumber').value = resultat;
        document.getElementById('SecondNumber').value = "";}
  FirstNumberSigne = 4; }
 
 
 
function egal(){
  if (FirstNumberSigne == 1) {
    resultat = parseFloat(document.getElementById('FirstNumber').value) + parseFloat(document.getElementById('SecondNumber').value);}
 
  if (FirstNumberSigne == 2) {
    resultat = parseFloat(document.getElementById('FirstNumber').value) - parseFloat(document.getElementById('SecondNumber').value);}
 
  if (FirstNumberSigne == 3) {
    resultat = parseFloat(document.getElementById('FirstNumber').value) * parseFloat(document.getElementById('SecondNumber').value);} 
 
  if (FirstNumberSigne == 4) {
    resultat = parseFloat(document.getElementById('FirstNumber').value) / parseFloat(document.getElementById('SecondNumber').value);}   
 
document.getElementById('SecondNumber').value = resultat;
document.getElementById('FirstNumber').value = ""; }
