export const formatNumber = (number) => {
    return number.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });
};