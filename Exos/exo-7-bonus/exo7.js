console.log("exo-7");
//console.log(jsonDatas);


function clearData() {
    var element = document.getElementById('tbodyId');
 console.log(element);
   element.parentNode.removeChild(element);
}

function addDatas() {
    var table = document.getElementById('tableInfo');
    let tbody = document.createElement('tbody');
    tbody.setAttribute('id', 'tbodyId');
    jsonDatas.forEach(function (currentObject) {
        currentObject.items.forEach(function (currentItem) {
            var row = document.createElement('tr');
            for (var property in currentItem) {
                if (property != 'contact') {
                    var column = document.createElement('td');
                    var textProperty = document.createTextNode(currentItem[property]);
                    column.appendChild(textProperty);
                    row.appendChild(column);
                } else {
                    for (var contactProperty in currentItem.contact) {
                        var column = document.createElement('td');
                        var textProperty = document.createTextNode(currentItem.contact[contactProperty]);
                        column.appendChild(textProperty);
                        row.appendChild(column);
                    }
                }
            }
            var column = document.createElement('td');
            var textProperty = document.createTextNode(currentObject.type);
            column.appendChild(textProperty);
            row.appendChild(column);
            tbody.appendChild(row);
            table.appendChild(tbody);  
        });
    });
}
addDatas();

function addItem() {
    clearData();
    console.clear();
    var item = {};
    item.contact = {};
    var type = document.addArticle.type.value;
    var name = document.addArticle.name.value;
    var description = document.addArticle.description.value;
    var price = document.addArticle.price.value;
    var quantity = document.addArticle.quantity.value;
    var lastName = document.addArticle.lastName.value;
    var firstName = document.addArticle.firstName.value;
    var address = document.addArticle.address.value;


    item.name = name;
    item.description = description;
    item.price = price;
    item.quantity = quantity;
    item.contact.lastName = lastName;
    item.contact.firstName = firstName;
    item.contact.address = address;

    jsonDatas.forEach(function (objectType) {
        if (objectType.type === type) {
            objectType.items.push(item);
        } else {
            console.log('Quelque chose ne vas pas !');
        }
    });
    addDatas();
}
