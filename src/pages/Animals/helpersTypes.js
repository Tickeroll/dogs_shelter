export function changeType(type) {
    if (type === 0) {return "не выбрано"}
    if (type === 1) {return "собака"}
    if (type === 2) {return "кот"}
}

export function changeSize(size) {
    if (size === 0) {return "не выбрано"}
    if (size === 1) {return "маленький"}
    if (size === 2) {return "средний"}
    if (size === 3) {return "большой"}
}

export function changeGenderAnimals(gender) {
    if (gender === 0) {return "Я хз кто, рождено "}
    if (gender === 1) {return "Я мальчик, я родился "}
    if (gender === 2) {return "Я девочка, я родилась "}
}

export function changeGenderAnimal(gender) {
    if (gender === 0) {return "Я хз кто я"}
    if (gender === 1) {return "Мальчик"}
    if (gender === 2) {return "Девочка"}
}

export function changeAge(_age) {
    let age = _age / 12;
    if (age > 1) {
        return
    }
    return
    if (age === 0) {return "0-1 год"}
    if (age === 1) {return "1-3 лет"}
    if (age === 2) {return "3-6 лет"}
    if (age === 3) {return "старше 6 лет"}
}