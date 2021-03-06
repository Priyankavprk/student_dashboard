import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { getFilteredData, filterDataAlphabatical } from '../../actions';
import './styles.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: this.props.searchItem
    }
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark mb-3">
         <a className="navbar-brand" href="#">
           <h1>{this.props.title}</h1>
         </a>
         <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={e => this.props.getFilteredData({ searchItem: e.target.value})}/>
          <Button variant="outline-light" style={{margin: '2rem'}} onClick={() => this.props.filterDataAlphabatical()}>Alaphabetical</Button>
         </Form>
       </nav>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
}


const mapStateToProps = state => ({
   studentsData: state.students.data,
   searchItem: state.students.searchItem
})

const mapDispatchToProps = dispatch => ({
  getFilteredData: (searchText) => dispatch(getFilteredData(searchText)),
  filterDataAlphabatical: () => dispatch(filterDataAlphabatical())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
