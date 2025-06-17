const btn = document.querySelector('form');

btn.addEventListener('submit', (event)=>{
    event.preventDefault();
    const title= document.querySelector('input[name="title"]').value;
    const author = document.querySelector('input[name="author"]').value;
    const pages = document.querySelector('input[name="pages"]').value;
    const isChecked = document.querySelector('input[type="checkbox"]').checked;

    let card = document.createElement("div");
    card.className = "card";
    let dis = document.querySelector(".b_display");


    const t = document.createElement("h1");
    t.textContent=title;
    card.appendChild(t);

    const a = document.createElement("h3");
    a.textContent=`Written by ${author}`;
    card.appendChild(a);

    const p = document.createElement("h3");
    p.textContent=`No.of pages: ${pages}`;
    card.appendChild(p);

    const c = document.createElement("p");
    if (isChecked==true) {
        c.textContent="Book read";
    }
    else{
        c.textContent="Book not read";
    }
    card.appendChild(c);

    dis.appendChild(card);

    btn.reset();

});






