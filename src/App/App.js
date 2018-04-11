import './App.scss';
import $ from 'jquery';
import dt from 'datatables.net-bs4';

export class App {

  constructor(options) {
    this.props = {
      people: [],
      ...options
    };
  }

  render() {
    if (this.props.people.length) {
      const table = $('#people').DataTable({
        'data': this.props.people,
        'columns': [
          {title: 'E-mail'},
          {title: 'First name'},
          {title: 'Last name'},
          {title: 'Primary group'},
          {title: 'Phone number'},
          {title: 'Hours studied'}
        ],
        initComplete: function() {
          $('#people thead th').each(function() {
            const title = $(this).text().toLowerCase();
            $(this).append(`<div class='header__search'><input type='text' class='form-control form-control-sm' placeholder='Search ${title}'/></div>`);
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

      return table;
    }
    return null;
  }
}
