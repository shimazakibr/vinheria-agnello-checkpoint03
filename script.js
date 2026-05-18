// ==========================================
// ARRAY PRINCIPAL DE VINHOS
// ==========================================

const vinhos = [];

// ==========================================
// FUNÇÃO DE VALIDAÇÃO
// ==========================================

function validarEntrada(mensagem, tipo = "texto") {

    let entrada;

    do {

        entrada = prompt(mensagem);

        if (tipo === "numero") {

            entrada = parseInt(entrada);

            if (isNaN(entrada) || entrada < 0) {

                alert("Digite um número válido.");
                entrada = null;
            }

        } else {

            if (!entrada || entrada.trim() === "") {

                alert("Campo obrigatório.");
                entrada = null;
            }
        }

    } while (entrada === null);

    return entrada;
}

// ==========================================
// FUNÇÃO PARA CLASSIFICAR VINHO
// ==========================================

function classificarVinho(safra) {

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - safra;

    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 7) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}

// ==========================================
// ADICIONAR VINHO AO ARRAY
// ==========================================

function adicionarVinho(nome, tipo, safra, estoque) {

    const vinho = {
        nome,
        tipo,
        safra,
        estoque,
        classificacao: classificarVinho(safra)
    };

    vinhos.push(vinho);

    console.log(`✅ Vinho ${nome} cadastrado com sucesso!`);
}

// ==========================================
// LISTAR VINHOS - forEach
// ==========================================

function listarVinhos() {

    console.log("========== LISTA DE VINHOS ==========");

    vinhos.forEach((vinho, index) => {

        console.log(`
Vinho ${index + 1}
Nome: ${vinho.nome}
Tipo: ${vinho.tipo}
Safra: ${vinho.safra}
Classificação: ${vinho.classificacao}
Estoque: ${vinho.estoque}
        `);

    });
}

// ==========================================
// ESTOQUE BAIXO - filter
// ==========================================

function mostrarEstoqueBaixo() {

    const estoqueBaixo = vinhos.filter(vinho => vinho.estoque < 5);

    console.log("========== VINHOS COM ESTOQUE BAIXO ==========");

    estoqueBaixo.forEach(vinho => {

        console.log(`${vinho.nome} - Estoque: ${vinho.estoque}`);

    });

    return estoqueBaixo;
}

// ==========================================
// ESTOQUE TOTAL - reduce
// ==========================================

function calcularEstoqueTotal() {

    const total = vinhos.reduce((acumulador, vinho) => {

        return acumulador + vinho.estoque;

    }, 0);

    console.log("========== ESTOQUE TOTAL ==========");
    console.log(`Total de garrafas: ${total}`);

    return total;
}

// ==========================================
// NOMES EM MAIÚSCULO - map
// ==========================================

function mostrarNomesMaiusculos() {

    const nomesMaiusculos = vinhos.map(vinho => vinho.nome.toUpperCase());

    console.log("========== NOMES EM CAIXA ALTA ==========");

    nomesMaiusculos.forEach(nome => {

        console.log(nome);

    });

    return nomesMaiusculos;
}

// ==========================================
// CADASTRO DOS VINHOS
// ==========================================

let continuar = true;

while (continuar) {

    alert("🍷 Cadastro de novo vinho");

    let nome = validarEntrada("Nome do vinho:");
    let tipo = validarEntrada("Tipo do vinho (Tinto, Branco ou Rosé):");
    let safra = validarEntrada("Safra do vinho:", "numero");
    let estoque = validarEntrada("Quantidade em estoque:", "numero");

    adicionarVinho(nome, tipo, safra, estoque);

    let resposta = prompt("Deseja cadastrar outro vinho? (s/n)");

    continuar = resposta.toLowerCase() === "s";
}

// ==========================================
// EXIBIÇÕES FINAIS
// ==========================================

listarVinhos();

mostrarEstoqueBaixo();

calcularEstoqueTotal();

mostrarNomesMaiusculos();

alert("Sistema finalizado! Confira o console.");