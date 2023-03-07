import styles from './Post.module.css'

export function Post (){
  return (
    <article className={styles.post}>
      <header className={styles.headerPost}>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/lucaasaragao.png"/>
          <div className={styles.authorInfo}>
            <strong>
              Lucas Magno
            </strong>
          </div>
        </div>
            <time dateTime='2023-03-04'>06/03/23</time>
      </header>

      <div className={styles.content}>
        <p>Novo post</p>
      </div>
      <hr size="0" />
      <footer>
      <div className={styles.commentAuthor}>
          <img className={styles.commentAvatar} src="https://github.com/lucaasaragao.png"/>
          <div className={styles.comment}>
            <strong>
              Lucas Magno
            </strong>
          </div>
        </div>
      </footer>


    </article>
  )
}