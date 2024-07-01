import Sonda from "../Models/Sonda.js";

class SondaService {
    sondaModel = new Sonda();
  crear = async (id, temperatura) => {
    try{
        if (id < 1 || id > 5 || temperatura < -20 || temperatura > 100) {
            throw new Error('datos no validos');
        }
        const timestamp = new Date();
        const sondaAPersistir = {id, temperatura, timestamp}
        const data = await this.sondaModel.crear(sondaAPersistir);
        return data;
    } catch (error) {
        throw error;
    }
  }

  obtenerTodas = async() => {
    try {
        const data = await this.sondaModel.obtenerTodas();
        return data;
    } catch (error) {
        throw error;
    }
  }

  buscarPorID = async(id) => {
    try {
        const sondas = await this.sondaModel.buscarPorID(id);
        if (sondas.length === 0) {
            throw new Error('Numero de sonda incorrecto');
        }
        return sondas;
    } catch (error) {
        throw error;
    }
  }
}

export default SondaService;