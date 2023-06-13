export const validarNombre = (nombre) => {
    const expresionNombre = /^[a-zA-ZÀ-ÿ\s]{0,40}$/;
    return (expresionNombre.test(nombre)) ? true : false;
};

export const validarCorreo = (email) => {
    const expresionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return (expresionCorreo.test(email)) ? true : false;
};

export const validarClave = (password) => {
    const expresionClave = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&-]{8,45}$/;
    return (expresionClave.test(password)) ? true : false;
}