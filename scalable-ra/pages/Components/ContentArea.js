
import s from "../../styles/ContentAreaTest.module.scss"
export default function contentArea(props) {
    
    
    return(
      
        <main className={s.main}>
     
        <header className={s.header}>
        <h3>header</h3>
        </header>
   
        
        
        <div className={s.content_area_wrap}>
        <div className={s.sidebar}>
           <h3>Sidebar</h3>
        </div>
        
           
        <div className={s.conrtent_area}>
         <h1>{props.heading}</h1>
        <h3>{props.children}</h3>
        </div>
    </div>
   
        
        
        <footer className={s.footer}>
        <h3>footer</h3>
        </footer>
        </main>
   
   
   
    );
}