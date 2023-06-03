
class UpperCase {

    static convertFirstCharacterToUppercase = (stringToConvert: string) => {
        var firstCharacter = stringToConvert.substring(0, 1);
        var restString = stringToConvert.substring(1);
        return firstCharacter.toUpperCase() + restString;
    }

}



export default UpperCase