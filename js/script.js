//Creating a js array and calculating the total pages required
const page = document.querySelector('.page');
const contacts = Array.from(document.querySelectorAll('li.contact-item'));

const individualPage = pageClass => `<div class="${pageClass}"></div>`;
const pageNum = pageNo => `<li id="${pageNo}"><a>${pageNo}</a></li>`;

page.insertAdjacentHTML('beforeend', individualPage("pagination"));
const pageTot = document.querySelector('.pagination'); 

const totalPagesReq =(pagesArr) => {  
    return Math.ceil(pagesArr.length / 10);  
}

for(i=0; i< totalPagesReq(contacts); i++){
    pageTot.insertAdjacentHTML('beforeend', pageNum((i+1)));
}


//Display the clicked page with 10 contacts and remove additional contacts
const disp = Array.from( document.querySelectorAll('div.pagination a'));
disp.map(disp => disp.addEventListener('click', () => displayContacts(disp))); 

const contactDisp = document.querySelector('.contact-list');
for(i=0; i < 10; i++){
    contactDisp.appendChild(ContactsList(contacts, i));
}

contacts.forEach(element => {
    element.remove();
});

 
function displayContacts(disp){
    const contactsPage = Array.from(document.querySelectorAll('li.contact-item'));
    
    let pageNum = disp.innerHTML;    
    let endPage = (pageNum * 10) - 1;
    let startPage = endPage - 9;
    
    const contactDisp = document.querySelector('.contact-list');
    if(pageNum == totalPagesReq(contacts)){
        startPage = (pageNum -1) * 10;
        endPage = contacts.length
        for(i=startPage; i < endPage; i++){
            contactDisp.appendChild(ContactsList(contacts, i));
        } 
    } else {
        for(i=startPage; i <= endPage; i++){
            contactDisp.appendChild(ContactsList(contacts, i));
        }
    }  

    contactsPage.forEach(element => {
        element.remove();
    });

}
    

function ContactsList(contacts, i) {
    let toHtml = `${contacts[i].innerHTML}`;
    let newContact = document.createElement('li');
    newContact.classList.toggle("contact-item");
    newContact.classList.toggle("cf");
    newContact.insertAdjacentHTML('beforeend', toHtml);

    return newContact;
}