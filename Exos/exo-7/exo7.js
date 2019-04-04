console.log("exo-7");
console.log(jsonDatas);
//console.log(typeProduit);
function traduct() {
    jsonDatas.forEach(function (object) {//fonction qui navigue dans jsonDatas et qui a chaques tour de boucle rentre les données dans l'objet object crée avec function(object)
        for (var property in typeProduit) {//boucle for qui navigue dans typeProduit, crée une var 'property' dans la quelle achaque tour de boucle il stock la donnée de property
            if (property === object.type) {//condition qui verifie que la valeur stocké dans property match avec le type de l'objet stocké dans object (obect.type)
                object.typeTraduct = typeProduit[property];//si ca match object.typeTraduct qui est creé achaque tour de boucle stock les property de typeProduit
            }
        }
    });
}
//traduct();

function showType() {// fonction qui affiche le type de produit demmander dans le formulaire
    var askForm = '';//variable vide me permettant de stocker l'entrée du formulaire
    var typeAsk = [];// tableau vide qui vas me permettre stocker les objet du type demmander
    askForm = document.getElementById('typeProduct').value;//je stock l'entrée du formulaire dans askForm
    var checkbox = document.getElementById('outOfStock');//variable checkbox qui dans le document getl'eement par l'id (outOfStock)

    jsonDatas.forEach(function (testType) {//boucle qui navigue dans jsonDatas et qui a chaques tour de boucle rentre les données dans l'objet object crée avec function(testType)
        if (testType.typeTraduct === askForm) { //condition qui verifie que la valeur stocké dans askForm match avec le type de l'objet stocké dans testType (testType.typeTraduct)
            if (checkbox.checked === true) {//je verifie si ma checkbox est coché (donc afficher les produit en rupture de stock)
                typeAsk.push(testType); //si oui je push l'objet courant dans mon tableau typeAsk    

            } else if (testType.quantity > 0) {// sinon je regarde dans testType si la quantité est superieur a zero 
                typeAsk.push(testType);//si oui je push l'objet courant dans mon tableau typeAsk
            }
        }
    });
    console.log(typeAsk);
    //console.log(askForm);
    triAlpha(typeAsk);// je lance la fontion suivante (triAlpha() avec en parammetre typeAsk pour pouvoir utiliser cette variable dans ma prochaine fonction)
}

function triAlpha(typeAsk) {// je passe en parammetre typeAsk pour pouvoir utiliser cette variable dans la fonction)
    console.clear();
    var userChoice = document.getElementById('trie-select').value;// je creé une variable qui dans document recupère l'élément par l'id (trie-select) + la valeur du choix (1, 2, 3 ou 4) dans le menu déroulant
    console.log(userChoice);
    if (userChoice === 0) {//si valeur de l'id trie-select = 0 donc l'utilisateur ne trie pas
        console.log(typeAsk);//j'affiche tel quel
    } else if (userChoice === '1') {//si valeur de l'id trie-select = 1
        typeAsk.sort(function (a, b) {//dans typeAsk je trie avec la fonction sort()
            return (a.name).localeCompare(b.name);//je retourne le resultat du tri par (name) a > b donc croissant
        });
    } else if (userChoice === '2') {//si valeur de l'id trie-select = 2
        typeAsk.sort(function (a, b) {//dans typeAsk je trie avec la fonction sort()
            return (b.name).localeCompare(a.name);//je retourne le resultat du tri par (name) a < b donc decroissant
        });
    } else if (userChoice === '3') {//si valeur de l'id trie-select = 3
        typeAsk.sort(function (a, b) {//dans typeAsk je trie avec la fonction sort()
            return (a.price) - (b.price);//je retourne le resultat du tri par (price) a > b donc croissant
        });
    } else if (userChoice === '4') {//si valeur de l'id trie-select = 4
        typeAsk.sort(function (a, b) {//dans typeAsk je trie avec la fonction sort()
            return (b.price) - (a.price);//je retourne le resultat du tri par (price) a < b donc decroissant
        });
    }
    console.log(typeAsk);//j'affiche le resultat (typeAsk) qui correspond a la fonction qui a runé
}

function addItem(name, type, description, price, quantity) {//fonction pour creer et ajouter de objets a jsonDatas
    var item = {}//je creé un ojet vide
    //je recupre les valeur du fomulaire en lui donnant le chemin pour chaque valeur
    name = document.addArticle.name.value;
    type = document.addArticle.type.value;
    description = document.addArticle.description.value;
    price = document.addArticle.price.value;
    quantity = document.addArticle.quantity.value;
    //je met dans l'objet la valeur récuperée
    item.name = name;
    item.type = type;
    item.description = description;
    item.price = price;
    item.quantity = quantity;
    jsonDatas.push(item);// je vais stocker (push) mon objet dans jsonDatas
    console.log(item)
    console.log(jsonDatas);
}

function showContact() {//fonction qui affiche tous les contacts
    var contactList = [];//je creé un tableau vide
    jsonDatas.forEach(function (category) {//boucle qui navigue dans jsonDatas et qui a chaques tour de boucle rentre les données dans l'objet category crée avec function(testType)
        category.items.forEach(function (data) {
            contactList.push(data.contact);
        });
    });
    //console.log(contactList);
}
showContact();
