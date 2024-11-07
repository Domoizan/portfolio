export const apropos={
    cover:'/images/photo_profil.jpg',
    imageAlt:'Dominique MOIZAN',
    titre:'Dominique MOIZAN',
    description:'D’un naturel curieux, j’explore avec beaucoup d’enthousiasme le domaine du développement web Frontend. Les quelques projets réalisés dans le cadre de la formation Développeur web OpenClassRoom m’ont permis de découvrir l’écosystème NodeJS, ReactJS. Je souhaite maintenant aller plus loin, pour parfaire et compléter mes compétences au travers de projets personnels et professionnels'
}

export const projets=[
    {
        cover:'/images/ohmyfood.png',
        imageAlt:'copie d\'écran site ohmyfood',
        titre:'Ohmyfood',
        description:'Application Restaurants',
        detail:[{titre:"Demande",para:["Réalisation de l'interface mobile-first du site d’une start-up.","Utilisation de Sass, pour implémenter des animations CSS ainsi que de Git et GitHub pour versionner le projet."]},
        {titre:"Réalisation",para:["Mise en place de la structure Html du site selon la maquette fournie, élaboration des règles Css pour la mise en forme et réalisation des animations","Création du repository sur GitHub"]}],
        liens:[{lib:'Repository',lnk:'https://github.com/Domoizan/kasa',icone:'/images/icones/github.png',altimg:'liens vers repository github'},
            {lib:'Maquette',lnk:'https://www.figma.com/file/t4449fzDnwGYmzuwQdu87V/Projet-3-FR---Ohmyfood?node-id=0%3A1',icone:'/images/icones/figma.png',altimg:'liens vers maquette figma'},
            {lib:'Prototype',lnk:'https://www.figma.com/proto/t4449fzDnwGYmzuwQdu87V/Maquettes-Ohmyfood-(mobile-et-desktop)?node-id=25368-591&scaling=scale-down&page-id=0%3A1&starting-point-node-id=25368%3A591&show-proto-sidebar=1',icone:'/images/icones/figma.png',altimg:'comporetment interface'}
        ],
        techno:[{nom:'Html',icone:'/images/icones/html.png',altimg:'icone Html'},
                {nom:'css',icone:'/images/icones/css.png',altimg:'icone Css'},
                {nom:'Sass',icone:'/images/icones/sass.png',altimg:'icone Sass'}]
    },

    {
        cover:'/images/SBluel.png',
        imageAlt:'copie d\'écran site portfolio Sophie Bluel',
        titre:'Portfolio Sophie Bluel',
        description:'Portfolio Sophie Bluel',
        detail:[{titre:"Demande",para:["Rendre dynamique le portfolio actuel","Utiliser l'API fournie pour obtenir le contenu","Ajouter les fonctionnalités d'authentification et de modification du contenu", "Mettre en place des fenêtres modales pour l'administration du contenu"]},
                {titre:"Réalisation",para:["Ecriture du code JavaScript pour réaliser l'ensemble des demandes","Création de la page de connection et des fenêtre modales."]}],
        liens:[{lib:'Repository',lnk:'https://github.com/Domoizan/Portfolio-architecte-sophie-bluel/tree/main',icone:'/images/icones/github.png',altimg:'liens vers repository github'},
            {lib:'Maquette',lnk:'https://www.figma.com/file/kfKHknHySoTibZfdolGAX6/Desktop?node-id=0%3A1',icone:'/images/icones/figma.png',altimg:'liens vers maquette figma'},
        ],
        techno:[{nom:'Html',icone:'/images/icones/html.png',altimg:'icone Html'},
                {nom:'css',icone:'/images/icones/css.png',altimg:'icone Css'},
                {nom:'JavaScript',icone:'/images/icones/javascript.png',altimg:'icone Javascript'}]
    },
    {
        cover:'/images/kasa.png',
        imageAlt:'copie d\'écran site Kasa',
        titre:'Kasa immobilier',
        description:'Site Kasa immobilier',
        detail:[{titre:"Demande",para:["Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !)"]},
        {titre:"Réalisation",para:["Création du projet réact et du repository puis, intégration de la maquette mobile fisrt et reponsive en html et css incluant les animations attendues.","Mise en place du routage et réalisation des contenus et fonctionnalités de l'interface en utilisant des conposants réact."]}],
        liens:[{lib:'Repository',lnk:'https://github.com/Domoizan/kasa',icone:'/images/icones/github.png',altimg:'liens vers repository github'},
            {lib:'Maquette',lnk:'https://www.figma.com/file/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=0-1&mode=design&t=1KgUwWWFtuAVbsJ5-0',icone:'/images/icones/figma.png',altimg:'liens vers maquette figma'},
            {lib:'Prototype',lnk:'https://www.figma.com/proto/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=3-0&t=x8RBKuR4UiE3hhBW-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A0&show-proto-sidebar=1',icone:'/images/icones/figma.png',altimg:'comporetment interface'}
        ],
        techno:[{nom:'Html',icone:'/images/icones/html.png',altimg:'icone Html'},
                {nom:'css',icone:'/images/icones/css.png',altimg:'icone Css'},
                {nom:'Sass',icone:'/images/icones/sass.png',altimg:'icone Sass'},
                {nom:'réact',icone:'/images/icones/react.png',altimg:'icone react'}
            ]
    },
    {
        cover:'/images/bank.png',
        imageAlt:'copie d\'écran site Bank',
        titre:'Argent Bank',
        description:'Application Bank',
        detail:[
        {titre:"Demande",para:["développement front-end d’une application bancaire en utilisant React et Redux pour créer une expérience utilisateur dynamique et réactive.",
            "intégrer le front-end avec le back-end via des appels API. Ecrire des appels à l'API REST pour connecter les deux parties de l'application, assurant une communication fluide entre le client et le serveur."]  
        },{titre:"Réalisation",para:["creation du projet réact react-redux, intégration de la page d'accueil et réalisation de la page de connection et de la logique associée",
            "Mise en place du suivi de l'état de l'application a l'aide de redux et ajout de la dashboard utilisateur"]  
        }],
        liens:[{lib:'Repository',lnk:'https://github.com/Domoizan/bank_front',icone:'/images/icones/github.png',altimg:'liens vers repository github'},
        ],
        techno:[
            {nom:'Html',icone:'/images/icones/html.png',altimg:'icone Html'},
            {nom:'css',icone:'/images/icones/css.png',altimg:'icone Css'},
            {nom:'réact',icone:'/images/icones/react.png',altimg:'icone réact'},
            {nom:'réact-redux',icone:'/images/icones/react-redux.png',altimg:'icone réact-redux'}]
    }]

    export const formations=[{

        titre:'Technicien supérieur en Électronique et Automatisme Industriel',
        description:'AFPA NANCY - LAXOU (54)'
    },
    {
        titre:'Analyste Programmeur De Gestion',
        description:'CHAMPFOR REIMS (51)'
    },
    {
        titre:'Intégrateur web',
        description:'Formation à distance - OpenClassrooms'
    }]

export const experiences=[
    {
    titre:'Formateur Vacataire ',
    description:'Période 2005 à 2010',
    detail:[
        "Pour le compte de la CCI de  St BENOÎT  Réunion et SUPINFO Réunion",
        "Formation Linux, Bureautique, Langages C, C++.",
        "Pour des groupes de 5 à 40 personnes."]
    },
    {
    titre:'Technicien Formateur Informatique',
    description:'Période 1996 à 2000',
    detail:[
        "Installation et paramétrage logiciels selon les  besoins de l’utilisateur.",
        "Formation => Évaluation des besoins, préparation des supports pédagogiques et mise en œuvre adaptée au public.",
        "Assistance aux utilisateurs => Sur site ou à distance avec prise en main a distance."]
    },
    {
    titre:'Technicien De Maintenance Informatique',
    description:'Période 1987 à 1993',
    detail:[
        "Réception et prise en charge du matériel",
        "Réparation et contrôle du matériel informatique"]
    },

    {
    titre:'Autres',
    description:'Période de 2019 à 2023',
    detail:[
        "Audit qualité des techniciens => Rappel des procédures (techniques et sécurités).",
        "Mise en et hors service de compteurs en clientèle.",
        "Expliquer et apporter les réponses concernant le fonctionnement du compteur.",
        "Ajout d'un paragraphe"
    ]
    }]

    export const competences=[
    {
    id:1,
    categorie:"Front-end",
    lst:[{
    id:'1-1',
    nom:"Html",
    icone:"/images/icones/html.png",
    iconeAlt:"icone Html"
    },
    {
    id:'1-2',
    nom:"Css",
    icone:"/images/icones/css.png",
    iconeAlt:"icone Css"
    },
    {
    id:'1-3',
    nom:"JavaScript",
    icone:"/images/icones/javascript.png",
    iconeAlt:"icone JavaScript"
    },
    {
    id:'1-4',
    nom:"Sass",
    icone:"/images/icones/sass.png",
    iconeAlt:"icone Sass"
    },
    {
    id:'1-5',
    nom:"Réact",
    icone:"/images/icones/react.png",
    iconeAlt:"icone Réact"
    },    
    {
        id:'1-6',
        nom:"Réact-redux",
        icone:"/images/icones/react-redux.png",
        iconeAlt:"icone Réact rédux"
        }]
    },
    {
    id:2,
    categorie:"Back-end",
    lst:[{
    id:'2-1',
    nom:"NodeJS",
    icone:"/images/icones/nodejs.png",
    iconeAlt:"icone NodeJS"
    },
    {
    id:'2-2',
    nom:"MySql",
    icone:"/images/icones/mysql.png",
    iconeAlt:"icone MySql"
    },
    {
    id:'2-3',
    nom:"MongoDB",
    icone:"/images/icones/mongo-db.png",
    iconeAlt:"icone MongoDB"
    }]
    },
    {
    id:3,
    categorie:"Autres",
    lst:[{
    id:'3-1',
    nom:"C/C++",
    icone:"/images/icones/c++.png",
    iconeAlt:"icone C/C++"
    },
    {
    id:'3-2',
    nom:"Php",
    icone:"/images/icones/php.png",
    iconeAlt:"icone Php"
    }]
    }
    ]

export const liens=[
    {
    lnk:'https://github.com/Domoizan/portfolio',
    icone:'/images/icones/github.png',
    altimg:'Lien vers repository porfolio'
    },
    {
    lnk:'#',
    icone:'/images/icones/linkedin.png',
    altimg:'Lien linkedin'
    }
]
