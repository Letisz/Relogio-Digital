function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');

  const horario = `${horas}:${minutos}:${segundos}`;
  document.getElementById('relogio').textContent = horario;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // exibe a hora imediatamente ao abrir a página
