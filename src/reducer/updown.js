
const init={
    TASK:[],
    name:"",
    id:"",
    password:""

}




//const counter=false


const ch=(state=init,action)=>{
 
    switch(action.type){
        case 'INC':{
              
           
              const list=action.pay.task   
               
            
            // state.Task=list,
          return   state={
                 TASK:action.pay.task,
                 name:action.pay.name,
                 id:action.pay.id,
                 password:action.pay.password
             }
           

          
         

        }
       
           
        
        default:return state
    }

    
  

   
}

export default ch