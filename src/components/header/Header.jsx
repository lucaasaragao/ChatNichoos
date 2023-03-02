import styles from './Header.module.css'

export function Header (){
  return (
    <header className={styles.header} >
      <img src="https://ik.imagekit.io/nichoos/Tue_Feb_07_2023_13_28_48_GMT_0000__Coordinated_Universal_Time__knTby2buV.jpg/tr:w-200,h-40" 
      alt="Logo nichoos" />
    </header>
  );
}