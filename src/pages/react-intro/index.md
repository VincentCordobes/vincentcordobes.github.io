---
title: Introduction à React
date: 2016-06-06
spoiler: Une belle idée
lang: fr
---

_⚠ Ce post a été rédigé en 2016. Certaines choses ont évolué depuis..._


React est une bibliothèque javascript permettant de **construire des interfaces graphiques composables**. 

La modélisation des interfaces graphiques d'une application au cours du temps est un sujet complexe. Il est, en effet, difficile de suivre l'état d'une application, après une série d'interactions utilisateur et/ou externes.
Dans un SPA, nous ne pouvons plus compter sur des rechargements entiers d'une page web pour garder une interface synchronisée et cohérente.


## L'idée

La solution de React est de décrire “à quoi” l'application doit ressembler à n'importe quel instant donné → construction de
l'_UI_ de manière **déclarative**. Ce fonctionnement nous donne l'impression que React redessine entièrement l'interface à chaque _update_
(uniquement une impression → cf DOM virtuel) Cela rend la conception et le développement d'application considérablement plus simple et nous permet
de garder très facilement l'interface à jour avec un modèle de données.  L'élaboration de ces interfaces se fait à base de **composants React**.

On pourrait assimiler un composant React à une **fonction**.
C'est d'ailleurs l'une des 2 manières possibles d'écrire une composant React.

L'API des composants est très simple. Un composant *peut* posséder :
-   un **state**
-   des propriétés : les données d'entrées du composant → **props**
-   Une méthode **render** chargée du rendu du composant, appelée
    lorsque son *state* ou une de ses *props* changent.
-   Des méthodes liées au **cycle de vie** du composant `componentDidMount`,
    `componentWillReceiveProps` etc...)


### Écriture avec les classes ES6
Ci-dessous un composant React ayant pour seule vocation d'afficher la propriété *user*.
Si *user* change, React redessine la partie du composant ayant changé.
```jsx
class Bonjour extends React.Component {
  render() {
    return <div>Bonjour {this.props.user}</div>
  }
}
```

### Écriture sous forme de fonction 
Ce composant peut aussi être écrit sous la forme d'une fonction appelée **functional component**. 
```jsx
const Bonjour = (props) => (
  <div>Bonjour {this.props.user}</div>
)
```

Ce type de composant ne possède ~~pas de _state_~~ (cf. [Hooks](https://reactjs.org/docs/hooks-intro.html)) **pas d'instance ni 
de méthodes liées au cycle de vie** d'un composant React. Il ne s'agit que d'une
simple fonction retournant un résultat en fonction de ses arguments (les *props*)



### Dessiner un composant dans un nœud du DOM
```jsx
ReactDOM.render(
  <Bonjour user="Vincent" />,
  document.getElementById('root')
)
```
Pour dessiner le composant dans le DOM il suffit d'appeler
la méthode `ReactDOM.render` avec ledit Composant et le nœud du DOM où
l'on souhaite le dessiner.

### JSX

Le code "XML like" que retourne la méthode *render* s'appelle du **JSX**
et est un sucre syntaxique permettant de créer les nœuds React.
L'utilisation du JSX n'est pas obligatoire. Voici la correspondance du
code JSX :
```jsx
<Bonjour user="Vincent" />
```

Avec le code javascript équivalent :
```jsx
React.createElement('Bonjour', {
  user: 'Vincent'
});
```

<!-- ## On parle de container ? -->
<!--  -->
<!-- D'un point de vue architectural, nous pouvons très vite distinguer deux types de composants. -->
<!-- Redux (cf : suite de l'article) parle de **container component** (ou *smart component*) et de -->
<!-- **presentational component** (ou *dumb component*) -->
<!-- Si l'on se rapportait à une architecture _MVC_ plus traditionnelle,  -->
<!-- le premier correspondrait au **C**ontrolleur et le deuxième à la **V**ue. -->
<!-- **On sépare donc les composants responsables de la logique métier/orchestration des actions, de ceux reponsables de la vue** -->
<!--  -->
<!-- ### Exemples -->
<!-- Considérons un composant qui affiche une liste de pistes (_tracks_) provenant d'une api. -->
<!--  -->
<!-- Le code ci-dessous est **moyen** 👿, en effet un même composant **ne devrait pas** être responsable à la fois : -->
<!-- - d'aller chercher les données de l'api et potentiellement les transformer   -->
<!-- - d'afficher et mettre en forme ces données  -->
<!--  -->
<!-- Ce manque de séparation entre la vue et la logique métier peut très vite rendre le code difficile à maintenir lorsque ce dernier grossit. -->
<!--  -->
<!-- #### ✘ Un "mauvais" composant : -->
<!-- ```jsx -->
<!-- class TrackList extends React.Component { -->
<!--   state = { tracks: [] } -->
<!--  -->
<!--   componentDidMount() { -->
<!--     axios.get('/tracks') -->
<!--       .then(response => response.data) -->
<!--       .then(tracks => this.setState({ tracks })) -->
<!--       .catch(handleError); -->
<!--   } -->
<!--  -->
<!--   render() { -->
<!--     return ( -->
<!--       <ul> -->
<!--         {this.state.tracks.map(track => ( -->
<!--           <li>{track}</li> -->
<!--         ))} -->
<!--       </ul> -->
<!--     ) -->
<!--   } -->
<!-- } -->
<!-- ``` -->
<!--  -->
<!-- Nous pouvons le séparer en 2 composants, le premier étant un composant "container" et le deuxième un composant visuel. -->
<!--  -->
<!-- #### ✔ Composant _Container_ : -->
<!--  -->
<!-- ```jsx -->
<!-- // LOgic is here!!  -->
<!-- // we have completely separated our logic and our view -->
<!-- class TrackListContainer extends React.Component { -->
<!--   state = { tracks: [] } -->
<!--  -->
<!--   componentDidMount() { -->
<!--     axios.get('/tracks') -->
<!--       .then(response => response.data) -->
<!--       .then(tracks => this.setState({ tracks })) -->
<!--       .catch(handleError); -->
<!--   } -->
<!--  -->
<!--   render() { -->
<!--     // This is our view  -->
<!--     // and the `tracks` props is like our ViewModel  -->
<!--     return <TrackList tracks={this.state.tracks} /> -->
<!--   } -->
<!-- } -->
<!-- ``` -->
<!--  -->
<!--  -->
<!-- #### ✔ Composant _Presentational_ :  -->
<!-- ```jsx -->
<!-- // here is our view -->
<!-- const TrackList = ({ tracks }) => ( -->
<!--   <ul> -->
<!--     {this.state.tracks.map(track => ( -->
<!--       <li>{track}</li> -->
<!--     ))} -->
<!--   </ul> -->
<!-- ) -->
<!-- ``` -->

## DOM Virtuel
Lorsque nous écrivons un composant React, nous décrivons à quoi l'UI ressemble en fonction des *props*.
Même si React donne le sentiment au développeur de repeindre entièrement le DOM à chaque _update_, il implémente, en réalité, un DOM virtuel qui est une représentation interne en javascript du DOM. 
Voici un schéma illustrant le processus :


<figure>
	<img src="./react_batch.svg" width="600">
	<figcaption> React et son DOM virtuel</figcaption>
</figure>


Lorsque le <span style="color: #D32F2F">modèle de données change</span> la méthode *render* du composant renvoie 
un objet correspondant à la représentation interne du DOM virtuel.
React compare ensuite ce nouveau DOM virtuel avec le précédent
(algorithme de diff interne), et met à jour le *vrai DOM* en appliquant un série d'opérations
optimisées. Ce DOM virtuel permet donc d'optimiser les accès au “vrai DOM”, les modifications sont appliquées
en une fois.


### Références
- *React* - https ://facebook.github.io/react
