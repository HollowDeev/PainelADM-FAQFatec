const openMenuUsuario = () => {
    const campoUsuario = document.getElementById('campoUsuario')
    const menuUsuario = document.getElementById('menuUsuario')

    campoUsuario.classList.toggle('menuAberto')
    menuUsuario.classList.toggle('aberto')
}