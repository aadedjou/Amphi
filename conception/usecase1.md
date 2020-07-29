# Cas d'utilisation N° 1 :  utiliser l'amphi synchrone.

Niveau Haut niveau

##  Description

Les étudiant de façon synchrones suivent les étapes de l'amphi. 
Affichage de slides, certain slides sont des exercices auquels les etudiant peuvent répondre, en cas d'exercice le système fournie une page' de ffedback avec les résultat de l'ensemble de l'amphi.


> **Niveau** :Haut niveau, 
> **Déclencheur** : L'enseignant ouvre l'amphi pour un groupe donné.
> **Acteur Primaire**:  Student  
> **Acteurs secondaires**: Teacher
> **Parties Prenantes concernées** : -   
 
 
## Preconditions

1. le cas d'utilisation préparer amphi a été terminé avec success.
    --> tout les exercices sont testés (fonctionnels)
2. le groupe est définie (voir platon).
3. tout les utilisateurs sont connus de platon.
4. les élèves souhaitant participer doivent l'indiquer (cas d'utilisation se connecter a l'amphi il ya une URL de l'amphi). Eventuellement avant. 


## Scenario Nominal

FIXME_[tout ce passe bien c'est le scénario parfait .]_

Date | Système | Prof | Elève
-----|---------|------|------
~5min avant lancement | produit un premier slide (slide *d'attente*) proposant un bouton de lancement du cours sur la console du prof. ||
lancement | | lance l'activité. |
| | | a accès au tableau de bord | ne voit que la slide courante du cours en plein écran
déroulement | | change de slide grâce au tableau de bord | 
| | change la slide courante de tous les élèves suivant le cours *en direct*, mais pas ceux en *navigation libre*

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
