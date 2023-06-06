const linklist = document.querySelector('.linklist');
const linkadd = document.querySelector('.linkadd');
const linkcontact = document.querySelector('.linkcontact');
const books = document.querySelector('.books');
const contactInfo = document.querySelector('.contactInfo');
const formPage = document.querySelector('.formPage');
function nav(){
    linklist.addEventListener('click', ()=>{
        books.style.display = 'block';
        contactInfo.style.display = 'none';
        formPage.style.display = 'none';
    })
    linkadd.addEventListener('click', ()=>{
        books.style.display = 'none';
        contactInfo.style.display = 'none';
        formPage.style.display = 'block';
    })
    linkcontact.addEventListener('click', ()=>{
        books.style.display = 'none';
        contactInfo.style.display = 'block';
        formPage.style.display = 'none';
    })
}
export default nav;