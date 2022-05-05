import React, { Component } from 'react';
import s from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div className={s.dropdown}>
        <button type="button" className={s.toggle} onClick={this.show}>
          Show
        </button>

        <button type="button" className={s.toggle} onClick={this.hide}>
          Hide
        </button>

        {this.state.visible && <div className={s.menu}>Menu</div>}
      </div>
    );
  }
}

export default Dropdown;
