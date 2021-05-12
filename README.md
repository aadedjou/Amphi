# **Amphi**

### ***Outil interactif de conférences en présentiel / distanciel***

*L'application **Amphi** de a plateforme PLaTon sera un outil de **conférence** et de **diffusion de cours en direct** par les professeurs, à des élèves.*
*La particularité de ces amphis réside dans la possibilité pour le professeur de spontanément **diffuser des exercices PLaTon** durant la conférence, qui seront affectés à tous les participants.*  

---

## CRÉATION

Pour créer un Amphi, le professeur précisera en paramètres:
* Le **cours** à diffuser, provenant de sa bibliothèque personnelle
* Un **titre** *(par défaut celui du cours sélectionné)*
* Une **liste d'exercices,** provenants de sa bibliothèque personnelle *(peut être vide)*
* L'**horaire de début** prévue de l'Amphi
* Les **utilisateurs autorisées** à suivre l'Amphi *(un groupe suivant un certain module par exemple)*

*Facultativement, il pourra déclarer:*
- Une **description** du cours
- Un **mot de passe** requis pour se connecter à la conférence
- L'**horaire de fin** prévue pour l'Amphi
- Le **nombre max. de participants** à l'Amphi
- Les **utilisateurs prohibés** *(un groupe suivant un certain module par exemple)*
- Une **liste d'intervenants** pouvant assister le professeur durant la conférence *(peut être vide)*

Une fois créé, l'amphi devient une *activité* visible par tous les utilisateurs concernés, dont le professeur.  
Ils peuvent tous s'y connecter, mais l'amphi ne démarrera réellement qu'après son **activation** par le créateur de l'amphi.


## LANCEMENT

Lorsque le professeur débute la conférence, il a accès à un **tableau de contrôle** lui permettant de naviguer parmi ses slides, avec vue sur la slide courante et celle qui la suit.  
▶ Il a aussi accès aux **exercices** qu'il a préalablement sélectionnés et qu'il pourra lancer à sa guise durant la conférence. (l'ordre et les occurences n'importent pas)

Les participants ont seulement une vue sur la slide courante.


## DÉROULEMENT
 
### *PROFESSEUR*
Le professeur dispose de 2 modes de diffusion:
- 📖 Un mode **cours**, le mode de base, lui permettant de naviguer librement entre les slides de son cours et les diffuser en direct à tous les participants.

- ▶ Un mode **exercice**, déclenché lorsque le professeur décide de diffuser un exercice aux participants.  
Dans ce mode, le professeur a une vue sur les statistiques des réponses proposées, et aussi sur la dernière slide de cours ayant précédé l'exercice.  
Ce sera sur cette slide que reprendra le **📖 mode cours**.

    Un exercice peut prendre fin de plusieurs manières:
    - ⏳ Limite de temps
    - #️⃣ Nombre de réponses limité *(nombre ou pourcentage par rapport à l'effectif de l'Amphi)*
    - ✅ Objectif de bonnes réponses à atteindre
    - ❌ **Intervention du professeur**

    A la fin de l'exercice, le professeur a accès aux statistiques de l'exercice, qu'il pourra conserver.  
    
    Avant de rebasculer en **📖 mode cours**, les participants seront face à un **écran de fin**.  
    Par défaut, c'est une/la **solution correcte** à l'exercice, mais le professeur peut décider d'y afficher à la place les **statistiques** associées à l'exercice, un **message**, ou **rien**.


### *PARTICIPANTS*
Les participants peuvent alterner entre 2 modes:
- 🔒 Un mode **flux** qui ne leur permet que de voir la slide courante diffusée par le professeur

- 🔓 Un mode **navigation libre** leur permettant de naviguer parmi toutes les slides déjà diffusées par le professeur  
Le professeur peut toutefois 🔐 **imposer le mode flux** pour tous les participants (et le verrouiller) quand il en ressent le besoin.

Lorsqu'un exercice est lancé, le participant n'a plus accès aux slides. Il est face à la page de l'exercice jusqu'à ce qu'il le finisse ou que le professeur rebascule l'Amphi en **📖 mode cours**.

Lorsque l'utilisateur a complété l'exercice, il se retrouve face à un écran lui demandant de patienter jusqu'à la fin de l'exercice.  
Une fois l'exercice fini pour tous, l'**écran de fin** est diffusé à tous les participants.

❌ Les participants peuvent, quel que soit le mode, se déconnecter/reconnecter à l'Amphi.


## FIN DE L'ACTIVITÉ

Après avoir atteint le **dernier slide** de sa présentation, l'application propose au professeur un bouton **mettant fin** à l'Amphi.  
Cette action déconnecte le professeur et tous les participants de l'Amphi. Il devient *inaccessible* pour tout le monde sauf le professeur.

L'Amphi n'est toutefois pas ***supprimé***: ses paramètres pourront être modifiés  et il pourra se voir réactivé avec de nouveaux paramètres (nouveau cours, liste d'exercice mise à jour, etc.)  
Il peut néanmoins être **manuellement supprimé** par le professeur.

❌ Si le professeur se déconnecte sans avoir mis fin à l'activité, celle-ci sera indisponible pour tous au bout de 30 minutes.