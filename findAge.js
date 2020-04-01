const findAge = {
    list: [],
    counter: 0,
    Parsing(frase) {
        this.list[this.counter] = frase;
        this.counter++;
    },
    Responde(nome) {
        let j = 0;
        //percorre a lista de frases
        for (let i = 0; i < this.list.length; i++){
            //confere se a frase atual tem o mesmo nome que a entrada
            while ((this.list[i][j] === nome[j]) || (this.list[i][j] === ' ')) {
                j++;
                //chega ao final do nome
                if (this.list[i][j] === ' '){
                    //j percorre o segmento ' tem ' para capturar o numero
                    j += 5;
                    let start = j;
                    //j chega ao final do numero
                    for (j; this.list[i][j] !== ' '; j++){
                    }
                    return this.list[i].slice(start, j);
                }                
            }
        }
        return 'not found';
    }
}

module.exports = findAge;