import React, { Component } from 'react';
import {UsuarioService} from '../../services/UsuarioService';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      usuario: {
        id: null,
        name: null,
        lastname: null,
        document: null,
        fechaNaciminento: null,
        email: null,
        username: null,
        password: null,
        rolename: null,

      },
      selectedUsuario: {

      }
    };
    
    this.usuarioService = new UsuarioService();
    this.save = this.save.bind(this);
    
  }

  componentDidMount() {
    this.usuarioService.getAll().then(data => this.setState({ usuarios: data }))
  }

  save() {
    this.usuarioService.save(this.state.usuario).then(data => {
      this.setState({
        visible: false,
        usuario: {
          id: null,
          name: null,
          lastname: null,
          document: null,
          fechaNaciminento: null,
          email: null,
          username: null,
          password: null,
          rolename: null,
        }
      });
      this.growl.show({ severity: 'success', summary: 'Atención!', detail: 'Se guardó el registro correctamente.' });
      this.usuarioService.getAll().then(data => this.setState({ usuarios: data }))
    })
  }

  

  render() {
    return (
      <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
        <Menubar model={this.items} />
        <br />
       
          <br />
          <form id="persona-form">
          <label htmlFor="name">Nombre:  </label>

            <span className="p-float-label">
              <InputText value={this.state.usuario.name}  id="name" onChange={(e) => {
                let val = e.target.value;
                this.setState(prevState => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.name = val;

                  return { usuario };
                })
              }
              } />
            </span>
            <br /><br />

            <span className="p-float-label">
            <label htmlFor="lastname">Apellido:  </label>

              <InputText value={this.state.usuario.lastname}  id="lastname" onChange={(e) => {
                let val = e.target.value;
                this.setState(prevState => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.lastname = val

                  return { usuario };
                })
              }
              } />
            </span>
            <br /><br />
            <label htmlFor="documento">Documento:  </label>

            <span className="p-float-label">
              <InputText value={this.state.usuario.document}  id="documento" onChange={(e) => {
                let val = e.target.value;
                this.setState(prevState => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.document = val

                  return { usuario };
                })
              }
              } />
            </span>
            <br /><br />
            <span className="p-float-label">
               <label htmlFor="fechaNaciminento">Fecha de nacimiento:  </label>

              <InputText value={this.state.usuario.fechaNaciminento} type="date" id="fechaNaciminento" onChange={(e) => {
                let val = e.target.value;
                this.setState(prevState => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.fechaNaciminento = val

                  return { usuario };
                })
              }
              } />
            </span>  
            <br /><br />
            <span className="p-float-label">
            <label htmlFor="email">Email:  </label>

              <InputText value={this.state.usuario.email} id="email" onChange={(e) => {
                let val = e.target.value;
                this.setState(prevState => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.email = val

                  return { usuario };
                })
              }
              } />
              
            </span>  

            <br />
            <br />

            <span className="p-float-label">
            <label htmlFor="nombredeusuario">Nombre de usuario:  </label>

              <InputText value={this.state.usuario.username} id="nombredeusuario" onChange={(e) => {
                let val = e.target.value;
                this.setState(prevState => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.username = val

                  return { usuario };
                })
              }
              } />
            </span>  
            <br /><br />
            <span className="p-float-label">
            <label htmlFor="password">Contraseña: </label>

              <InputText value={this.state.usuario.password}  id="password" onChange={(e) => {
                let val = e.target.value;
                this.setState(prevState => {
                  let usuario = Object.assign({}, prevState.usuario);
                  usuario.password = val

                  return { usuario };
                })
              }
              } />
            </span>  

          </form>
          <input type="submit" value="Enviar" onClick={this.save} />

      </div>
    );
  }

  showSaveDialog() {
    this.setState({
      visible: true,
      persona: {
        id: null,
        name: null,
        lastname: null,
        document: null,
        fechaNaciminento: null,
        email: null,
        username: null,
        password: null,
        rolename: null,
      }
    });
    document.getElementById('usuario-form').reset();
  }


}
