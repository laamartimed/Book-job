import axios from 'axios';

const ENTREPRISE_API_BASE_URL = "http://localhost:8080/api/entreprise";

class EntrepriseService {

    getEntreprises(){
        return axios.get(ENTREPRISE_API_BASE_URL);
    }

    addEntreprise(entreprise){
        return axios.post(ENTREPRISE_API_BASE_URL + '/create', entreprise);
    }

    getEntrepriseById(id){
        return axios.get(ENTREPRISE_API_BASE_URL + '/' + id);
    }

    deleteEntreprise(id){
        return axios.delete(ENTREPRISE_API_BASE_URL + '/delete/' + id);
    }

    updateEntreprise(id, entreprise){
        return axios.put(ENTREPRISE_API_BASE_URL+ '/update/' + id, entreprise);
    }
}

export default new EntrepriseService();
