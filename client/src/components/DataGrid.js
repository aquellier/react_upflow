import React from 'react';
import DataRow from './DataRow';
import './DataGrid.css';
import ColumnResizer from 'react-column-resizer';


class DataGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };

    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  compareBy(key) {
    return (a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let duplicate = [...this.props.companies];
    duplicate.sort(this.compareBy(key));
    this.setState({data: duplicate});
    console.log(this.state.data)
  }

  render() {
    if (!this.props.companies) {
      return <div>Loading...</div>
    }
    const rows = this.state.data ? this.state.data.map((company) => <DataRow key={company.rank} {...company} />) :
      this.props.companies.map((company) => <DataRow key={company.rank} {...company} />);

    return (
      <div>
        <h1>French best performing companies in 2019</h1>
        <div className="data-grid">
          <table className="fixed-headers">
            <thead>
              <tr>
                <th onClick={() => this.sortBy('rank')}>Rank</th>
                <ColumnResizer className="columnResizer" minWidth={0} />
                <th onClick={() => this.sortBy('name')}>Name</th>
                <ColumnResizer className="columnResizer" minWidth={0} />
                <th onClick={() => this.sortBy('annuelMoyen')}>2019 growth in %</th>
                <ColumnResizer className="columnResizer" minWidth={0} />
                <th onClick={() => this.sortBy('threeYears')}>2014/2017 growth in %</th>
                <ColumnResizer className="columnResizer" minWidth={0} />
                <th onClick={() => this.sortBy('commune')}>City</th>
                <ColumnResizer className="columnResizer" minWidth={0} />
                <th onClick={() => this.sortBy('description')}>Description</th>
              </tr>
            </thead>
            <tbody className="table-content">
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    );

  }
}

export default DataGrid;
