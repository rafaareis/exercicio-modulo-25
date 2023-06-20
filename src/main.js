const alunos = [
    {
        nome: 'Courtney LaPlante',
        nota: 8
    },
    {
        nome: 'Mike Kerr',
        nota: 5
    },
    {
        nome: 'Tatiana Shmayluk',
        nota: 6
    },
    {
        nome: 'James Hetfield',
        nota: 7
    },
]

const notaAluno = alunos.filter(function(aluno){
    return aluno.nota >= 6;
})

console.log(notaAluno);
