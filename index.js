const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");


//データのやり取り
async function getUsers () {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
};

//
function addList(user){
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
};


//リファクタリング後のユーザを追加する処理
async function listUsers(){
    const users = await getUsers();

    users.forEach(addList);
};


button.addEventListener("click",listUsers);

window.addEventListener("load",listUsers);