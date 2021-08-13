
// Initialize All Required DOM Element

const transferForm = document.querySelector('.transferForm');
const fromUser = document.querySelector('#fromUser');
const toUser = document.querySelector('#toUser');
const credit = document.querySelector('#credit');
const transferMesssage = document.querySelector('.transfer_message');

 
const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

// Initialize Responsive Navbar Menu
burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("active");
	navbarMenu.classList.toggle("active");

	if (navbarMenu.classList.contains("active")) {
		navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
	} else {
		navbarMenu.removeAttribute("style");
	}
});

// message to show to client after transfer
function transferStatus(msg) {
  transferMesssage.textContent = msg;
 setTimeout(()=>{
  transferMesssage.textContent ='';
 },3000);

}
// transfer money to server
async function transferMoney(payload) {
    const url = `http://localhost:3000/transfer`;

    const data = { username: 'example' };

    fetch('http://localhost:3000/transfer', {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload), 
    })
    .then(response => response.json())
    .then(data => {
        if(data.msg === 'fail'){
        transferStatus(data.error || 'transfer failed!');
        }else{
          transferStatus('transfer successfully done!');
        }
    })
    .catch((error) => {
      
      transferStatus('transfer failed!');
    });
}



transferForm.addEventListener('submit', (e)=>{
    e.preventDefault();
 
    const transferPayload = {
        from: fromUser.value,
        to: toUser.value,
        credit: credit.value,
    }
    fromUser.value = '';
    toUser.value = '';
    credit.value = '';

    if(transferPayload.from === transferPayload.to){
        alert('cannot send to same user!');
        return;
    }                                                                 

    transferMoney(transferPayload);

})






