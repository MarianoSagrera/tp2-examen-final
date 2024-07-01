class Sonda {
    sondas = [
        { id: 1, temperature: 25, timestamp: new Date() },
        { id: 2, temperature: 30, timestamp: new Date() },
        { id: 2, temperature: 31, timestamp: new Date() },
        { id: 2, temperature: 15, timestamp: new Date() },
        { id: 3, temperature: 28, timestamp: new Date() }
      ];

    crear = async (sonda) => {
        this.sondas.push(sonda);
        return this.sondas[this.sondas.length - 1];
    }

    obtenerTodas = async() => {
        return this.sondas;
    }

    buscarPorID = async(id) => {
        const data = this.sondas.filter(sonda => sonda.id === id);
        return data;
    }
}

export default Sonda;