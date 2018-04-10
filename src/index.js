import { App } from './App';

function main() {

  const tableInfo = [
    ['something@somewhere.com', 'Joe', 'Smith Jr.', 'Important people', '781-633-2222', 120],
    ['anywhere@anywhere.com', 'Jane', 'Doe', 'Not so important people', '871-336-2222', 2],
    ['elsewhere@elsewhere.com', 'Rodrigo', 'Vallades', 'VIP', '555-111-0000', 0],
    ['bny@bank.com', 'Nivea', 'Men', 'Important people', '--', 0],
    ['react@facebook.com', 'React', 'Redux', 'VIP', '111-546-1264', 8000],
    ['es6@javascript.com', 'Rodrigo', 'Vallades', 'VIP', '654-319-7987', 5000],
    ['something@somewhere.com', 'Joe', 'Smith Jr.', 'Important people', '781-633-2222', 1000],
    ['anywhere@anywhere.com', 'Jane', 'Doe', 'Not so important people', '871-336-2222', 500],
    ['elsewhere@elsewhere.com', 'Rodrigo', 'Vallades', 'VIP', '555-111-000', 5000],
    ['something@somewhere.com', 'Joe', 'Smith Jr.', 'Important people', '781-633-2222', 120],
    ['anywhere@anywhere.com', 'Jane', 'Doe', 'Not so important people', '871-336-2222', 2],
    ['elsewhere@elsewhere.com', 'Rodrigo', 'Vallades', 'VIP', '555-111-0000', 0],
    ['bny@bank.com', 'Nivea', 'Men', 'Important people', '--', 0],
    ['react@facebook.com', 'React', 'Redux', 'VIP', '111-546-1264', 8000],
    ['es6@javascript.com', 'Rodrigo', 'Vallades', 'VIP', '654-319-7987', 5000],
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
