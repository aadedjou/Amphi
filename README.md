  #    Amphi
## *Outil interactif de conférences en présentiel / distanciel*  

L'application Amphi de a plateforme PLaTon sera un outil de conférence et de diffusion de cours en direct par les professeurs, à des élèves.  
La particularité de ces amphis est que le professeur pourra spontanément lancer des exercices PLaTon durant la diffusion qui seront imposés à tous les participants.

### CRÉATION

Pour créer un Amphi, le professeur précisera en paramètres:
* Le **cours** à diffuser, provenant de sa bibliothèque personnelle
* Une **liste d'exercices,** provenants de sa bibliothèque personnelle *(peut être vide)*
* L'**horaire de début** prévue de l'Amphi 
- L'**horaire de fin** prévue pour l'Amphi
* Une **liste d'intervenants** pouvant assister le professeur durant la conférence *(peut être vide)*
- Le **nombre max. de participants** à l'Amphi
- Les **utilisateurs autorisées** à suivre l'Amphi *(un groupe suivant un certain module par exemple)*
- Les **utilisateurs prohibés** *(un groupe suivant un certain module par exemple)*



// TODO : mettre à jour l'utilisation + le déroulement de l'Amphi
  
En se connectant sur l'application, les élèves voient par défaut le slide courant du cours du professeur. (ils pourront naviguer librement parmi les slides par la suite).  

L'application comptera trois types de slides:  
  - les slides **textuels**, ne comportant que du cours  
  - les slides **"exercice"**, lançant pour tous les élèves un bref exercice confectionné par le professeur  
  - les slides **"réponses"**, maniant les données collectées par les slides **"exercices"**  

Lorsque le professeur est sur un slide **exercice**, il peut à tout moment cliquer sur un bouton de la page lançant l'exercice pour tous les élèves. Tous les appareils connectés à l'application seront automatiquement redirigés vers l'écran de l'exercice.    
A ce moment, les élèves peuvent entrer leurs réponses. Ils ne pourront quitter le slide **exercice** que lorsque le professeur l'aura décidé, ou si un certain délai est dépassé.  
Ils n'ont qu'une seule tentative de réponse et ne pourront pas quitter le slide tant que l'exercice ne sera pas fini pour tous.

Il y aura trois moyens de stopper la collecte de données de l'éxercice:
  - obtenir un certain nombre de réponses
  - dépasser une limite de temps
  - intervention du professeur
  
*(notons que dans les deux premiers cas, le professeur peut toujours stopper la collecte de données)*  
Le slide suivant sera obligatoirement le slide **réponses** lié à l'exercice.

On pourra y observer plusieurs données telles que le temps moyen de réponses, le pourcentage des bonnes réponses, *le pourcentage d'absentéisme, les élèves ayant trouvé la bonne réponse le plus rapidement*...  
Si l'application peut être lancée plusieurs fois, on pourrait même comparer ces données à celles obtenues lors d'un autre cours.

Les élèves ne pourront pas aller plus loin que le slide courant du professeur, de telle manière qu'ils ne pourront pas voir à l'avance les slides **exercice** ou **réponses** que propose la présentation du professeur.  
A la fin de la présentation, le professeur sera libre de rendre privée l'application ou non.  
Le professeur pourra aussi choisir de masquer les slides **exercice** et/ou **réponses** de sa présentation.

###  Interface

