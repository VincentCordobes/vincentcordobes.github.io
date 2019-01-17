---
title: Architecture Redux
date: 2016-06-17
spoiler: Des bons concepts
lang: fr
---

_React_ fournit seulement un moyen de dessiner de manière efficace des
composants en fonction de données d'entrées.

Flux est un _pattern_ permettant de gérer **l'état d'une application** qui garanti un flux de données
unidirectionnel (_one way databinding_) Redux est l'implémentation
la plus populaire.

Redux, met en scène 3 principes :

- **une seule source de vérité** : le _state_ de l'application est maintenu dans une structure de données à l'intérieur d'un seul store
- le state est **immutable** : La seule manière de modifier le _state_ est via l'émission d'une **action**, un objet décrivant la modification à apporter. Toutes les modifications sont centralisées et se produisent une à une, évitant ainsi les problèmes de concurrence
- les modifications sont effectuées à l'aide de **fonction pures** appelées **reducers**

<figure><img style="width:max-content" src="/flux.svg"><figcaption>Architecture Redux</figcaption></figure>

Le schéma illustre le flux unidirectionnel des données dans cette architecture : des **actions** sont _dispatchées_ et traitées par le **reducer**, qui se charge de mettre à jour le store. Toutes les vues (ici les composants react) abonnées au store se mettent à jour en conséquence. Ces vues peuvent également _dispatcher_ des actions et ainsi de suite.

### Actions et Actions creators

Les actions sont des paquets de données envoyés au _store_. Elles
sont la seule source d'information du store. Une action est envoyée au
store grâce à la fonction `store.dispatch`.

Voici un exemple d'action qui représente le
changement de nom d'une personne :

```javascript
{
  type: 'CHANGE_NAME',
  payload: 'Vince'
}
```

Si cette action se révèle être utilisée souvent, nous pouvons écrire une fonction qui se chargera de la créer.

```javascript
function changeName(name) {
  return {
    type: 'CHANGE_NAME',
    payload: name,
  }
}
```

On appelle ces fonctions des **action creator**. Elles rendent les actions réutilisables et facilement testables.
Les actions peuvent être “dispatchées” avec : `dispatch(changeName('Vincent'))`

### Reducer

Les actions décrivent le fait que quelque chose s'est passé mais ne
spécifient pas la manière dont le store doit être modifié. C'est le rôle
du reducer, une **fonction pure** qui prend en
paramètre le _state_, une action, et retourne le nouveau _state_.

```
(previousState, action) => nextState
```

Le _reducer_ est une fonction pure, par conséquent il ne doit **jamais**:

- modifier directement ses arguments
- effectuer des opérations ayant des effets de bord tel que des appels à une api
- appeler des fonctions impures telles que `Date.now()` etc...

Il est uniquement chargé de calculer le _nextState_.

#### ✘ Exemple: un reducer incorrect, mutation du state INTERDITE!

Le _state_ est muté.
La propriété du _state_ étant modifiée directement (l.4),
les composants abonnés à cette partie du _state_ ne se mettrons pas à jour et ignorerons cette modification.

```javascript
function user(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      state.name = action.name // INTERDIT !!
      return state 
    default:
      return state
  }
}
```

#### ✔ Exemple Un reducer correct

```javascript
function user(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name,
      }
    default:
      return state
  }
}
```

_**Note** : On utilise ici l'opérateur object spread `...`, une syntaxe d'ECMAScript 2016, qui permet de copier les propriétés d'un
objet dans un nouvel objet d'une manière plus succincte. Nous pouvons également utiliser des bibliothèques qui garantissent l'immutabilité telles que [immutable.js](https://github.com/facebook/immutable-js/) développée par Facebook_

<!-- <h6>TODO: combineReducer pour réduire le boilerplate</h6> -->

### Store

Le _store_ est un objet qui :

- maintient le _state_ de l'application
- permet l'accès à ce _state_ via `getState()`
- permet de mettre à jour le _state_ via `dispatch(action)`
- permet d'abonner des composants via `subscribe(listener)` (composants notifiés lorsque le _state_ subit une modification)

### Async Actions

Afin d'orchestrer des flux asynchrones (par exemple, les appels réseaux) nous pouvons utiliser le _middleware_ _Redux-thunk_.
_Ce _middleware_ permet de traiter les actions étant des fonctions (appelées _thunk action_).
Une action _thunk_ ne doit pas forcément être pure et peut avoir des effets de bords. Les fonctions _dispatch_ et _getState_ du store lui sont passées en argument, ce qui lui donne la possibilité de _dispatcher_ d'autres _actions_ et d'accéder au _state_.

#### Exemple d'un thunk action creator qui renvoie une fonction :

```javascript
function whatIsMyName() {
  return async (dispatch, getState) => {
    dispatch(fetchNameRequest())
    try {
      const res = await fetch('http://vincent.cordobes/name')
      const name = await res.json()
      dispatch(fetchNameSuccess(name))
    } catch (err) {
      dispatch(fetchNameError(err))
    }
  }
}
```

L'exemple ci-dessus met en évidence une _action creator_ qui retourne une fonction. Des actions marquant le début, le succès ou une erreur de l'appel (l.5) à l'API sont “dispatchées” (l.3, l.7, l.9) permettant de mettre à jour le _store_ en fonction de l'avancement de la requête.

_Remarques relativement au code ci-dessus : syntaxe avec les mots clés async/await. Cette syntaxe fait son apparition dans ECMAScript 2017. En résumé, `await` permet d'attendre la résolution d'une promesse et ne peux être utilisé que dans une fonction préfixée par `async` (elle-même renverra à son tour une promesse) Il permet d'écrire le code asynchrone de javascript à la manière d'un code synchrone._


### Selecteurs

Afin de comprendre l'utilité des sélecteurs, prenons un exemple.
Considérons une liste de personnes, une recherche (par nom) et des filtres (sexe, age, etc...) sur ces personnes.

En suivant les principes *Redux*, le *store* contient les données et les critères de recherche.
À partir de ces éléments nous pouvons calculer la liste filtrée à afficher. 

Une bonne pratique, concernant le *state*, est de contenir seulement des donnée minimisée, c'est-à-dire des données ne pouvant pas être obtenues à partir d'autres données.
Les états dérivés ne doivent pas être présents dans le *state*.

<figure>
<img src="/selectors0.svg" width=300>
<figcaption>React filtre la data au render</figcaption>
</figure>

Le _bon_ endroit pour filtrer et afficher cette liste est donc la méthode _render_.
Ainsi, si  un critère de recherche ou si les données changent,
le composant exécute la méthode `render`, filtre les données et les affiche.
Il en résulte une _UI_ toujours synchronisée avec le _state_. 

Cette technique présente néanmoins un inconvénient.
Supposons qu'une _props_ autre que les filtres et la liste de personnes, change :
le filtrage de la liste se fera donc, inutilement, à chaque _update_ du composant.

La complexité de ce filtrage étant du $O(n)$, cela n'est pas très gênant si la taille des données à filtre reste modérée. 

Cependant, des listes de données potentiellement grandes ou même un calcul plus  complexe dégraderaient fortement les performances de l'application.

C'est ici qu'entrent en jeu les selectors :


<figure>
  <img src="/selectors.svg" width=328>
  <figcaption>Un selecteur filtre la data pour la passer au composant</figcaption>
</figure>

Les **selectors calculent des données dérivées**. Ils permettent au state de ne stocker que les données minimisée.
Ils sont efficaces et ne sont pas recalculés si les arguments restent les mêmes → ils sont **mémoisés**.
Enfin ils sont *composables*, c'est-à-dire qu'ils peuvent être utilisés en
entrées d'autres selectors.
Ainsi toute la complexité est *déplacée* à l'extérieur et prise en charge par les selectors,

Les *selectors* jouent le rôle d'*api*, permettant un accès au _state_. 
Les composants React ne connaissent que cette interface.
Une conséquence directe est le *découplage* de ces composants vis-à-vis de la *forme* du _state_. 
Un autre bénéfice est la simplification du code des composants React.

#### Exemple avec la bibliothèque [reselect](https://github.com/reactjs/reselect)

##### Définition des _selectors_
```javascript
const getUsers = state => state.users
const getSearchTerm = state => state.searchTerm

// Memoized selector
const getFilteredUsers = createSelector(
  getUsers,
  getSearchTerm,
  (users, searchTerm) => users.filter(
    user => user.indexOf(searchTerm) > -1
  )
);
```


##### Définition du composant React

```javascript
const UserList = ({ filteredUsers }) => (
  <ul>
    {filteredUsers.map(user => <li>{user}</li>)}
  </ul>
);
```

##### Connexion du composant

```javascript
export default connect(state => (
  filteredUsers: getFilteredUsers(state)
))(UserList);
```


**Note** : Redux est une bibliothèque dogmatique mettant en scène plusieurs concepts et _patterns_ (immutabilités, flux unidirectionnel etc...) et ces principes sous-jacents peuvent parfaitement s'appliquer à d'autres architectures.



### Références

<ul>
  <li>Redux doc. <em>https://redux.js.org</em></li>
  <li>React and flux in production best practices. <em>https://medium.com/@delveeng/react-and-flux-in-production-best-practices-c87766c57cb6#.elbdrmo4f</em></li>
</ul>
