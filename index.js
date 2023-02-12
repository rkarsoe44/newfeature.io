export const myName = "leli";
export const myNameUi=() => {
    const h1 = document.createElement("h1");
    h1.innerText=myName;
    document.body.append(h1)
}
myNameUi()