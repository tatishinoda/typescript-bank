export function ValidaDebito(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDebito) {
        if (valorDoDebito <= 0) {
            throw new Error("Valor do débito deve ser maior que zero.");
        }
        if (this.getSaldo() < valorDoDebito) {
            throw new Error("Saldo insuficiente para realizar o débito.");
        }
        return originalMethod.apply(this, [valorDoDebito]);
    };
    return descriptor;
}
export function ValidaDeposito(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDeposito) {
        if (valorDoDeposito <= 0) {
            throw new Error("Valor do depósito deve ser maior que zero.");
        }
        return originalMethod.apply(this, [valorDoDeposito]);
    };
    return descriptor;
}
