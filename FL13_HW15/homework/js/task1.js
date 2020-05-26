function assign(target, ...elements) {
    let result = target;

    elements.forEach(element => {
        for (let property in element) {
            if (element.hasOwnProperty(property)) {
                result[property] = element[property];
            }
        }
    })
    return result;
}