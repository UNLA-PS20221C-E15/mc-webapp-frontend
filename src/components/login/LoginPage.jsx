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
        <label for="email">Email:  </label>
        <br />
        <input type="text" name="email" id="email" />
        <br /><br />
        <label for="contraseña">Contraseña:  </label>
        <br/>
        <input type="text" name="Contraseña" id="Contraseña" />
        <br /><br />
        <input type="submit" value="Enviar" />
        <br />
        <a href="/register">¿No tienes una cuenta? Registrate</a>.
      </form>
    );
  }
}