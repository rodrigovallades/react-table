import * as styles from './App.scss';
import $ from 'jquery';
import dt from 'datatables.net';

export class App {

  constructor(options) {
    this.props = {
      dom: null
    };
  }

  render(info) {
    if (info) {

      const table = $('#people').DataTable({
        data: info,
        columns: [
          {title: 'E-mail'},
          {title: 'First name'},
          {title: 'Last name'},
          {title: 'Primary group'},
          {title: 'Phone number'},
          {title: 'Hours studied'}
        ],
        'initComplete'() {
          $('#people thead th').each(function() {
            const title = $(this).text().toLowerCase();
            $(this).append(`<div class='header__search'><input type='text' placeholder='Search ${title}'/></div>`);
          });
        }
      });

      table.columns().every(function() {
        var that = this;
        $('input', this.header())
          .on('keyup change', function() {
            if (that.search() !== this.value) {
              that
                .search(this.value)
                .draw();
            }
          })
          .on('click', function(e) {
            e.stopPropagation();
          });
      });
    }
  }
}
