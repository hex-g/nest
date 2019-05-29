let JSONmano = JSON.parse(
  '{"name":"root","children":[{"name":"a","children":[{"name":"diretorio","children":[{"name":"caioArquivo","children":null}]},{"name":"arquivo1","children":null},{"name":"diretoriovazio","children":[]}]},{"name":"a","children":[{"name":"samuel","children":[{"name":"caioDiretorio","children":[]}]},{"name":"teste","children":[]},{"name":"arquivo2","children":null},{"name":"teste","children":[]},{"name":"arquivo2","children":null},{"name":"teste","children":[]},{"name":"arquivo2","children":null},{"name":"teste","children":[]},{"name":"arquivo2","children":null}]}]}'
);
let arv = document.querySelector("#arv");

let level = 0;
const arvere = root => {
  let index = 0;
  if (root.name) var subtree = document.createElement("div");
  subtree.setAttribute("class", "arvo");
  arv.appendChild(subtree);
  subtree.innerText = root.name + " lv:" + level;
  //subtree.style.background="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
  subtree.style.background = "rgb(0,0,0)";

  arv = subtree;
  while (root.children !== null && root.children[index]) {
    level++;
    arvere(root.children[index]);
    index++;
  }
  if (root.children === null) {
    subtree.style.background = "rgb(100,20,30)";
  }
  level--;
  arv = arv.parentElement;
};
arvere(JSONmano);
console.log(JSONmano);
