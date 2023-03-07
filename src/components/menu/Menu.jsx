import styles from './Menu.module.css'

export function Menu (){
  return(
    <div>
      <div className={styles.menu}>
        <a href="#"><span></span>Inicio</a>
        <a href="#"><span></span>Conteudo</a>
        <a href="#"><span></span>Agenda</a>
        <a href="#"><span></span>Membros</a>
        <a href="#"><span></span>Espaço</a>
        <a href="#"><span></span>Geral</a>
        <a href="#"><span></span>Leitura</a>
        <a href="#"><span></span>Conteudo externo</a>
      </div>
    </div>

  );
}