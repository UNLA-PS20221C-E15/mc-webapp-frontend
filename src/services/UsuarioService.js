import axios from 'axios';

export class UsuarioService {
    baseUrl = "http://localhost:8080/api/users/";

    getAll(){
        return axios.get(this.baseUrl + "all").then(res => res.data);
    }

    save(usuario) {
        return axios.post(this.baseUrl + "save", usuario).then(res => res.data);
    }

    delete(id) {
        return axios.get(this.baseUrl + "delete/"+id).then(res => res.data);
    }
}