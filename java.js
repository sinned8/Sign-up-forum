function validation(){
    const first = document.getElementById('first_name').value;
    const last = document.getElementById('last_name').value;
    const email = document.getElementById('user_mail').value;
    const phone = document.getElementById('user_phone').value;
    const text = document.getElementById('relevantInfo').value
    if ((first) == '' || (last) == '' || (email) == '' || (phone) == '' || (text) == ''){
        alert('Please fill out all fields.')
    }else{
        alert('Ticket submitted.')
    }
}