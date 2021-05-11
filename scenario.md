# Algorithmie de l'application Amphi

***amphi*** = *activité Platon (cf. [README associé](README.md)) de conférence en direct*
***prof.*** = *professeur (user)*

// TODO: détailler + de bas niveau (requêtes REST, état du serv)

## CRÉATION
1. Le prof. crée une conférence + la paramètre 

#### PARAMETRES POSSIBLES:
    + cours
    + liste d'exos *(peut être vide)*
    + horaire de début 
    - horaire de fin
    + liste d'intervenants *(peut être vide)*
    - nb max de participants

+ -> *obligatoire

2. Les élèves se connectent (asynchrone) dans le 'salon' hébergeant l'amphi.  
Tant que le prof. n'est pas connecté, leur rendu est une page d'accueil affichant les paramètres de l'amphi (titre, nom du prof. etc.)  
Ils peuvent se déconnecter/reconnecter sans limite.

3. Pour débuter l'amphi, le prof. doit confirmer le début de celui-ci après s'y être connecté. (peut importe l'horaire prévu)  
Cette action génère **l'interface prof.** sur la session du prof. et **l'interface élève** sur la session des élèves.

## DEROULEMENT

1. Le prof., à l'aide de son interface, met à jour la vue des élèves.  (requêtes GET vers la page courante diffusée par le prof.)  
Il peut, dès qu'il le souhaite, lancer un exercice de la liste et ainsi faire passer l'activité en **mode exercice**. 

2. Si le prof. se deconnecte, l'amphi n'est plus accessible au bout de 30min. On supprime l'activité et déconnecte.
Les élèves peuvent se déconnecter/reconnecter sans limite.

### mode **cours**  
La vue élève se résume à la page courante diffusée par le prof.  
Ils peuvent se déconnecter/reconnecter sans limite.

### mode **exercice**
La vue élève est immédiatement remplacée par l'exercice lancé par le prof.
Si un élève se connecte lorsque l'amphi est en mode exercice, il est directement confronté à l'exercice lancé.
Lorsqu'il répond à l'exercice, l'élève se retrouve devant un écran servant à le faire patienter jusqu'à ce que le prof. décide de ne pas accepter plus de réponses.  
Cet écran peut être les statistiques en direct de l'exercice (le prof. peut choisir s'il souhaite les rendre publiques ou non).  
Le prof. décide lui-même de la fin du mode exercice via l'interface. Lorsqu'il le fait,
la bonne réponse est affichée à l'écran, avec ou sans statistiques (là aussi, le prof. décide)  
L'activité attend ensuite une action du prof. pour revenir au **mode cours**.


## FIN DE L'ACTIVITÉ

Lorsque le prof. met fin à la conférence, les élèves sont renvoyés au menu des activités et l'amphi n'est plus disponible ni par lui, ni par les élèves.


