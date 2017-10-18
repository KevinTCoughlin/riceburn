import * as fs from 'fs';

export async function textHandler<T = any>(matches: string[], cb: (text: string) => any) {
    let json: T;
    let newJson: T;
    let outputString: string;
    let inputString: string;

    (await matches).forEach(async match => {
        inputString = fs.readFileSync(match).toString();

        if (cb) {
            outputString = cb(inputString);

            if (outputString !== inputString) {
                fs.writeFileSync(match, outputString);
            }
        }
    });
}