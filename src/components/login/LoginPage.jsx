import React, { Component } from 'react';
import './Login.css';
import {UsuarioService} from '../../services/UsuarioService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Menubar } from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import * as ReactDOM from 'react-dom';

export default class LoginPage extends Component {

  render() {
    return (
      <form>
        <label for="nya">Nombres y Apellidos:</label>
        <br />
        <input type="text" name="nya" id="nya" />
        <br /><br />
        <label for="email">Email:</label>
        <br />
        <input type="text" name="email" id="email" />
        <br /><br />
        <label for="edad">Edad:</label>
        <br/>
        <input type="text" name="edad" id="edad" />
        <br /><br />
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

ReactDOM.render(
  <LoginPage />,
  document.getElementById('root')
);


