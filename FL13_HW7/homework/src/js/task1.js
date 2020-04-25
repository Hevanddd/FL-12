`use strict`;

let userLogin = prompt(`Enter, please, your login: `, `user@gmail.com`);
const MIN_LETTERS = 4;

if (userLogin === '' || userLogin === null) {
    alert(`Canceled`);
} else if (userLogin.length < MIN_LETTERS) {
    alert(`I don't know any users having name length less than 4 symbols.`);
} else if (userLogin === `User` || userLogin === `Admin`) {
    let pass = prompt(`Enter, please, your password: `, `Your password`);

    if (pass === '' || pass === null) {
        alert(`Canceled`);
    } else if (userLogin === `User` && pass === `UserPass` || userLogin === `Admin` && pass === `RootPass`) {
        let currentHours = new Date().getHours();
        const TIME_MARKER_NIGHT = 20;
        const TIME_MARKER_DAY = 8;
        if (currentHours >= TIME_MARKER_DAY && currentHours < TIME_MARKER_NIGHT) {
            switch (userLogin) {
                case `User`:
                    alert(`Good day, dear User!`);
                    break;
                case `Admin`:
                    alert(`Good day, dear Admin`);
                    break;
                default:
                    alert(`Something is going wrong`);
            }
        } else if (currentHours >= TIME_MARKER_NIGHT && currentHours < TIME_MARKER_DAY) {
            switch (userLogin) {
                case `User`:
                    alert(`Good night, dear User!`);
                    break;
                case `Admin`:
                    alert(`Good night, dear Admin`);
                    break;
                default:
                    alert(`Something is going wrong`);
            }
        }
    } else {
        alert(`Wrong password.`);
    }

} else {
    alert(`I don't know you`);
}