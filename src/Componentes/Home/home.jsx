import axios from "axios";
import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage"; // usando uma lib, pra salvar no localStorage

function Home() {

   








    
    




   const [color, setColor] = useLocalStorage('color', 'black');

   const  backgroundNew = () => { // eu limitei as cores pro card
        if(color === 'black'){
            setColor('blue')
        } else if  (color === 'blue'){
            setColor('green')
        } else if (color === 'green') {
            setColor('gray')
        } else {
            setColor('black')
        }
    }

    
    const [github, setGithub] = useState({
        name: '',
        seguidores: '',
        seguindo: '',
        repositorios: '',
        local: '', 
        img: ''
    })

    useEffect( () => {
    const url = `https://api.github.com/users/MiguelSperle`

     axios.get(url)
      .then( ( response ) => {
        console.log(response.data)
        setGithub({
            name: response.data.name,
            seguidores: response.data.followers,
            seguindo: response.data.following,
            repositorios: response.data.public_repos,
            local: response.data.location,
            img: response.data.avatar_url    
        })
      })
    },[])

    return (
      <div  style={{ backgroundColor: color }} className="container-color">
         <div  className="container-card">
            <div className="container-header">
                <img src="/img/logo.png" alt="" />
                <p className="my-name">{github.name}</p>
                <img style={{ width: 120}} src={github.img} alt="" />
            </div>
             <div className="container-information-dad">
                <div className="container-information">
               <div className="container-followers">
                  <img src='/img/followers.png' alt="" />
                  <p className="count-followers">{github.seguidores}</p>
                  <p>Seguidores</p>
               </div>

               <div className="container-following">
                   <img src="/img/following.png" alt="" />
                   <p className="count-following">{github.seguindo}</p>
                   <p>seguindo</p>
               </div> 

               <div className="container-repository"> 
                  <img src="/img/repository.png" alt="" />
                  <p className="count-repository">{github.repositorios}</p>
                  <p>Repositórios</p>
               </div>

               <div className="container-company">
                  <img src="/img/company.png" alt="" />
                  <p className="company">nenhuma</p>
               </div>

               <div className="container-location">
                   <img src="/img/location.png" alt="" />
                   <p>{github.local}</p>
               </div>
               </div>
             </div>

            <div className="container-footer-card">
               <div className="container-info-footer">
                  <img src="/img/logo.png" alt="" />
                  <p>ROCKETCARD</p>
               </div>
               <button  onClick={backgroundNew} type="submit"> Mudar Background</button>
           </div>
         </div>
      </div>
     )
   }
   export default Home