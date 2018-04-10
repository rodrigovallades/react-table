import { App } from './App';
import 'datatables.net-dt/css/jquery.dataTables.css';

function main() {

  const tableInfo = [
    ['something@somewhere.com', 'Joe', 'Smith Jr.', 'Important people', '781-633-2222', 1000],
    ['anywhere@anywhere.com', 'Jane', 'Doe', 'Not so important people', '871-336-2222', 500],
    ['elsewhere@elsewhere.com', 'Rodrigo', 'Vallades', 'VIP', '555-111-000', 5000]
  ];

  const app = new App({
    dom: document.querySelector('.container')
  });

  app.render(tableInfo);
}

document.addEventListener('DOMContentLoaded', main);
