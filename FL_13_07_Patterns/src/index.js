import Client from './components/Client';

fetch("https://roman4ak.github.io/fe-oop-lab/mocks/epms.json")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
        }
    })
    .then((result) => {
        renderPage(result);
    });


function renderPage(data){
    console.log(data);

    const employees = new Client(data);
    
    const allBtn = document.querySelector('.all_employees')
        .addEventListener('click', () => {
            document.querySelector('.warning_inputs').classList.add('hide');
            employees.clean();
            employees.render('all');
        });
    
    const unitBtn = document.querySelector('.all_units')
        .addEventListener('click', () => {
            document.querySelector('.warning_inputs').classList.add('hide');
            employees.clean();
            employees.render('units');
        });
    
    const warningBtn = document.querySelector('.warning_employees')
        .addEventListener('click', () => {
            document.querySelector('.warning_inputs').classList.toggle('hide');
            employees.clean();
        })
    
    const perfBtn = document.querySelector('.perf_btn')
        .addEventListener('click', () => {
            const value = document.querySelector('#performance').value;
            employees.clean();
            employees.render('performance', value);
        })
}

    