function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomVariale = (Math.floor(Math.random() * 3));
    return choices[randomVariale];
};

export default getComputerChoice;