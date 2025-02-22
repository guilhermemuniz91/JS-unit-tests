const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const detalhes = productDetails('1', '2')
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    // expect(productDetails).
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.keys(productDetails()).length).toBe(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof detalhes[0]).toBe('object');
    expect(typeof detalhes[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(typeof detalhes[0]).not.toBe(detalhes[1]);
    // Teste se os dois productIds terminam com 123.
    expect(detalhes[0].details.productId).toMatch('123');
    expect(detalhes[1].details.productId).toMatch('123');
  });
});
