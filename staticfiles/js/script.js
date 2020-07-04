
function loadMenu(){
    let load = document.getElementById("loading-area");
    load.innerHTML = "<img src = \"/static/images/ajax-loader.gif\" style='display: block;margin-left: auto;margin-right: auto;'>";

    $.ajax(
        {
            type : 'GET',
            url : '/api/category',
            contentType: 'json',
            success : function (data){
                let load = document.getElementById("loading-area");
                load.innerHTML= '';
                let subdom = document.getElementById("main-content");
                let temp = `
                ${data.map(function (obj){
                    return `
                    <div class="col-md-3 col-sm-4 col-xs-6 col-xxs-12">
                      <a href="#" onclick='loadCategory("${obj.id}")'>
                        <div class="category-tile">
                          <img width="200" height="200" src="${obj.image}" alt="">
                          <span>${obj.name}</span>
                        </div>
                      </a>
                    </div>
                    `
                }).join('')}
                `;
                subdom.innerHTML=temp;
            }
        }
    );
}

function loadAbout(){
    let load = document.getElementById("loading-area");
    load.innerHTML = "<img src = \"/static/images/ajax-loader.gif\" style='display: block;margin-left: auto;margin-right: auto;'>";
    let subdom = document.getElementById("main-content");
}

function loadAwards(){
    let load = document.getElementById("loading-area");
    load.innerHTML = "<img src = \"/static/images/ajax-loader.gif\" style='display: block;margin-left: auto;margin-right: auto;'>";
    let subdom = document.getElementById("main-content");
}


function loadSpecial(){
    loadCategory('8');
}

function loadCategory(name){
    let load = document.getElementById("loading-area");
    load.innerHTML = "<img src = \"/static/images/ajax-loader.gif\" style='display: block;margin-left: auto;margin-right: auto;'>";
    $.ajax(
        {
            type : 'GET',
            url : '/api/list/'+name,
            contentType: 'json',
            success : function (data){
                let load = document.getElementById("loading-area");
                load.innerHTML= '';
                let subdom = document.getElementById("main-content");
                let temp = `
                ${data.map(function (obj){
                    return `
                    <div class="menu-item-tile col-md-6">
                      <div class="row">
                        <div class="col-sm-5">
                          <div class="menu-item-photo">
                            <div></div>
                            <img class="img-responsive" width="250" height="150" src="${obj.image}" alt="Item">
                          </div>
                          <div class="menu-item-price"> ${obj.price} per plate</div>
                        </div>
                        <div class="menu-item-description col-sm-7">
                          <h3 class="menu-item-title">${obj.name}</h3>
                          <p class="menu-item-details">${obj.text}</p>
                        </div>
                      </div>
                      <hr class="visible-xs">
                    </div>
                     
                    `
                }).join('')}
                `;
                subdom.innerHTML=temp;
            }
        }
    );
}