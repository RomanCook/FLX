let login, passwd, current_hours;
login = prompt('Enter your LOGIN');
if (login === null || login === "") {
    alert('Canceled');
} else if (login.length < 4) {
    alert('I don’t know any users having name length less than 4 symbols')
} else if (login.length > 4 && login !== 'Admin' && login !== 'User') {
    alert('I don’t know you');
} else if (login === 'Admin' || login === 'User') {
    passwd = prompt('Enter your PASSWORD');
    if (passwd === null || passwd === "") {
        alert('Canceled');
    } else if (passwd === 'UserPass' && login === 'User') {
        current_hours = new Date().getHours();
        if (current_hours < 20) {
            alert('Good day, dear User!');
        } else {
            alert('Good evening, dear User!');
        }
    } else if (passwd === 'RootPass' && login === 'Admin') {
        current_hours = new Date().getHours();
        if (current_hours < 20) {
            alert('Good day, dear Admin!');
        } else {
            alert('Good evening, dear Admin!');
        }
    } else {
        alert('Wrong password');
    }
}