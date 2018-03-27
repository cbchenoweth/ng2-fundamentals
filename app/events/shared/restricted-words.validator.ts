import {FormControl} from "@angular/forms";

export function restrictedWords(words) {
    return (control: FormControl): Object => {
        if(!words) {
            return null;
        }

        const invalidWords = words
            .map(w => control.value.includes(w) ? w : null)
            .filter(w => w != null);

        return invalidWords.length > 0
            ? {'restrictedWords': invalidWords.join(', ')}
            : null;
    };
}