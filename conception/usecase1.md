# Cas d'utilisation N° 1 :  utiliser l'amphi synchrone.

Niveau Haut niveau

##  Description

Les étudiant de façon synchrones suivent les étapes de l'amphi. 
Affichage de slides, certain slides sont des exercices auquels les etudiant peuvent répondre, en cas d'exercice le système fournie une page' de ffedback avec les résultat de l'ensemble de l'amphi.


> **Niveau**: Haut niveau, 
> **Déclencheur** : L'enseignant ouvre l'amphi pour un groupe donné.  
> **Acteur Primaire**:  Student  
> **Acteurs secondaires**: Teacher  
> **Parties Prenantes concernées**: -   
 
 
## Preconditions

1. le cas d'utilisation préparer amphi a été terminé avec success.
    --> tout les exercices sont testés (fonctionnels)
2. le groupe est définie (voir platon).
3. tout les utilisateurs sont connus de platon.
4. les élèves souhaitant participer doivent l'indiquer (cas d'utilisation se connecter a l'amphi il ya une URL de l'amphi). Eventuellement avant. 


## Scenario Nominal

FIXME _[tout ce passe bien c'est le scénario parfait.]_

#### ~5min avant lancement 
1. Le **système** produit un premier slide (slide *d'attente*) proposant
un bouton de lancement du cours sur la console du prof.
2. Les **élèves** peuvent rejoindre l'activité sur laquelle ils ne pourront
voir que le slide d'attente.

#### Lancement 
1. Le **professeur** lance l'activité. Il a maintenant accès au tableau de bord.
2. Les **élèves** ne voient que le slide courant du cours en plein écran.

#### Défilement *(prof)* 
1. Le **professeur** change de slide grâce au tableau de bord.
2. Le **système** change le slide courant de tous les élèves suivant le cours *en direct*,
mais pas ceux en *navigation libre*.

#### Défilement *(élève)* 
1. Un **élève** change de slide grâce aux flèches proposées. 
2. Le **système** change le slide courant de l'élève et le fait passer en mode
*navigation libre*. Il propose maintenant un bouton pour revenir en direct.

#### Exercice
1. Le **professeur** lance un exercice de son choix depuis le tableau de bord. Il peut gérer l'écran que verront les **élèves** quand ils auront complété l'exercice.
2. Le **système** fait passer l'activité en mode *exercice*.  
2.1. La disposition du tableau de bord du professeur est modifiée afin qu'il puisse quitter le mode *exercice* et voir les statistiques de l'exercice qu'il a lancé.  
2.2. L'écran des **élèves** qui suivent l'activité, quel qu'il soit, est remplacé par l'exercice PLaTon lancé.

#### Fin d'exercice
1. Un **élève** complète un exercice PLaTon. Il se retrouve face à un écran d'attente, géré par le **professeur**.
2. Le **professeur** décide à tout moment de retirer l'accès à l'exercice, ce qui ne redirige pas immédiatement les **élèves** vers le cours. Il peut décider d'afficher les statistiques ou non à tous avant de repasser au slide courant.
3. Le **système** affiche pour les **élèves** le dernier slide sur lequel ils étaient avant le lancement de l'exercice, idem pour le **professeur**. Les statistiques de l'exercice sont sauvegardées dans la base de données du prof.

#### Fin de présentation
1. Le **professeur** arrive au dernier slide de son cours. Il ferme l'activité et peut choisir de la laisser publique, ou de la mettre en privé.
2. Si le cours est passé en privé, l'activité devient maintenant une slide *d'attente*, et tous les **élèves** présents ou rejoignant l'activité verront ce slide, sans pouvoir y naviguer.
3. Les élèves sont libres de retourner au menu ou de rester sur le slide d'attente.


 Evènements | Système | Prof | Elève
------------|:-------:|:----:|:-----:
~5min avant lancement | produit un premier slide (slide *d'attente*) proposant un bouton de lancement du cours sur la console du prof. ||
lancement | | lance l'activité. |
| | | a accès au tableau de bord | ne voit que la slide courante du cours en plein écran
défilement (prof) | | change de slide grâce au tableau de bord | 
| | change la slide courante de tous les élèves suivant le cours *en direct*, mais pas ceux en *navigation libre*
défilement (élève) | | | change de slide grâce aux flèches proposées | 
| | change la slide courante de tous l'élève et le fait passer en mode *navigation libre*. propose u  bouton pour revenir en direct

### Extensions
FIXME Moins bien _[Document alternate flows and exceptions to the main success scenario. Extensions are branches from the main scenario, and numbering should align with the step of the success scenario where the branch occurs.]_

FIXME Indiquez dans quel point du scenario nominal le chemin alternatif démarre et ou il reprend.


## Post Conditions
### Conditions de succès 
FIXME _[Describe the end condition of the Use Case where the Primary Actor’s goal is satisfied]_

### Minimal Guarantees
FIXME _[Describe the guarantee or assurance that this Use Case provides to all Actors and Stakeholders to protect their interest regardless of whether the Use Case ends with success or failure.]_

### Conditions final en cas d'échec
FIXME _[Describe the end condition that results if the Primary Actor fails to accomplish his goal.]_


FIXME _les variables suivantes sont optionnelles._

### Frequence
FIXME _[Indicate how often the use case is expected to occur. This information aids designers and developers in understanding capacity requirements.]_   
### Besoins Spéciaux (optionel)  
FIXME _[Describe any additional factors that impact the execution of the use case. These could be environmental, regulatory, organizational or market-driven in nature.]_  
### Performance  
### Security  
### Usability / Accessibility  
### Other  

##  Problèmes et étapes suivantes  
FIXME _[Note any issues related to the definition of this use case that will require clarification prior to development. Also list any follow-up work that needs to be done prior to sign-off on the use case.]_  

FIXME définir ce qui pose problème dans la description **actuelle** du cas d'utilisation.  
FIXME vous pouvez ajouter ici un lien vers une issue github ou un carte de projet github.

TBR
