# Event

## Callback

Un callback c'est une fonction transmise à une 2ème fonction en argument. La 2ème fonction pourra alors décidé d'executer la première quand elle le souhaite

```js
// on peut passer un argument lorsqu'on execute une fonction qui attend un paramètre
function test(param) {
    console.log(param); 
}

test(123); // ---> 123

// de la même manière qu'on peut passer un number, un boolean, un object, une string, ... on peut passer une fonction en argument
function test(param) {
    console.log(param); 
}

test(function() { 
    alert('Coucou');
}); // ---> f() { alert('Coucou') }

// ou via une fonction nommée
function test(param) {
    console.log(param); 
}

function coucou() {
    alert('Coucou');
}

test(coucou); // f() { alert('Coucou') }

// la première fonction peut décider d'executer la fonction qu'elle reçoit en paramètre, c'est le principe
function test(param) {
    console.log(param); 
    param();
}

test(function() {
    alert('Salut');
});

function coucou() {
    alert('Coucou');
}

test(coucou);
```

## Les events

La notions d'événements est une notion propre au développeur front. Les événements sont des choses qui se passent dans le navigateur auquelles on pourra réagir, par exemple : le click sur un bouton, le double click sur un lien, la soumission d'un formulaire, le fait de cocher une checkbox, le fait de survoler une div bien prévise. Il s'agit en fait de réagir aux intéractions de l'utilisateur.

Le navigateur (le logiciel qu'on utilise pour consulter nos pages web) capte les intéractions de l'utilisateur avec la page, ces intéractions peuvent êtres :

- Des actions de la souris (clic, survol)
- Des actions du clavier (appuyer sur une touche)
- Des interactions avec un formlaire (envoi du formulaire)
- ...

Dans nos script nous allons pouvoir réagir à ces événements en faisant ce qu'on veut en réaction. On pourra dire "chaque fois que l'événement clic a lieu sur tel bouton, je réagis en executant une série d'instructions"

## Pour la faire courte  

- Pour ajouter un écouteur, on part d'un élement
- On prépare une fonction qui dit quoi faire quand l'événement a lieu
- On enregistre l'événement sur l'élement
  
```js
// je cible un élement existant
var element = document.getElementById('test');

// je prépare quoi faire
function sayHello(event) {
    alert('hello');
    console.log(event);
}

// je pose mon écouteur
element.addEventListener('click', sayHello);
```

Ou encore

```js
// je crée un nouvel élement
var newElement = document.createElement('div');

// je pose mon écouteur, ici la fonction est dite anonyme
newElement.addEventListener('mouseenter', function(event) {
    alert('hello');
    console.log(event);
});
```
