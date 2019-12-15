var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://gist.githubusercontent.com/mapreuss/cccf0781ba848648d9d8a6510201a027/raw/74b72ac19728a92306b296863b5a81c8a0b3d8d7/test.json', true);
xhr.responseType = 'json';
xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
        xhr.response.forEach(produto => {
            var div = document.createElement("div");

            div.className = "card";

            var img = document.createElement("img");
            img.src = produto.picture;
            div.appendChild(img);
            div.appendChild(document.createElement("br"));

            var nome = document.createElement("label");
            var txtNome = document.createTextNode(produto.name);
            nome.appendChild(txtNome);
            div.appendChild(nome);
            div.appendChild(document.createElement("br"));

            var desc = document.createElement("label");
            var txtDesc = document.createTextNode(produto.description);
            desc.appendChild(txtDesc);
            div.appendChild(desc);
            div.appendChild(document.createElement("br"));

            var precoant = document.createElement("label-price");
            var txtPrecoant = document.createTextNode(produto.oldPrice);
            precoant.appendChild(txtPrecoant);
            div.appendChild(precoant);
            div.appendChild(document.createElement("br"));

            var preco = document.createElement("label-price-new");
            var txtPreco = document.createTextNode(produto.price);
            preco.appendChild(txtPreco);
            div.appendChild(preco);



            var metpreco = document.createElement("label-price-half");
            var txtmetPreco = document.createTextNode("$" + (parseFloat(produto.price.replace("$", "")) / 2).toFixed(2));
            metpreco.appendChild(txtmetPreco);
            div.appendChild(metpreco);
            div.appendChild(document.createElement("br"));


            var button = document.createElement("button");
            button.className = "button";
            button.type = "button"
            button.innerHTML = "Comprar";
            div.appendChild(button);

            document.getElementById("content").appendChild(div);
        });
    } else {
        console.log(xhr.response);
    }
};
xhr.send();