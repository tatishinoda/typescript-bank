export class Armazenador{
    private constructor() { }

    //salvando no localStorage como json e armazena no localStorage com o setItem
    static salvar(chave: string, valor: any): void {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }
    //obtendo do localStorage e convertendo de volta para o objeto original
    static obter<T>(chave: string, reviver?: (this: any, key: any, value: any) => any): T | null {
        const valor = localStorage.getItem(chave);

        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver) as T;
        }
        return JSON.parse(valor) as T;
    }
}
