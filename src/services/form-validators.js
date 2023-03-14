export class ValidatorServices{

    static min(value, min){
        if(value.length < min){
            return `Veuillez taper au moins ${min} lettre(s).`;
        }
    }

    static max(value, max){
        if (value.length > max) {
            return `Veuillez taper pas plus de ${max} lettre(s).`;
        }
    }
}