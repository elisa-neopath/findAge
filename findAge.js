const findAge = {
    list: [],
    counter: 0,
    Parsing(frase) {
        let i, j;
        //procura o fim do nome
        for (i = 0; frase[i] !== ' '; i ++){}
        //procura o fim do numero
        for (j = i + 5; frase[j] !== ' '; j++){}
        //passa o nome e a idade para a lista
        this.list[this.counter] = [frase.slice(0, i), frase.slice((i + 5), j)];
        this.counter++;
    },
    Responde(nome) {
        let i = 0;
        //procura o nome
        while ((i < this.list.length) && (this.list[i][0] !== nome)) {
            i++;
        }
        //retorna a idade correspondente
        if (i < this.list.length)
            return this.list[i][1];
        return 'not found';
    }
}

module.exports = findAge;