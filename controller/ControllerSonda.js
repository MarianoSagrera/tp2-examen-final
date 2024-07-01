import SondaService from '../services/ServiceSonda.js';

class Controller {
    service = new SondaService();

    crearSonda = async (req, res) => {
        try {
            const { id, temperatura } = req.body;
            const data = await this.service.crear(id, temperatura);
            res.status(200).send({ Msg: data});
        } catch (error) {
            res.status(422).send({ message: error.message });
        }
    };

    obtenerTodas = async (req, res) => {
        try {
            const allSondas = await this.service.obtenerTodas();
            res.status(200).send({ Msd: allSondas });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    };

    buscarPorID = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await this.service.buscarPorID(parseInt(id));
            if (!data) throw error
            res.status(200).send({ Msg: data });
        } catch (error) {
            res.status(404).send({ message: error.message });
        }
    };
}

export default Controller;