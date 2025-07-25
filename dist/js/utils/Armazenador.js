export class Armazenador {
    constructor() { }
    //salvando no localStorage como json e armazena no localStorage com o setItem
    static salvar(chave, valor) {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }
    //obtendo do localStorage e convertendo de volta para o objeto original
    static obter(chave, reviver) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
    }
}
