// Função para calcular a média de três números
function calcularMedia() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const num3 = parseFloat(document.getElementById('num3').value);
  
  // Verifica se os valores são números válidos
  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
      const media = (num1 + num2 + num3) / 3;
      // Exibe a média calculada
      document.getElementById('resultadoMedia').innerText = 'A média é: ' + media.toFixed(2);
  } else {
      // Exibe mensagem de erro caso algum valor seja inválido
      document.getElementById('resultadoMedia').innerText = 'Por favor, insira números válidos.';
  }
}

// Função para verificar a idade do usuário
function verificarIdade() {
  const idade = parseInt(document.getElementById('idade').value);
  
  // Verifica se a idade é um número válido
  if (!isNaN(idade)) {
      if (idade < 18) {
          // Exibe mensagem caso o usuário seja menor de idade
          alert('Você é menor de idade.');
      } else {
          // Exibe mensagem caso o usuário não seja menor de idade
          alert('Você não é menor de idade.');
      }
  } else {
      // Exibe mensagem de erro caso a idade seja inválida
      alert('Por favor, insira uma idade válida.');
  }
}

// Função para definir o mês com base em um número fornecido
function definirMes() {
  const mes = parseInt(document.getElementById('mes').value);
  const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  
  // Verifica se o número do mês é válido
  if (!isNaN(mes) && mes >= 1 && mes <= 12) {
      // Exibe o mês correspondente
      document.getElementById('resultadoMes').innerText = 'O mês é: ' + meses[mes - 1];
  } else {
      // Exibe mensagem de erro caso o número seja inválido
      document.getElementById('resultadoMes').innerText = 'Número inválido. Por favor, informe um número de 1 a 12.';
  }
}
